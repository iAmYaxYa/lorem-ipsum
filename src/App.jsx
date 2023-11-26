import { useState } from "react";
import Form from "./Components/Form";
import Paragraphs from "./Components/Paragraphs";

const App = () => {
  const [text, setText] = useState([]);

  return (
    <div className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <Form setText={setText} />
      <Paragraphs text={text} />
    </div>
  );
};
export default App;
