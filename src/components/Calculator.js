import CalculatorButtons from './CalculatorButtons';

function Calculator() {
  return (
    <div className="calculator">
      <form action="">
        <div className="display">
          <input type="text" value="0" />
        </div>
        <CalculatorButtons />
      </form>
    </div>
  );
}
export default Calculator;
