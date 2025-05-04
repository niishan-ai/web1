const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  const search = req.query.search || '';
  const category = req.query.category || '';

  const query = {
    title: { $regex: search, $options: 'i' },
    category: { $regex: category, $options: 'i' }
  };

  const blogs = await Blog.find(query).sort({ createdAt: -1 });
  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
};

exports.createBlog = async (req, res) => {
  const newBlog = new Blog(req.body);
  await newBlog.save();
  res.status(201).json(newBlog);
};