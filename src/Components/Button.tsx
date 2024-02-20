import React from "react";

interface Props {
  onClick: () => void;
}
const Button = ({ onClick }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
