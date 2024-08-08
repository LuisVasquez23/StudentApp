import StudentService from '../services/studentService.js';

class StudentController {
    async createStudentHandler(req, res) {
        try {
            const student = await StudentService.createStudent(req.body);
            res.status(201).json(student);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getStudentsHandler(req, res) {
        try {
            const students = await StudentService.getStudents();
            res.json(students);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getStudentByIdHandler(req, res) {
        try {
            const student = await StudentService.getStudentById(req.params.id);
            if (!student) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json(student);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateStudentHandler(req, res) {
        try {
            const student = await StudentService.updateStudent(req.params.id, req.body);
            res.json(student);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteStudentHandler(req, res) {
        try {
            const student = await StudentService.deleteStudent(req.params.id);
            res.json({ message: 'Student deleted' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new StudentController();
