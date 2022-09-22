const User = require("./User");
const Category = require("./Category");
const Post = require("./Post");
const Comment = require("./Comment");

Post.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Post.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Post, {
  foreignKey: "category_id",
});

module.exports = {
  Post,
  User,
  Comment,
  Category,
};
