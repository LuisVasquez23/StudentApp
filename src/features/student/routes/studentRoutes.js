import express from 'express';
import StudentController from '../controllers/studentController.js';
import { createStudentValidator, updateStudentValidator } from '../validators/studentValidator.js';
import validationMiddleware from '../../../middleware/validationMiddleware.js';
import authMiddleware from '../../../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', createStudentValidator, validationMiddleware, StudentController.createStudentHandler);
router.get('/', StudentController.getStudentsHandler);
router.get('/:id', StudentController.getStudentByIdHandler);
router.put('/:id', updateStudentValidator, validationMiddleware, StudentController.updateStudentHandler);
router.delete('/:id', StudentController.deleteStudentHandler);

export default router;