import { Post } from "./post"

type Seconds = number

export type Rating = number

type MetaData = {
    cookingTime: Seconds,
    prepTime: Seconds,
    servings: number
}

export type Ingredient = {
    name: string,
    composition: string[]
}

export type InstructionsType = string[]


export type NutritionFactsType = {
    calories: number,
    totalFat: number,
    saturatedFat: number,
    cholesterol: number,
    sodium: number,
    potassium: number,
    totalCarbohydrate: number,
    sugars: number,
    protein: number
}

export type RecipeResponse = {
    rating: number,
    metaData:MetaData,
    ingredients: Ingredient[],
    instructions: InstructionsType,
    nutritionFacts: NutritionFactsType
} & Post