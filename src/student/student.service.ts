import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: 'Ali', age: 23 },
        { id: 2, name: 'Hassan Ali', age: 28 },
        { id: 3, name: 'Saif Ali', age: 22 },
        { id: 4, name: 'Ali Raza', age: 29 },
        { id: 5, name: 'Ali Hamza', age: 26 },
    ]

    getAllStudents() {
        return this.students
    }

    getStudentsById(id: number) {
        const student = this.students.find((s) => s.id === id)
        if (!student) {
            throw new NotFoundException('Not found student')
        }
        return student
    }

    createNewStudent(data: { name: string, age: number }) {
        const newStudent = {
            id: this.students.length+1,
            ...data
        }
        this.students.push(newStudent)
        return newStudent
    }

    updateUserData(id: number, data: { name: string, age: number }) {
        const index = this.students.findIndex((s) => s.id === id)
        if (index === -1) throw new NotFoundException('Student Not FOund')

        this.students[index] = { id, ...data }
        return this.students[index]
    }

    updatePartialData(id: number, data: Partial<{ name: string, age: number }>) {
        const stundent = this.getStudentsById(id)
        Object.assign(stundent, data)
        return stundent
    }

    removeStudent(id: number) {
        const index = this.students.findIndex((s) => s.id === id)
        if (index === -1) throw new NotFoundException('Student Not FOund')

        const deleted = this.students.splice(index, 1)
        return { message: 'Student Deleted', student: deleted[0] }
    }
}
