import React, { useRef } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
} //optional
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();
  console.log(errors);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      //   {(event) => {
      //     event.preventDefault();
      //     if (nameRef.current !== null) person.name = nameRef.current.value;
      //     if (ageRef.current !== null)
      //       person.age = parseInt(ageRef.current.value);
      //     console.log(person);
      //   }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name required.</p>
        )}
        {errors.name?.type === "minLength" && <p>At least 3 letters.</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
