const {Category} = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
    async create(request, response) {
        const {name} = request.body;
        const category = await Category.create({name});
        return response.json(category);
    }
    async getAll(request, response) {
        const categories = await Category.findAll();
        return response.json(categories);
    }
}

module.exports = new CategoryController();