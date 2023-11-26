import { useState } from "react";
import data from "../data";

const Form = ({ setText }) => {
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = Number(count);
    setText(data.slice(0, amount));
  };
  return (
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="">paragraphs : </label>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        min="1"
        max="8"
        step="1"
      />
      <button className="btn" type="submit">
        generate
      </button>
    </form>
  );
};

export default Form;
