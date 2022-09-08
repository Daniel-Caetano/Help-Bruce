import Comment from "../models/comment"

class CommentController {
    async store(req, res){
        const comment = await Comment.create(req.body);
        console.log(comment);
        return res.json(comment);
    }

    async index(req, res){
        const comment = await Comment.findAll(req.body);
        console.log(comment);
        return res.json(comment);
    }
}

export default new CommentController();