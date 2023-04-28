import CalculatorButtons from './CalculatorButtons';
import Quote from './Quote';

function Calculator() {
  return (
    <div>
      <Quote />
      <div className="calculator">
        <form action="">
          <CalculatorButtons />
        </form>
      </div>
    </div>
  );
}
export default Calculator;
