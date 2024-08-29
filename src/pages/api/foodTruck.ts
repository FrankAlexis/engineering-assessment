import { GetFoodTrucks } from '@/app/domain/use-cases/GetFoodTruck';
import { FoodTruckService } from '@/app/infrastructure/services/FoodTruckService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { cuisine, location } = req.query;
        const foodTruckService = new FoodTruckService();
        const getFoodTrucks = new GetFoodTrucks(foodTruckService);

        const foodTrucks = await getFoodTrucks.execute({ cuisine: cuisine as string, location: location as string });

        console.log(foodTrucks[0]);
        const foodTruckMapped = foodTrucks.map((truck) => ({
            id: truck.locationid,
            address: truck.Address,
            applicant: truck.Applicant,
            location: truck.Location,
            latitude: truck.Latitude,
            longitude: truck.Longitude,
            foodItems: truck.FoodItems,
            zipCodes: truck['Zip Codes']
        }))

        res.status(200).json(foodTruckMapped);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}