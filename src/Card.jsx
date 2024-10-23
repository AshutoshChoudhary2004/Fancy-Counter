import Title from "./Title.jsx";
import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import ButtonContainer from "./ButtonContainer.jsx";
import CountButton from "./CountButton.jsx";
import { useState, useEffect, useRef } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const [locked, setLock] = useState(false);

  const count_ref = useRef(0);
  count_ref.current = count;

  useEffect(() => {
    const handleClick = (event) => {
      if (event.code == "Space") {
        if (count_ref.current == 5) setLock(true);
        else setCount(count_ref.current + 1);
      }
    };

    window.addEventListener("keydown", handleClick);

    return () => window.removeEventListener("keydown", handleClick);

  }, []);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} setLock={setLock} />
      <ButtonContainer>
        <CountButton type = {"minus"} setCount = {setCount} locked = {locked} setLock = {setLock}/>
        <CountButton type = {"plus"} setCount = {setCount} locked = {locked} setLock = {setLock}/>
      </ButtonContainer>
    </div>
  );
}

