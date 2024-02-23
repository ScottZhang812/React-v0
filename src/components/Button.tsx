import React from "react";

interface Props {
  name: string;
  onClick: () => void;
}
const Button = ({ name, onClick }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
