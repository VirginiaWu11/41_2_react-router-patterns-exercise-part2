import { Link } from "react-router-dom";
import { useState } from "react";

const ColorList = ({ colors }) => {
  return (
    <div>
      <h1>All colors</h1>
      <Link to="/colors/new">Add a color</Link>
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
