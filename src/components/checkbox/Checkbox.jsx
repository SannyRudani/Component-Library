import React, { useEffect, useState } from "react";
import "./checkbox.css";
import checkmark from "../../assets/icons/checkmark.svg";
import checkmark2 from "../../assets/icons/checkmark2.svg";

const Checkbox = ({ defaultHovered = false, defaultState = 0 }) => {
  const [state, setState] = useState(defaultState);
  const [hovered, setHovered] = useState(defaultHovered);

  const handleClick = () => {
    setState((prevState) => (prevState + 1) % 3);
  };

  useEffect(() => {
    setHovered(defaultHovered);
    setState(defaultState);
  }, [defaultHovered, defaultState]);

  return (
    <div
      className={`custom-checkbox ${
        (state === 1 || state === 0) && hovered && "check-hovered"
      }  ${state === 2 && hovered && "check-hovered-2"} ${
        state === 1 && "variant1"
      } ${state === 2 && "variant2"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {state === 1 ? (
        <img src={checkmark} alt="" className="checkmark" />
      ) : state === 2 ? (
        <img src={checkmark2} alt="" className="checkmark" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Checkbox;
