import { Controller,Get, HttpException,Param,Post,Body,Delete, Patch } from '@nestjs/common';
import { error } from 'console';
import {StudentService} from "./student.service"
import { isStringObject } from 'util/types';
import { IsString } from 'class-validator';

export class CreateDto {
    @IsString()
    name: string;
    @IsString()
    id: string;
  }

@Controller('student')
export class StudentController {
 constructor(private StudentService:StudentService){ }

@Get()
getAll(){
    return this.StudentService.getAll();
}

@Get(':id')
getOne() {
    return this.StudentService.getOne("id");
}

@Post()
newStudent() {
    return this.StudentService.newStudent("id");

}

@Delete()
deleteStudent() {
    return this.StudentService.deleteStudent("id");
}


@Patch()
updateStudent(@Body() CreateDto: CreateDto ) {
    return this.StudentService.updateStudent("id");
}
}
