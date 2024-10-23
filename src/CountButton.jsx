import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function CountButton({ type, setCount, locked, setLock }) {
  return (
    <button
      disabled={locked}
      onClick={(event) => {
        if (type == "minus") setCount((prev) => Math.max(0, prev - 1));
        else{
          setCount(prev => {
            if (prev == 5){
              setLock(true);
              return prev;
            }else return prev + 1;
          });
        }
        event.currentTarget.blur();
      }}
      className="count-btn"
    >
      {type == "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
