import "./ExchangePage.css";
import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import { getExchangeDetails } from "../../api/getExchangeDetails";
import { ExchangeDetail } from "../../type/echange-details.entity";

type LoaderData = {
  exchangeDetails: ExchangeDetail;
};

export const loader: LoaderFunction = async ({ params }) => {
  if (params.exchangeId === undefined)
    throw new Error("exchangeId parameter is missing");
  const exchangeDetails = await getExchangeDetails(params.exchangeId);
  return { exchangeDetails };
};

const ExchangePage = () => {
  const { exchangeDetails } = useLoaderData() as LoaderData;

  return (
    <>
      <Link to=".." className="back-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="back-icon"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      <h1>Exchange {exchangeDetails.name}</h1>
      <details open>
        <summary>Description</summary>
        <p style={{ whiteSpace: "pre-line" }}>{exchangeDetails.description}</p>
      </details>

      <h2>Fiats acceptés</h2>
      {exchangeDetails.fiats.length >= 1 ? (
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {exchangeDetails.fiats.map((fiat) => {
              return (
                <tr>
                  <td>{fiat.symbol}</td>
                  <td>{fiat.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Aucun fiat repertorié pour l'exchange selectionné</p>
      )}
    </>
  );
};

export default ExchangePage;
