export default function ConverterCurrencySide(props) {
  return (
    <div className="right-side-converter">
      <h3>Currency</h3>
      <select defaultValue={"eur"} onChange={props.changeCurrency}>
        {props.currencies.map((currency) => (
          <option key={currency.id} value={currency.id}>
            {currency.name}
          </option>
        ))}
      </select>

      <div>
        <form>
          <input
            type="number"
            className="coin-amount-input currency-input"
            onChange={props.handleCoinConversion}
            placeholder={
              props.isConversionLoading ? "" : props.convertedCurrency
            }
          />
        </form>
      </div>
    </div>
  );
}
