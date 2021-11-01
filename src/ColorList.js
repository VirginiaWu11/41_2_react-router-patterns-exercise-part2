import { Link } from "react-router-dom";
import { useState } from "react";

const ColorList = () => {
  const INITIAL_COLORS = ["red", "green", "blue", "yellow"];
  const [colors, setColors] = useState(INITIAL_COLORS);
  const addColor = (color) => {
    setColors([color, ...colors]);
  };
  return (
    <div>
      <h1>All colors</h1>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
