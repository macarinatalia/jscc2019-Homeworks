const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    restaurant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Restaurant',
        autopopulates: {
            maxDepth: 1
        },
        required: true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulates: {
            maxDepth: 1
        },
        required: true
    },
    date: Date
})

ReviewSchema.plugin(require('mongoose-autopopulate'))

const ReviewModel = mongoose.model('Review', ReviewSchema)
module.exports = ReviewModel