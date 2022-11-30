const express = require("express");
const route = express.Router();
const createBlogModel = require("../Model/CreateBlogSchemas");
const enquiryModel = require("../Model/EnquirySchema");


// CREATE BLOG ROUTES
route.get("/blog", (req, res) => {
    createBlogModel.find({}).then(data => { // console.log(data);
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

route.get("/blog/:blogId", (req, res) => {
    const blogId = req.params.blogId;
    createBlogModel.findOne({id: blogId}).then(data => res.json(data)).catch(err => res.json(err));
});

route.post("/create-blog", (req, res) => {
    const newBlog = new createBlogModel({title: req.body.title, content: req.body.content, image: req.body.image, imgId: req.body.imgId});
    newBlog.save().then(data => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});


// ENQUIRY ROUTES
route.post("/services", (req, res) => {
    const enquiry = new enquiryModel({
        name: req.body.name,
        address: req.body.address,
        number: req.body.number,
        email: req.body.email,
        service: req.body.service
    });
    console.log(enquiry);
    enquiry.save().then(data => {
        console.log(data);
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
});


module.exports = route;
