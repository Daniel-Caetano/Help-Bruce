import Post from "../models/post";

class PostController {
    async store(req, res){
        const post = await Post.create(req.body);
        console.log(post);
        return res.json(post);
    }

    async index(req, res){
        const post = await Post.findAll(req.body);
        console.log(post);
        return res.json(post);
    }
}

export default new PostController();