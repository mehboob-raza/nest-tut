import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('student')
export class StudentController {
    constructor(private readonly studentServices: StudentService) { }

    @Get()
    @UseGuards(AuthGuard)

    getAll() {
        return this.studentServices.getAllStudents()
    }

    @Get(':id')
    getOneStudent(@Param('id') id: string) {
        return this.studentServices.getStudentsById(Number(id))
    }

    @Post()
    create(@Body() body: { name: string, age: number }) {
        return this.studentServices.createNewStudent(body)
    }

    @Put(':id')
    updateFull(@Param('id') id: string, @Body() body: { name: string, age: number }) {
        return this.studentServices.updateUserData(Number(id), body)
    }

    @Patch(':id')
    updatePartial(@Param('id') id: string, @Body() body: Partial<{ name: string, age: number }>) {
        return this.studentServices.updatePartialData(Number(id), body)
    }

    @Delete(':id')
    deleteStudnt(@Param('id') id: string) {
        return this.studentServices.removeStudent(Number(id))
    }
}
