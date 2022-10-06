import { useEffect, useState } from 'react';
import './App.css';
import { Restaurant } from './type/restaurant.entity';

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  async function getRestaurants() {
    const response = await fetch("https://private-anon-8d4e20cb83-pizzaapp.apiary-mock.com/restaurants/")
    const json: Restaurant[] = await response.json()
    setRestaurants(json)
  }

  useEffect(() => {
    getRestaurants()
  }, [])
  

  return (
    <main>
      <h1>Les restaurants</h1>
      {restaurants.length >= 1 ? restaurants.map((restaurant) => {
        return (
          <article key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address1}, {restaurant.address2}</p>
          </article>
        )
      }) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default App;
