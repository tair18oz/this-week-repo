import { Injectable ,Body ,Param ,HttpException } from '@nestjs/common';

@Injectable()
export class StudentService {

getAll(){
throw new HttpException("error",500) 
}

getOne(@Param('id') id: string) {
 throw new HttpException("error",500)
}

newStudent(@Body() id: string ) {
    throw new HttpException("error",500)
}

deleteStudent(@Body() id: string ) {
    throw new HttpException("error",500)
}

updateStudent(@Body() id: string ) {
    throw new HttpException("error",500)
}
}




