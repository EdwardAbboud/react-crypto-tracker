import "../css/PageSearch.css";
import searchICON from "../assets/search-icon.png";

export default function PageSearch(props) {
  return (
    <div>
      <div className="coin-search">
        <img src={searchICON} alt={`search icon for search bar`} />
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={props.handleChange}
          />
        </form>
      </div>
    </div>
  );
}
