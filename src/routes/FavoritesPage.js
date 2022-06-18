import PageTitle from "../components/PageTitle";
import FavoritesView from "../views/FavoritesView";

export default function FavoritesPage() {
  return (
    <div>
      <div>
        <PageTitle title={`Coins in your watch list`} />
        <FavoritesView />
      </div>
    </div>
  );
}
