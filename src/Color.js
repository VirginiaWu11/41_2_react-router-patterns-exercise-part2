import { Link, useParams } from "react-router-dom";

const Color = () => {
  const { color } = useParams();
  return (
    <div style={{ backgroundColor: color }}>
      <h2>{color.name}</h2>
      <Link to="/colors">Go Back</Link>
    </div>
  );
};

export default Color;
