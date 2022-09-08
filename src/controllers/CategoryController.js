import Category from "../models/category";

class CategoryController {

    async index(req, res){
        const category = await Category.findAll(req.body);
        console.log(category);
        return res.json(category);
    }
}

export default new CategoryController();