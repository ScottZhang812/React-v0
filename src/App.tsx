import categories from "./categories";
export const cate = categories;
import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            console.log(category);
            setSelectedCategory(category);
          }}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={
          selectedCategory
            ? expenses.filter((e) => e.category === selectedCategory)
            : expenses
        }
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
          console.log(expenses);
        }}
      ></ExpenseList>
    </>
  );
};

export default App;
