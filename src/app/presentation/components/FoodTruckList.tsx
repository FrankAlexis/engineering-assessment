"use client";
import { FoodTruck } from "@/app/domain/entities/FoodTruck";
import { FC, useState, useEffect } from "react";
import FilterableTable from "./FilterableTable";

async function fetchFoodTrucks() {
  const res = await fetch("api/foodTruck", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch food trucks");
  }

  return res.json();
}

const FoodTruckList: FC<{}> = ({}) => {
  const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>([]);

  useEffect(() => {
    fetchFoodTrucks().then((data) => {
      console.log(data);
      setFoodTrucks(data);
    });
  }, []);

  return (
    <div>
      <FilterableTable foodTrucks={foodTrucks} />
    </div>
  );
};

export default FoodTruckList;
