import "../css/FavoritesIcon.css";

export default function FavoritesIcon(props) {
  return (
    <div className="favorite-icon">
      <img
        alt="Favorites icon"
        src={props.source}
        onClick={props.favoriteHandler}
      />
    </div>
  );
}
