'use client'

import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const base = "#0182CB"
  const secondary = "#1298E3"


  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto 1.4em",
        lineHeight: "25px",
        background: "whitesmoke"


      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "20px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
          fontFamily: "rubik-semi",
          fontSize: "1.3em",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: isShowing ? "solid 1px rgba(209, 213, 219, 0.9)" : "solid 1px rgba(209, 213, 219, 0.9)",
          transition: ".4s",

        }}
        onClick={toggle}
        type="button"
      >
        <p style={{ margin: "0" }}>{props.title}</p>

        <svg style={{ fill: isShowing ? "black" : base, height: "1.8em", transition: ".4s ", transform: isShowing ? "rotate(180deg)" : "" }} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" /></svg>
      </button>
      <div
        style={{ transition: ".4s ", maxHeight: isShowing ? "1000px" : "0px", overflow: "hidden", padding: isShowing ? "1em 20px 1em 20px" : "0em 20px 0em 20px" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />

    </div>
  );
}
