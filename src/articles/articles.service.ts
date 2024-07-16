import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { CapitalizateFirstLetter, IsValidTags } from 'src/utils/helpers';
import { isValidObjectId, Model } from 'mongoose';
import { Article, Tags } from './entities/article.entity';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ArticlesService {

  constructor(
    @InjectModel(Article.name)
    private readonly ArticleModel: Model<Article>
  ){}

  /**Crea el articulo con cuerpo: `title`, `description`, `datePublish`, `gender` */
  async create(createArticleDto: CreateArticleDto) {
    createArticleDto.title = CapitalizateFirstLetter(createArticleDto.title)
    createArticleDto.description = CapitalizateFirstLetter(createArticleDto.description)
   
    if(createArticleDto.tags){
      const capitalizateGender = CapitalizateFirstLetter(createArticleDto.tags)
      //Aca paso el tags a un arreglo y a partir de ese arreglo verifico si lo que viene como tag esta en la opcion del enum Gender
      if(IsValidTags(capitalizateGender)){
        createArticleDto.tags = capitalizateGender as Tags
      }else{
        throw new Error(`Invalid gender value`);
      }
    }else {
      createArticleDto.tags = Tags.Empaty
    }
    
    //Si no se proporciona una fecha
    if(!createArticleDto.datePublish){
      createArticleDto.datePublish = new Date()
    }

    try{
      const article = await this.ArticleModel.create(createArticleDto)
      return {
        msg: 'Article created successfully! 🙌🎉',
        article: {
          title: article.title,
          description: article.description,
          datePublish: article.datePublish,
          tags: article.tags
        }
      }
    }catch(err){
      throw new InternalServerErrorException(`Can't create Article - Check server logs`)
    }
  }

  async findAll() {
    return this.ArticleModel.find()
  }

  async findOne(term: string) {
    let article = this.ArticleModel
    
    if(isValidObjectId(term)) article = await this.ArticleModel.findById(term)

    if (!article) throw new NotFoundException(`Article with id, name or no ${term} not found`)

    return article
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    //1. Buscar el ID
    let articleID = await this.ArticleModel.findById(id)
    //destructuracion del DTO

    //validar el obj id
    if(!isValidObjectId(id)){
      throw new NotFoundException(`Article with ID ${id} not found`)
    }

    if(updateArticleDto.title) updateArticleDto.title = CapitalizateFirstLetter(updateArticleDto.title)
    if(updateArticleDto.description) updateArticleDto.description = CapitalizateFirstLetter(updateArticleDto.description)

    if(updateArticleDto.tags){
      const capitalizateTags = CapitalizateFirstLetter(updateArticleDto.tags)
      //Aca paso el tags a un arreglo y a partir de ese arreglo verifico si lo que viene como tag esta en la opcion del enum Gender
      if(IsValidTags(capitalizateTags)){
        //aqui le digo que capitalizateTags es de tipo Tags
        updateArticleDto.tags = capitalizateTags as Tags
      }else{
        throw new BadRequestException(`tags is invalid`)
      }
    }
    
    //const updateArticle = await this.ArticleModel.findByIdAndUpdate(articleID, {new: true})

    try{
      const updateArticle = await this.ArticleModel.findByIdAndUpdate(articleID, {
        title: updateArticleDto.title, 
        description: updateArticleDto.description,
        datePublish: updateArticleDto.datePublish,
        tags: updateArticleDto.tags
      })
      return {
        msg: 'Article updated successfully! 🎉',
      }
    }catch(err){
      throw new InternalServerErrorException(`Can't update Article - Check server logs`)
    }

  }

  async remove(id: string) {
    //1. Buscar el ID
    // let articleID = await this.ArticleModel.findById(id)
    // //destructuracion del DTO

    // //validar el obj id
    // if(!isValidObjectId(id)){
    //   throw new NotFoundException(`Article with ID ${id} not found`)
    // }
    const removeArticle = await this.ArticleModel.deleteOne({_id: id})

    return {
      msg: 'The article was removed successfully! 👒',
      ...removeArticle
    }
  }
}
