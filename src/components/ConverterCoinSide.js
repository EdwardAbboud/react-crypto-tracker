export default function ConverterCoinSide(props) {
  return (
    <div className="left-side-converter">
      <div className="coin-section">
        <h3>Coin</h3>
        <select defaultValue={"bitcoin"} onChange={props.changeCoin}>
          {props.coins?.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <form>
          <input
            type="number"
            className="coin-amount-input"
            onChange={props.handleCurrencyConversion}
            placeholder={props.convertedCoin}
          />
        </form>
      </div>
    </div>
  );
}
