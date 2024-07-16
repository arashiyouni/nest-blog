import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
/**
 * Al ser un entity,  es el objeto que va a representar en la BD
*/
@Schema()
export class Article extends Document {

    @Prop({ index: true })
    title: string

    @Prop({ index: true })
    description: string

    @Prop({ index: true })
    datePublish?: Date

    @Prop({ index: true })
    tags?: Tags
}

export enum Tags {
    Dev = '#development', 
    FrontEnd = '#frontend', 
    Backend = '#backend', 
    Learning = '#learning',
    Mobile = '#mobile',
    Ecom = '#ecommerce',
    Design = "#design",
    IA = '#ia',
    Empaty = `#article`,
    SEO = '#seo',
    SEC = '#cybersecurity',
    Marketing = '#marketing',
    art = '#art'
}


export const ArticleSchema = SchemaFactory.createForClass(Article)