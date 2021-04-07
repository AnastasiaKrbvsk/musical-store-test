const uuid = require('uuid');
const path = require('path');
const {Product} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController {
    async create(request, response, next) {
        try {
            const {name, price, number, brandId, categoryId, info} = request.body;
            const {image} = request.files;
            let fileName = uuid.v4() + ".jpg";
            await image.mv(path.resolve(__dirname, '..', 'static', fileName));

            const product = await Product.create({name, price, number, brandId, categoryId, image: fileName});

            return response.json(product);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(request, response) {

    }
    async getOne(request, response) {

    }
}

module.exports = new ProductController();