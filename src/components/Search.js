export default function Search(props) {
  return (
    <div>
      <div className="coin-search">
        <h2 className="coin-text">Search coins</h2>
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
