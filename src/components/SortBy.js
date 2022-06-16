import "../css/SortBy.css";
export default function SortBy(props) {
  return (
    <div>
      <select
        className="sort-by"
        defaultValue={`market_cap_desc`}
        onChange={props.handleSorting}
      >
        <option value={`market_cap_desc`}>Market Cap Descending</option>
        <option value={`market_cap_asc`}>Market Cap Ascending</option>
        <option value={`id_desc`}>Name Descending</option>
        <option value={`id_asc`}>Name Ascending</option>
        <option value={`volume_desc`}>Volume Descending</option>
        <option value={`volume_asc`}>Volume Ascending</option>
      </select>
    </div>
  );
}
