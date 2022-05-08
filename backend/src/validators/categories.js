const { body, param } = require('express-validator');
const { ObjectId } = require('mongoose').Types;

const validateResult = require('@middlewares/validateHerlper');

const validateCategory = [
  body('name')
    .exists()
    .notEmpty()
    .isString()
    .withMessage('El nombre no es válido'),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
const validateCategoryId = [
  body('id')
    .exists()
    .notEmpty()
    .withMessage('El id de la categoria es requerido')
    .custom((value) => {
      if (!ObjectId.isValid(value)) {
        throw new Error('El id no es valido');
      }
      return true;
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
const validateCategoryIdParam = [
  param('id')
    .exists()
    .notEmpty()
    .withMessage('El id de la categoria es requerido')
    .custom((value) => {
      if (!ObjectId.isValid(value)) {
        throw new Error('El id no es valido');
      }
      return true;
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateCategory,
  validateCategoryId,
  validateCategoryIdParam,
};
