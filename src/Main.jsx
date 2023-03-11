import React from "react";
import box2bg from './imim/q32T60_20230214090715426.jpg'
import box1bg from './imim/230125_pc_reserve_bg.jpg'
import box3bg from './imim/uCaICb_20230209082722973.jpg'


let styllll = {
  box1: {
    width: "100vw",
    height: "300px",
    backgroundImage : `url(${box1bg})`,
  }

};

function Main() {
  return (
    <div>
      <div style={styllll.box1} ></div>
      <div style={{width : '100vw' , height : '1200px' , backgroundImage : `url(${box2bg})` , backgroundRepeat : 'no-repeat' , backgroundSize: 'cover' }}></div>
      <div style={{width : '100vw' , height : '300px' , backgroundColor : 'yellowgreen'}}>

      </div>
      <div style={{width : '100vw' , height : '1200px' , backgroundImage : `url(${box3bg})` , backgroundRepeat : 'no-repeat' , backgroundSize: 'cover'}}>

      </div>
    </div>
  );
}

export default Main;
