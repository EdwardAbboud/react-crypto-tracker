// React
import { useParams } from "react-router-dom";

// custom hooks
import useFetch from "../hooks/useFetch";

// components
import Loading from "../components/Loading";
import SingleCoin from "../components/SingleCoin";

export default function SingleCoinView() {
  const { id } = useParams();

  const { data: coin, errorMessage, isLoading } = useFetch(`coins/${id}`);

  return (
    <div>
      {isLoading && <Loading />}
      {coin && (
        <div>
          <SingleCoin key={coin.id} coin={coin} />
        </div>
      )}
      {errorMessage && <p className="fetch-error">{errorMessage}</p>}
    </div>
  );
}
