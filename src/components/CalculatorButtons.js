export default function CalculatorButtons() {
  return (
    <div>
      <div>
        <div className="display">
          <input type="text" value="0" />
        </div>
      </div>
      <div>
        <input type="button" value="AC" />
        <input type="button" value="+/-" />
        <input type="button" value="%" />
        <input type="button" className="btnOperator" value="/" />
      </div>
      <div>
        <input type="button" value="7" />
        <input type="button" value="8" />
        <input type="button" value="9" />
        <input type="button" className="btnOperator" value="*" />
      </div>
      <div>
        <input type="button" value="4" />
        <input type="button" value="5" />
        <input type="button" value="6" />
        <input type="button" className="btnOperator" value="-" />
      </div>
      <div>
        <input type="button" value="1" />
        <input type="button" value="2" />
        <input type="button" value="3" />
        <input type="button" className="btnOperator" value="+" />
      </div>
      <div>
        <input type="button" className="btnOperator-0" value="0" />
        <input type="button" value="." />
        <input type="button" className="btnOperator" value="=" />
      </div>
    </div>
  );
}
