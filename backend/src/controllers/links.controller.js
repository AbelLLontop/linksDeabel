const linksController = {};
const Link = require('../models/Link');
const User = require('../models/User');
const Category = require('../models/category');



linksController.updateLink = async (req,res)=>{
    try{
        const linkCurrent = await Link.findOneAndUpdate({_id:req.body.id},{...req.body});
        if(linkCurrent){
            return res.status(200).json(linkCurrent);
        }else{
            return res.status(400).json({
                ok: false,
                err: {
                message: 'El link no existe'
                }
            });
        }
    }catch(e){
        console.log("ocurrio un error");
        res.json({error:e}).status(500);
    }

}


linksController.getLinks = async (req, res) => {
  try {
   const links = await Link.find();
   res.json(links);
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

linksController.getLink = async (req, res) => {
  try {
   const link = await Link.find({_id:req.params.id});
   res.json(link);
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

linksController.createLink = async (req, res) => {
  try {
    const usuario = await User.findOne({ _id:req.body.user }, { _id: 1 });
    const categoria = await Category.findOne({_id:req.body.category},{_id:1,name:1});
    if(!usuario || !categoria){
        return res.status(400).json({
            ok: false,
            err: {
            message: 'El usuario o categoria no existe'
            }
        });
    }else{
        const newLink = new Link({...req.body,nameCategory:categoria.name}); 
        const linkSaved = await newLink.save();
        console.log(linkSaved);
        return res.status(200).json(linkSaved);
    }

  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

module.exports = linksController;
