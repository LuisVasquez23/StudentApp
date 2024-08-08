import { body } from 'express-validator';

export const registerValidator = [
    body('username')
        .isString()
        .withMessage('Username must be a string')
        .notEmpty()
        .withMessage('Username is required'),
    body('password')
        .isString()
        .withMessage('Password must be a string')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
];

export const loginValidator = [
    body('username')
        .isString()
        .withMessage('Username must be a string')
        .notEmpty()
        .withMessage('Username is required'),
    body('password')
        .isString()
        .withMessage('Password must be a string')
        .notEmpty()
        .withMessage('Password is required')
];
