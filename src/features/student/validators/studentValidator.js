import { body, param } from 'express-validator';

export const createStudentValidator = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('age')
        .isInt({ min: 0 })
        .withMessage('Age must be a positive integer')
        .notEmpty()
        .withMessage('Age is required'),
    body('university')
        .isString()
        .withMessage('University must be a string')
        .notEmpty()
        .withMessage('University is required')
];

export const updateStudentValidator = [
    param('id')
        .isInt()
        .withMessage('ID must be an integer'),
    body('name')
        .optional()
        .isString()
        .withMessage('Name must be a string'),
    body('age')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Age must be a positive integer'),
    body('university')
        .optional()
        .isString()
        .withMessage('University must be a string')
];
