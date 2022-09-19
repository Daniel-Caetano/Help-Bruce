import Post from "../models/post";

class PostController {
    async store(req, res){
        const post = await Post.create(req.body);
        console.log(post);
        return res.json(post);
    }

    async index(req, res){
        const post = await Post.findAll({
            include:["comments"] 
        });
        console.log(post);
        return res.json(post);
    }

    async update(req, res) {
        let post = await Post.findByPk(req.params.id);
        post = await post.update(req.body);
        return res.json(post);
      }
    
    async delete(req, res) {
        let post = await Post.findByPk(req.params.id);
        post = await post.destroy(req.body);
        return res.json(Post);
      }
}

export default new PostController();