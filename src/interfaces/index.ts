export interface IthikerDetails {
   category: string,
   count: string,
   description: string,
   reference: string,
   content: string
}

export interface IAthkar {
   [category: string]: IthikerDetails[]
}

