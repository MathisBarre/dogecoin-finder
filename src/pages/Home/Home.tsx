import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import { getRestaurants } from "../../api/getRestaurants";
import { Restaurant } from "../../type/restaurant.entity";

type LoaderData = {
  restaurants: Restaurant[];
};

export async function loader() {
  const restaurants = await getRestaurants();
  return {restaurants};
}

function Home() {
  const {restaurants} = useLoaderData() as LoaderData;

  return (
    <main>
      <h1>Les restaurants</h1>
      
      {restaurants.map((restaurant) => {
          return (
            <Link to={`restaurant`} className="restaurant-wrapper">
              <article className="restaurant" key={restaurant.id}>
                <h2>{restaurant.name}</h2>
                <p>
                  {restaurant.address1}, {restaurant.address2}
                </p>
              </article>
            </Link>
          );
        })
      }
    </main>
  );
}

export default Home;
