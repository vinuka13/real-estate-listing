require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2
const https = require('https')

const app = express()
app.use(express.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({extended: true}))
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})


cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET,
    secure: true,
})

const PORT = 5000;
//process.env.PORT;

app.post('/submit', function(req, res){

    const username = req.body.Username
    const password = req.body.Password


    if(username === process.env.USER){
        if(password === process.env.PASS){ 
            const token = jwt.sign({ name : process.env.TOKENNAME}, process.env.TOKENPASS, {
                                            expiresIn:  60 * 60
                        })
                        res.send(token)
        } else {
            res.status(401).json({
                'error': 'password invalid'
            })
        }
    } else {
        res.status(401).json({
            'error' : 'username invalid'
        })
    }
})


const landsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    blocks: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mainImg: {
        type: String,
        required: true
    },
    sampleimg: [ ],
    discription: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})

const Land = mongoose.model('Land', landsSchema)

app.get('/admin/movies', function(req, res){

    Land.find({}, function(err, docs){
        if(err){
            console.log(err);
        } else {
            res.send(docs)
        }
    })
})

app.get('/lands', function(req, res){

    Land.find({}, function(err, docs){
        if(err){
            console.log(err);
        } else {
            res.send(docs)
            console.log('hutta');
        }
    })
})

app.post('/admin/new', function(req, res){

    const name = req.body.Name
    const place = req.body.Place 
    const blocks = req.body.Blocks 
    const price = req.body.Price 
    const discription = req.body.Discription 
    const available = req.body.Available
    const image = req.body.Image
    const images = req.body.Images 
    let loop = ''
    let public = []

    console.log('new land info colleted');

    for(i=0; i<images.length; i++){
        loop = images[i]

        cloudinary.uploader.upload(loop, {upload_preset: 'psm0moqm', tags: [name]},  function(err, result){
        if(err){
            console.log(err);
        } else {
            public.push(result.public_id)
            console.log(result);
        }
        if(public.length === images.length){
            cloudinary.uploader.upload(image, {upload_preset: 'psm0moqm'}, function(err, result){
                if(err){
                    console.log(err);
                } else {
                    const newLand = new Land({
                        name: name,
                        place: place,
                        blocks: blocks,
                        price: price,
                        discription: discription,
                        available: available,
                        mainImg: result.public_id,
                        sampleimg: public
                    })

                    newLand.save(function(err){
                        if(err){
                            console.log(err);
                        } else {
                            console.log('success');
                        }
                    })
                }
            })
        }
    })
     }
 })

app.put('/admin/update/:id', function(req, res){

    Land.updateOne({_id: req.body._id}, {
        name: req.body.name,
        price: req.body.price,
        blocks: req.body.blocks,
        place: req.body.place,
        available: req.body.available,
        discription: req.body.discription
    }, function(err){
        if(err){
            console.log(err);
        } else {
            console.log('Land updated');
        }
    })
})


app.post('/admin/delete/:id', function(req, res){

    const item = req.params.id
    
    Land.findById(item, function(err, docs){
        if(err){
            console.log(err);
        } else {
            let loop = ''
            const imgs = docs.sampleimg
            for(i=0; i<imgs.length; i++){
                loop = imgs[i]
                let index = imgs.indexOf(imgs[i])

                cloudinary.uploader.destroy(loop, function(err, result){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(result);
                        if(index+1 === imgs.length){

                            cloudinary.uploader.destroy(docs.mainImg, function(err, result){
                                if(err){
                                    console.log(err);
                                } else {
                                    console.log(result);

                                    Land.deleteOne({_id: item}, function(err){
                                        if(err){
                                            console.log(err);
                                        } else {
                                            console.log('successfully deleted');
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            }
        }
    })


})

app.post('/subscribe', function(req, res){

    const email = req.body.Email 

    var data = {
        members: [
            {
                email_address : email,
                status : "subscribed"
            }
        ]
    }

    const jasonData = JSON.stringify(data);

    const url = 'https://us18.api.mailchimp.com/3.0/lists/2638595045'

    const options = {
        method: 'POST',
        auth: process.env.MAILCHIMP
    }

    const request= https.request(url, options, function(response){
            response.on("data", function(data){
            console.log(JSON.parse(data));
          })
    })
    
    request.write(jasonData);
    request.end();

})

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('frontend/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//       });
      
// }

app.listen(PORT, function(){
    console.log(`server is running at port ${PORT}`)
})
