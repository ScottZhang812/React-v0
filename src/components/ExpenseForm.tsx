//Using Zod for validation is ommited
import React from "react";
import Button from "./Button";
import categories from "../categories";
import { useForm } from "react-hook-form";

interface ExpenseFormData {
  description: string;
  amount: number;
  category: string;
}
interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseFormData>();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })} //`vAN` is easy to forget
          id="amount"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value="">All categories</option>
          {categories.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <Button name="Submit" onClick={() => {}}></Button>
    </form>
  );
};

export default ExpenseForm;
