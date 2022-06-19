import PageTitle from "../components/PageTitle";
import WatchListView from "../views/WatchListView";

export default function WatchListPage() {
  return (
    <div>
      <div>
        <PageTitle title={`Coins in your watch list`} />
        <WatchListView />
      </div>
    </div>
  );
}
