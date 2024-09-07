import { useParams } from "react-router-dom";

export const OfferPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Oferta: {id}</h1>
      <p>opis...</p>
    </div>
  );
};
