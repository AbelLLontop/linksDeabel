const {Router} = require('express');
const router = Router();
const {getCategories,getCategory,updateCategory,createCategory,deleteCategory} = require('../controllers/category.controller');
const { validateCategory, validateCategoryId, validateCategoryIdParam } = require('../validators/Categories');

router.route('/')
.get(getCategories)
.put(validateCategoryId,updateCategory)
.post(validateCategory,createCategory);
    
router.route('/:id')
.get(validateCategoryIdParam,getCategory)
.delete(validateCategoryIdParam,deleteCategory)

module.exports = router;
