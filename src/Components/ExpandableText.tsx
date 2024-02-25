import React, { useState } from "react";
import Button from "./Button";

interface Props {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children, maxLength = 10 }: Props) => {
  const [isWhole, setIsWhole] = useState(false);
  return (
    <p>
      {!isWhole ? (
        <p>
          {children.slice(0, maxLength - 1)}...
          <Button
            name="More"
            onClick={() => {
              setIsWhole(true);
            }}
          ></Button>
        </p>
      ) : (
        <p>
          {children}
          <Button
            name="Less"
            onClick={() => {
              setIsWhole(false);
            }}
          ></Button>
        </p>
      )}
    </p>
  );
};

export default ExpandableText;
