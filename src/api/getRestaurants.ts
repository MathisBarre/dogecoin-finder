import { Restaurant } from "../type/restaurant.entity"

export async function getRestaurants() {
  const response = await fetch("https://private-anon-8d4e20cb83-pizzaapp.apiary-mock.com/restaurants/")
  const restaurant: Restaurant[] = await response.json()
  return restaurant
}