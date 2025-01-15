export interface Effects {
    attribute: string,
    value: number,
    duration: {
        unit: string,
        amount: number,
    },
}