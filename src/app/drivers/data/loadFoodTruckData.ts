import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import { FoodTruckDTO } from '@/app/domain/entities/FoodTruck';

export const loadFoodTruckData = (): Promise<FoodTruckDTO[]> => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(process.cwd(), 'public', 'data', 'Mobile_Food_Facility_Permit.csv');
        const results: FoodTruckDTO[] = [];

        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (data: FoodTruckDTO) => {
                results.push(data);
            })
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error: any) => {
                reject(error);
            });
    });
};
