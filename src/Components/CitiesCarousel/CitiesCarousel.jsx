import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";

function BasicCarousel() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
    <div style={{ background: 'blue' }}>
      <img src={img1} alt="Image 1" />
    </div>
    <div style={{ background: 'blue' }}>
      <img src={img2} alt="Image 2" />
    </div>
    <div style={{ background: 'blue' }}>
      <img src={img3} alt="Image 3" />
    </div>
    <div style={{ background: 'blue' }}>
      <img src={img4} alt="Image 4" />
    </div>
  </Carousel>
  
  );
}

export default BasicCarousel;
