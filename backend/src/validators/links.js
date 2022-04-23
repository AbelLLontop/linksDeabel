const { body, param } = require('express-validator');
const { ObjectId } = require('mongoose').Types;

const validateResult = require('../middlewares/validateHerlper');

const validateLink = [
  body('user')
    .exists()
    .notEmpty()
    .withMessage('El id del usuario es requerido')
    .custom((value) => {
      if (!ObjectId.isValid(value)) {
        throw new Error('El id no es valido');
      }
      return true;
    }),
  body('link').exists().notEmpty().withMessage('El link es requerido'),
  body('title').exists().notEmpty().withMessage('El titulo es requerido'),
  body('description')
    .exists()
    .notEmpty()
    .withMessage('La descripcion es requerida'),
  body('category')
    .exists()
    .notEmpty()
    .withMessage('La categoria es requerida')
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
const validateLinkId = [
  body('id')
    .exists()
    .notEmpty()
    .withMessage('El id del usuario es requerido')
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
const validateLinkIdParam = [
  param('id')
    .exists()
    .notEmpty()
    .withMessage('El id del usuario es requerido')
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

module.exports = { validateLink, validateLinkId, validateLinkIdParam };
