import { useContext } from "react";
import { useParams } from "react-router-dom";
import CurrencySelect from "../components/CurrencySelect";
import Loading from "../components/Loading";
import SingleCoin from "../components/SingleCoin";
import { CurrencyContext } from "../contexts/CurrencyContext";
import useFetch from "../hooks/useFetch";

export default function SingleCoinView() {
  const { changeUrlCurrency, changeCurrency } = useContext(CurrencyContext);
  const { id } = useParams();

  console.log("ID", id);

  const { data: coin, errorMessage, isLoading } = useFetch(id);

  console.log("COIN", coin);

  const handleCurrency = (e) => {
    changeUrlCurrency(e.target.value);
    changeCurrency(e.target.value);
  };

  return (
    <div>
      <CurrencySelect handleCurrency={handleCurrency} />
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
