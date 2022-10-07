import { Link } from "react-router-dom";

export default function Card({exchangeResume}: any) {
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
}
