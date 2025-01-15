export interface Ingredient {
    name: string,
    quantity: number,
    origin: {
        location: string,
        region: string,
    },
}