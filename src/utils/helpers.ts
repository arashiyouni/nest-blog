import { Tags } from "src/articles/entities/article.entity"

/**Devuelve la primera letra en mayuscula */
export function CapitalizateFirstLetter(text: string): string{
    return text.charAt(0).toUpperCase() + text.slice(1)
}

/** Verifica si el string esta en `Tags` */
export function IsValidTags(tags: string): tags is Tags{
    return Object.values(Tags).includes(tags as Tags);
} 