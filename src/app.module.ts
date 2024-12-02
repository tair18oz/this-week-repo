import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ChapterModule } from './chapter/chapter.module';
import { LessonModule } from './lesson/lesson.module';
import { SourcesModule } from './sources/sources.module';

@Module({
  imports: [StudentModule, ChapterModule, LessonModule, SourcesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
