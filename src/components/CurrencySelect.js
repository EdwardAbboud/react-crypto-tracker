export default function CurrencySelect(props) {
  return (
    <div>
      <select defaultValue={`eur`} onChange={props.handleCurrency}>
        <option value={`eur`}>EUR</option>
        <option value={`usd`}>USD</option>
      </select>
    </div>
  );
}
