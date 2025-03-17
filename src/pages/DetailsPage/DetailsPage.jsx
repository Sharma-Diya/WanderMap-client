import { useEffect } from "react";
// import "./WelcomePage.scss";

function details({ setPageName }) {
  useEffect(() => {
    setPageName("details");
  }, []);

  return (
    <div className="details">
        hi
    </div>
  );
}

export default details;
