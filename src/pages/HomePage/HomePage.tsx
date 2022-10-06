import "./HomePage.css";
import { Link, useLoaderData } from "react-router-dom";
import { ExchangeResume } from "../../type/exchange-resume.entity";
import { getExchangesResume } from "../../api/getExchangesResume";

type LoaderData = {
  exchangesResume: ExchangeResume[];
};

export async function loader() {
  const exchangesResume = await getExchangesResume();
  return {exchangesResume};
}

function HomePage() {
  const {exchangesResume} = useLoaderData() as LoaderData;

  return (
    <main>
      <img src="https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png" alt="dogecoin" height={128} width={128} />
      <h1>Exchanges acceptant le Dogecoin</h1>
      
      <div className="home-grid">
        {exchangesResume.map((exchangeResume) => {
            return (
              <Link to={`exchange/${exchangeResume.id}`} className="card-wrapper">
                <article className="card" key={exchangeResume.id}>
                  <h2>{exchangeResume.name}</h2>
                  <p>
                    Adjusted volume 24h share: {exchangeResume.adjusted_volume_24h_share}
                  </p>
                </article>
              </Link>
            );
          })
        }
      </div>
    </main>
  );
}

export default HomePage;
