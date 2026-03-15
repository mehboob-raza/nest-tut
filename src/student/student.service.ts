import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {

    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>
    ) { } //inject model 

    async createStudent(data: CreateStudentDto): Promise<Student> {
        const createdStudent = new this.studentModel(data);
        return await createdStudent.save();
    }

    async getAllStudents(): Promise<Student[]> {
        return await this.studentModel.find().exec();
    }

    async getStudentById(id: string): Promise<Student> {
        const student = await this.studentModel.findById(id).exec();
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        return student;
    }

    async updateStudent(id: string, data: UpdateStudentDto): Promise<Student> {
        const updatedStudent = await this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
        if (!updatedStudent) {
            throw new NotFoundException('Student not found');
        }
        return updatedStudent;
    }

    async deleteStudent(id: string): Promise<{ message: string }> {
        const result = await this.studentModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException('Student not found');
        }
        return { message: 'Student deleted successfully' };
    }
}
