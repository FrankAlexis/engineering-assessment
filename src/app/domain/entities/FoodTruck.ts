export interface FoodTruckDTO {
    locationid: string;
    Applicant: string;
    facilityType: string;
    cnn: string;
    locationDescription: string;
    Address: string;
    blocklot: string;
    block: string;
    lot: string;
    permit: string;
    status: string;
    FoodItems: string;
    x: number;
    y: number;
    Latitude: number;
    Longitude: number;
    schedule: string;
    dayshours: string;
    NOISent: string;
    approved: string;
    received: string;
    priorPermit: string;
    expirationDate: string;
    Location: string;
    firePreventionDistricts: string;
    policeDistricts: string;
    supervisorDistricts: string;
    'Zip Codes': string;
    neighborhoodsOld: string;
}

export interface FoodTruck {
    id: string;
    address: string;
    applicant: string
    location: string;
    latitude: number;
    longitude: number;
    foodItems: string;
    zipCodes: string;
}