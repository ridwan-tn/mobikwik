import React, { useState } from 'react';
import "./Threed.css";
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';
const Question = ({ title, info,id }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h6 className="qques"><span style={{padding:"7px",height:"28px",
  width:"28px",
  backgroundColor:"#e3e6fa",
  borderRadius:"50%",
  display:"inline-block",marginRight:"0px"}}>{id}</span>{title}</h6>
        <button className='qbtn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;