
export interface DateFns {
    /**@param date: parametro tipo string, de tipo generico */
    dateFormatter<T>(date: string): Promise<T>
}