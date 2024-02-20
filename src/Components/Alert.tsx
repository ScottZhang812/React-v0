import { ReactNode } from "react";

interface Props {
  children: string;
  closeAlt: () => void;
}

const Alert = ({ children, closeAlt }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={closeAlt}
      ></button>
    </div>
  );
};

export default Alert;
