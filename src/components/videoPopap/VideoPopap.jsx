/* eslint-disable react/prop-types */
import { GiTireIronCross } from "react-icons/gi";
import "./VideoPopap.css";
const VideoPopap = ({handleHidevideo}) => {
    // const handlestopPropagation = (e) => {
    //     e.stopPropagation();
    //   };
    
   
  return (
    <>
      <div  className="videoPopapFullArea ">
        <div className="videoPopapArea" onClick={handleHidevideo}>
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/DIAdcsa6gAQ?autoplay=1&loop=1&mute=1"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>

          <div onClick={handleHidevideo} className="CrossIcon">
            <GiTireIronCross />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPopap;
