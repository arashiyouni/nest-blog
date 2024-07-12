import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
/**
 * Al ser un entity,  es el objeto que va a representar en la BD
*/
@Schema()
export class Article extends Document{
    
    @Prop({index: true})
    title: string

    @Prop({index: true})
    description: string

    @Prop({index: true})
    datePublish: Date

    @Prop({index: true})
    tags: string
}


export const ArticleSchema = SchemaFactory.createForClass(Article)