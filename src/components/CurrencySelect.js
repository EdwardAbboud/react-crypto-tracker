import "../css/NavBar.css";

export default function CurrencySelect(props) {
  return (
    <div>
      <select
        className="currency-selector"
        defaultValue={`eur`}
        onChange={props.handleCurrency}
      >
        <option value={`eur`}>EUR</option>
        <option value={`usd`}>USD</option>
      </select>
    </div>
  );
}
