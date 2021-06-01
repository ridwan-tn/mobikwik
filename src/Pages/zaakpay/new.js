import React, { useState } from 'react';
import "./Threed.css";
import data from './data';
import SingleQuestion from './Question';
function New() {
  const [questions] = useState(data);
  return (
    <main>
      <div style={{
  background: "var(--clr-white)",
  borderRadius: "var(--radius)",
  padding: "2.5rem 2rem",
  maxWidth: "var(--fixed-width)",
  display: "grid",
  gap: "1rem 2rem",
  maxWidth:"600px",minWidth:"460px"}}>
        <section className="cardlast" className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion  key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default New;