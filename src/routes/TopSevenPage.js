import PageTitle from "../components/PageTitle";
import TopSevenView from "../views/TopSevenView";

export default function TopSevenPage() {
  return (
    <div>
      <PageTitle title={`Top 7 trending coins during the last 24h`} />
      <TopSevenView />
    </div>
  );
}
