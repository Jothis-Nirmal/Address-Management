import React, { Fragment } from "react";

import Hero from "../components/Hero";
// import Content from "../components/Content";

const Home = ({address}) => (
  <Fragment>
    <Hero address={address}/>
    <hr />
    {/* <Content /> */}
  </Fragment>
);

export default Home;
