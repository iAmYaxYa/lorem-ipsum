import React from "react";
import { nanoid } from "nanoid";
import Paragraph from "./Paragraph";

const Paragraphs = ({ text }) => {
  return (
    <div className="lorem-text">
      {text?.map((paragraph, i) => {
        return <Paragraph key={nanoid()} paragraph={paragraph} />;
      })}
    </div>
  );
};

export default Paragraphs;
