import Student from '../models/studentModel.js';

class StudentService {
    async createStudent({ name, age, university }) {
        const student = await Student.create({ name, age, university });
        return student;
    }

    async getStudents() {
        return await Student.findAll();
    }

    async getStudentById(id) {
        return await Student.findByPk(id);
    }

    async updateStudent(id, { name, age, university }) {
        const student = await Student.findByPk(id);
        if (!student) {
            throw new Error('Student not found');
        }
        student.name = name;
        student.age = age;
        student.university = university;
        await student.save();
        return student;
    }

    async deleteStudent(id) {
        const student = await Student.findByPk(id);
        if (!student) {
            throw new Error('Student not found');
        }
        await student.destroy();
        return student;
    }
}

export default new StudentService();
