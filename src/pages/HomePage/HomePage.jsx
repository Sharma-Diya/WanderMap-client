import { useEffect, useState } from "react";

import "./HomePage.scss";

function HomePage({ setPageName }) {
  useEffect(() => {
    setPageName("Home");
  }, []);

  return (
    <>
    hi
    </>
  );
}

export default HomePage;