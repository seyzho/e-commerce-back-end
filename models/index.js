// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {foreignkey: "category_id"});

Category.hasMany(Product, {foreignKey: "category_id"});

Product.belongsToMany(Tag, {through: ProductTag, foreignKey: "product_tag_id"});

Tag.belongsToMany(Product, {through: ProductTag, foreignKey: "product_tag_id"});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
