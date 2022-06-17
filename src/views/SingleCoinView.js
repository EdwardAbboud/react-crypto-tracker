import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import SingleCoin from "../components/SingleCoin";
import useFetch from "../hooks/useFetch";

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
      {errorMessage}
    </div>
  );
}
