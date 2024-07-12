import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './entities/article.entity';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [
    MongooseModule.forFeature([
      {
        //El name es el que se esta extendiendo de document
        name: Article.name,
        schema: ArticleSchema
      }
    ])
  ],
  exports: [
    MongooseModule
  ]
})
export class ArticlesModule {}
