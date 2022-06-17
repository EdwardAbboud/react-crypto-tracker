import CoinGeckoInfoBand from "../components/CoinGeckoInfoBand";
import PageTitle from "../components/PageTitle";
import CoinView from "../views/CoinView";

export default function HomePage() {
  return (
    <div>
      <div>
        <PageTitle title={`List of coins on the market`} />
        <CoinView />
        <CoinGeckoInfoBand />
      </div>
    </div>
  );
}
