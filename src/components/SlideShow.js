'use client'
import { Slide,Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

const SlideShow = ({items}) => {
    return (
      <div>
        <Slide slidesToScroll={3} slidesToShow={3} indicators={true} className='slideshow'>
          {items.map((item) => (
            <div className="each-slide-effect">
              <div>
                <Image
                  src={item.image}
                  width="200"
                  height="50"
                  alt="item Image"
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    );
}

export default SlideShow
