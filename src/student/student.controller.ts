import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { Student } from './student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentServices: StudentService) { }

    @Post()
    async createStudent(@Body() data: CreateStudentDto) {
        return this.studentServices.createStudent(data);
    }

    @Get()
    @UseGuards(AuthGuard)
    async getAllStudents() {
        return this.studentServices.getAllStudents();
    }

    @Get(':id')
    async getStudentById(@Param('id') id: string) {
        return this.studentServices.getStudentById(id);
    }

    @Put(':id')
    async updateStudent(@Param('id') id: string, @Body() data: UpdateStudentDto) {
        return this.studentServices.updateStudent(id, data);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: string) {
        return this.studentServices.deleteStudent(id);
    }
}
