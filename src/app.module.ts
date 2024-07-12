import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("  "),
    ArticlesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
