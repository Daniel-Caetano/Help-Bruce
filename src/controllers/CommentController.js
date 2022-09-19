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

    async update(req, res) {
        let comment = await Comment.findByPk(req.params.id);
        comment = await comment.update(req.body);
        return res.json(comment);
      }
    
    async delete(req, res) {
        let comment = await Comment.findByPk(req.params.id);
        comment = await comment.destroy(req.body);
        return res.json(Comment);
      }
    
}

export default new CommentController();