const Joi = require("joi");
const review = require("./models/review");

module.exports.listingSchema = Joi.object({
    listing :Joi.object(
        {
            title:Joi.string().required(),
            description:Joi.string().required(),
            location:Joi.string().required(),
            country:Joi.string().required(),
            price:Joi.number().required().min(0),
            image:{url:Joi.string().allow("",null),
                filename:Joi.string().allow("",null),
        },}
    ).required(),
});

module.exports.reviewSchema=Joi.object({
    review :Joi.object(
        {
            comment:Joi.string().required(),
            rating:Joi.number().min(1).max(5).required(),
        }
    ).required(),
});

module.exports.userSchema=Joi.object({
    user:Joi.object({
        email:Joi.string().required(),
        username:Joi.string().required(),
        password:Joi.number().min(4),
    }).required(),
});