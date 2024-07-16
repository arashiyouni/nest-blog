import { IsDate, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { Tags } from "../entities/article.entity"
import { Type } from "class-transformer"

export class CreateArticleDto {

    @MinLength(10)
    @MaxLength(250)
    @IsString()
    title: string

    @MinLength(10)
    @MaxLength(250)
    @IsString()
    description: string

    @IsOptional()
    //aca le estoy diciendo que al JSON lo va a transformar en un type de instancia DATE como entrada y salida
    @Type(() => Date)
    @IsDate()
    datePublish?: Date

    @IsOptional()
    //Asegura que debe de coincidir con uno de los valores definidos en el enum Gender
    @IsEnum(Tags)
    tags?: Tags
}


