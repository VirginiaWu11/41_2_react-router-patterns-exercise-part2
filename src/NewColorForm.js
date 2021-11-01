import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const INITIAL_STATE = {
    color: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData.color);
    setFormData(INITIAL_STATE);
    history.push("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor"> Background Color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="Box color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Add Color</button>
    </form>
  );
};

export default NewColorForm;
