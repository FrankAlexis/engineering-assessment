import { FoodTruckService } from "@/app/infrastructure/services/FoodTruckService";
import { FoodTruckDTO } from "../entities/FoodTruck";

export class GetFoodTrucks {
    private foodTruckService: FoodTruckService;

    constructor(foodTruckService: FoodTruckService) {
        this.foodTruckService = foodTruckService;
    }

    async execute(filter: { cuisine?: string; location?: string }): Promise<FoodTruckDTO[]> {
        const foodTrucks = await this.foodTruckService.getAll();
        return foodTrucks.filter(truck => {
            if (filter.location && !truck.Address.includes(filter.location)) return false;
            return true;
        });
    }
}
