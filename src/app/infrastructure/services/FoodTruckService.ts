import { loadFoodTruckData } from "@/app/drivers/data/loadFoodTruckData";
import { FoodTruckDTO } from "../../domain/entities/FoodTruck";

export class FoodTruckService {
    async getAll(): Promise<FoodTruckDTO[]> {
        return await loadFoodTruckData();
    }
}
