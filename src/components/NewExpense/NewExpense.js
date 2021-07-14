import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const newExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseData={newExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
