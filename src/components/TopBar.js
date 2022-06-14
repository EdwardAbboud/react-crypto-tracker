import "../css/TopBar.css";
export default function TopBar() {
  return (
    <div>
      <div className="sort-by">
        <p>Sort by</p>
        <select>
          <option>Name Ascending</option>
          <option>Name Descending </option>
          <option>Market Cap Ascending</option>
          <option>Market Cap Descending</option>
          <option>Volume Ascending</option>
          <option>Volume Descending</option>
        </select>
      </div>
    </div>
  );
}
