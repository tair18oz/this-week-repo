import { Controller,Get, HttpException,Param,Post,Body } from '@nestjs/common';
import { error } from 'console';

@Controller('student')
export class StudentController {

@Get()
getAll(){
throw new HttpException("error",500) 
}

@Get(':id')
getOne(@Param('id') id: string) {
 throw new HttpException("error",500)
}


@Post(':id')
newStudent(@Param(':id') id: string ) {
    throw new HttpException("error",500)

}

}
