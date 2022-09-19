const Posts = require("./post");
const Users = require("./user")

Post.hasMany(Comment, { 
    foreignKey: "post_id" 
});

User.hasMany(Post, { 
    foreignKey: "post_id" 
});

User.hasMany(Comment, { 
    foreignKey: "post_id" 
});