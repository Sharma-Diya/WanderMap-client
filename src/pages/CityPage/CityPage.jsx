import { useEffect } from "react";
// import "./WelcomePage.scss";

function city({ setPageName }) {
  useEffect(() => {
    setPageName("city");
  }, []);

  return (
    <div className="city">
        hi
    </div>
  );
}

export default city;
