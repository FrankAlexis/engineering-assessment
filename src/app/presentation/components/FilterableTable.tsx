"use client";
import { FoodTruck } from "@/app/domain/entities/FoodTruck";
import useDebounce from "@/app/infrastructure/hooks/useDebounce";
import React, { useEffect, useState } from "react";

const FilterableTable: React.FC<{ foodTrucks: FoodTruck[] }> = ({
  foodTrucks,
}) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500); // 500ms delay
  const [filteredTrucks, setFilteredTrucks] = useState(foodTrucks);

  useEffect(() => {
    const filtered = foodTrucks.filter(
      (truck) =>
        truck.address.toLowerCase().includes(debouncedQuery) ||
        truck.applicant.toLowerCase().includes(debouncedQuery) ||
        truck.foodItems.toLowerCase().includes(debouncedQuery) ||
        truck.zipCodes?.includes(debouncedQuery)
    );
    setFilteredTrucks(filtered);
  }, [debouncedQuery, foodTrucks]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter trucks..."
        value={query}
        onChange={handleFilter}
        className="p-2 border rounded-lg mb-4"
      />
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr>
            <th className="py-2 w-[15%]">Address</th>
            <th className="py-2">Applicant</th>
            <th className="py-2">Food Items</th>
            <th className="py-2">Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrucks.map((truck) => (
            <tr key={truck.id}>
              <td className="border px-4 py-2">{truck.address}</td>
              <td className="border px-4 py-2">{truck.applicant}</td>
              <td className="border px-4 py-2">{truck.foodItems}</td>
              <td className="border px-4 py-2">{truck.zipCodes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterableTable;
