import FoodTruckList from "./presentation/components/FoodTruckList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">San Francisco Food Trucks</h1>
        <FoodTruckList />
      </div>
    </main>
  );
}
