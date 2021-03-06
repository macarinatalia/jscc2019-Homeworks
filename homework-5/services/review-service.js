const BaseService = require('./base-service')
const ReviewModel = require('../models/review')

class ReviewService extends BaseService {
    model = ReviewModel

    async addReview(restaurant, user, rev){
        rev.restaurant = restaurant
        rev.user = user
        rev.date = new Date().toLocaleString()
        const review = await this.add(rev)
        restaurant.reviews.push(review)
        await restaurant.save()
    }

    async getAllReviews(id, objectName, service){
        const reviews = await this.findAll()
        const object = await service.find(id)

        var result = []
        for (var i = 0; i < reviews.length; i++) { 
            if (reviews[i][objectName] == object.id){
                result.push(reviews[i])
            }
        }
        return result
    }
}

// animalSchema.methods.findSimilarTypes = function(cb) {
//     return this.model('Animal').find({ type: this.type }, cb);
//   };

module.exports = new ReviewService()
