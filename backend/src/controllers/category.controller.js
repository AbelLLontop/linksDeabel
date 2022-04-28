const categoriesController = {};
const Category = require('../models/category');

categoriesController.updateCategory = async (req,res)=>{
    try{
        const categoryCurrent = await Category.findOne({_id:req.body.id});

        if(categoryCurrent){
            const updateCurrent = await categoryCurrent.update({...req.body});
            return res.status(200).json(updateCurrent);
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
categoriesController.getCategories = async (req, res) => {
  try {
   const categories = await Category.find();
   res.json(categories);
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

categoriesController.getCategory = async (req, res) => {
  try {
   const category = await Category.find({_id:req.params.id});
   res.json(category);
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};
categoriesController.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body); 
    const categorySaved = await newCategory.save();
    res.status(200).json(categorySaved);
    
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};
categoriesController.deleteCategory = async (req, res) => {
  try {
    const categoryCurrent = await Category.findOne({_id:req.params.id});
    if(categoryCurrent){
        const categoryRemvoe = await categoryCurrent.remove();
        return res.status(200).json(categoryRemvoe);
    }else{
        return res.status(400).json({
            ok: false,
            err: {
            message: 'El link no existe'
            }
        });
    }
  } catch (err) {
    console.log('ocurrio un error');
    res.json({ error: err }).status(500);
  }
};

module.exports = categoriesController;
