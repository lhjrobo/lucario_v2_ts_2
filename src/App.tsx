import Title from "./title";
import Page2 from "./page2";
import Trigger from "./store";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Scroll = require("react-scroll");

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleWheel = (event) => {
    event.preventDefault();
    event.deltaY > 0 ? setToggle(true) : setToggle(false);
  };
  let componentDidMount = 0;
  useEffect(() => {
    setToggle(false);
    setTimeout(() => {
      setToggle(true);
    }, 5000);
  }, [componentDidMount]);
  //この書き方でuseEffectをcomponentDidMountのように使える。つまり、ロード時以外発火しない。
  useEffect(() => {
    toggle
      ? Scroll.scroller.scrollTo("Page2", {
          duration: 1600,
          delay: 0,
          smooth: "easeInOutQuart",
        })
      : Scroll.scroller.scrollTo("Title", {
          duration: 1600,
          delay: 0,
          smooth: "easeInOutQuart",
        });
  });
  return (
    <Trigger.Provider value={toggle}>
      <Body onWheel={handleWheel}>
        <Title />
        <Page2 />
      </Body>
    </Trigger.Provider>
  );
};
const Body = styled.body`
  background-color: #f2f2f2;
  color: #363636;
  overflow: hidden;
  width: 100vw;
  height: 200vh;
  margin: 0px;
  padding: 0;
`;
export default App;
