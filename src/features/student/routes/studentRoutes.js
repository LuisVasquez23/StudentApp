import express from 'express';
import StudentController from '../controllers/studentController.js';
import { createStudentValidator, updateStudentValidator } from '../validators/studentValidator.js';
import validationMiddleware from '../../../middleware/validationMiddleware.js';
import authMiddleware from '../../../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Students management API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier of the student
 *         name:
 *           type: string
 *           description: The name of the student
 *         email:
 *           type: string
 *           description: The email of the student
 *         age:
 *           type: integer
 *           description: The age of the student
 *       required:
 *         - name
 *         - email
 *         - age
 *     CreateStudentRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the student
 *         email:
 *           type: string
 *           description: The email of the student
 *         age:
 *           type: integer
 *           description: The age of the student
 *       required:
 *         - name
 *         - email
 *         - age
 *     UpdateStudentRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the student
 *         email:
 *           type: string
 *           description: The email of the student
 *         age:
 *           type: integer
 *           description: The age of the student
 *     StudentResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Student created successfully"
 *         student:
 *           $ref: '#/components/schemas/Student'
 *       required:
 *         - message
 *         - student
 */

/**
 * @swagger
 * /api/v1/students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateStudentRequest'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Student created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentResponse'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/', createStudentValidator, validationMiddleware, (req, res) => StudentController.createStudentHandler(req, res));

/**
 * @swagger
 * /api/v1/students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Server error
 */
router.get('/', (req, res) => StudentController.getStudentsHandler(req, res));

/**
 * @swagger
 * /api/v1/students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.get('/:id', (req, res) => StudentController.getStudentByIdHandler(req, res));

/**
 * @swagger
 * /api/v1/students/{id}:
 *   put:
 *     summary: Update a student by ID
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateStudentRequest'
 *     responses:
 *       200:
 *         description: Student updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateStudentValidator, validationMiddleware, (req, res) => StudentController.updateStudentHandler(req, res));

/**
 * @swagger
 * /api/v1/students/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', (req, res) => StudentController.deleteStudentHandler(req, res));

export default router;
