const linksController = {};
const Link = require('../models/Link');
const User = require('../models/User');
const Category = require('../models/category');

linksController.updateLink = async (req, res) => {
  try {

    const usuario = await User.findOne({ _id: req.body.user }, { _id: 1 });
  
    console.log('name categoria');
    console.log(req.body.nameCategory);
    let categoria = await Category.findOne(
      { name: req.body.nameCategory },
      { _id: 1, name: 1 }
    );

 
    console.log(categoria);
    if (!categoria) {
      categoria = await Category.findOne(
        { name: 'Google' },
        { _id: 1, name: 1 }
      );
    }
    if (!usuario || !categoria) {
      return res.status(400).json({
        errors: [
          {
            msg: 'El usuario o categoria no existe',
            param: 'all',
            location: 'body',
          },
        ],
      });
    } else {
      const newLink = new Link({
        ...req.body,
        nameCategory: categoria.name,
        category: categoria._id,
      });
      const linkCurrent = await Link.findOneAndUpdate(
        { _id: req.body.id },
        { ...req.body, 
          nameCategory: categoria.name,
          category: categoria._id, }
      );


      console.log(linkCurrent);
      return res.status(200).json(linkCurrent);
    }
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

linksController.createLink = async (req, res) => {
  try {
    console.log(req.body);
    const usuario = await User.findOne({ _id: req.body.user }, { _id: 1 });
    console.log('name categoria');
    console.log(req.body.nameCategory);
    let categoria = await Category.findOne(
      { name: req.body.nameCategory },
      { _id: 1, name: 1 }
    );
    console.log(categoria);
    if (!categoria) {
      categoria = await Category.findOne(
        { name: 'Google' },
        { _id: 1, name: 1 }
      );
    }
    if (!usuario || !categoria) {
      return res.status(400).json({
        errors: [
          {
            msg: 'El usuario o categoria no existe',
            param: 'all',
            location: 'body',
          },
        ],
      });
    } else {
      const newLink = new Link({
        ...req.body,
        nameCategory: categoria.name,
        category: categoria._id,
      });
      const linkSaved = await newLink.save();
      console.log(linkSaved);
      return res.status(200).json(linkSaved);
    }
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

linksController.getLinks = async (req, res) => {
  try {
    const nameCategory = req.query.nameCategory;
    const searchName = req.query.searchName;
    const orderCategory = req.query.orderCategory;
    const filter = {};
    const orders = {};
    if (nameCategory) {
      filter.nameCategory = nameCategory;
    }
    if (searchName) {
      filter.title = new RegExp(searchName, 'i');
    }

    if (orderCategory == 1) {
      orders.nameCategory = orderCategory;
    }
    console.log('este es el filtro final');
    console.log(filter);
    const links = await Link.find(filter).sort({ ...orders, updated_at: -1 });
    res.json(links);
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

linksController.getLink = async (req, res) => {
  try {
    const link = await Link.find({ _id: req.params.id });
    res.json(link);
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

linksController.deleteLink = async (req, res) => {
  console.log('param ' + req.params);
  try {
    const linkCurrent = await Link.findOne({ _id: req.params.id });
    if (linkCurrent) {
      const linkRemoved = await linkCurrent.remove();
      return res.status(200).json(linkRemoved);
    } else {
      return res.status(400).json({
        errors: [
          {
            msg: 'El link no existe',
            param: 'all',
            location: 'body',
          },
        ],
      });
    }
  } catch (e) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

module.exports = linksController;
