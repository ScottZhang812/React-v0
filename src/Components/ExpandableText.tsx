import React, { useState } from "react";
import Button from "./Button";

interface Props {
  children: string;
  maxLength: number;
}

const ExpandableText = ({ children, maxLength }: Props) => {
  const [isWhole, setIsWhole] = useState(false);
  return (
    <div>
      {!isWhole ? (
        <div>
          {children.slice(0, maxLength - 1) + "..."}
          <Button
            name="More"
            onClick={() => {
              setIsWhole(true);
            }}
          ></Button>
        </div>
      ) : (
        <div>
          {children}
          <Button
            name="Less"
            onClick={() => {
              setIsWhole(false);
            }}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default ExpandableText;
