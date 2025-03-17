import { useEffect } from "react";
// import "./AttractionsPage.scss";

function Attractions({ setPageName }) {
  useEffect(() => {
    setPageName("attractions");
  }, []);

  return (
    <div className="attractions">
        hi
    </div>
  );
}

export default Attractions;
