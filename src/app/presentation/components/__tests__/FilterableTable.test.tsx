import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilterableTable from "../FilterableTable";
import { FoodTruck } from "@/app/domain/entities/FoodTruck";

// Mock data
const foodTrucks: FoodTruck[] = [
  {
    address: "123 Main St",
    applicant: "Taco Truck",
    foodItems: "Tacos",
    id: "1",
    latitude: 37.7749295,
    location: "Main St",
    longitude: -122.4194155,
    zipCodes: "94105",
  },
];

describe("FilterableTable Component", () => {
  test("renders the table with all food trucks initially", () => {
    render(<FilterableTable foodTrucks={foodTrucks} />);

    expect(screen.getByText("123 Main St")).toBeInTheDocument();
    expect(screen.getByText("Main St")).toBeInTheDocument();
    expect(screen.getByText("94105")).toBeInTheDocument();
  });
});
