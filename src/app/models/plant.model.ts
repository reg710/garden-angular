export interface IPlant {
    _id?: string;
    name: string;
    wateringNeeds: "low" | "medium" | "high"
}