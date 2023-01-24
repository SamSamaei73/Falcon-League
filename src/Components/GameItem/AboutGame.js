import React from "react";


const AboutGame = ({ Photo, Info, Name, backGraund , video , logoStyle}) => {
  return (
    <div id="AboutGame">
      <video src={video} muted loop autoPlay />
      <div className="shadow">
      <div className="Title">
        <div className="ImgName">
          <div className="PhotoGame" style={logoStyle} >
            <img src={Photo} alt="" />
          </div>
          <h1>{Name}</h1>
        </div>
      </div>
      {/* <div className="About" style={backGraund}>
        {Info}
      </div> */}
      </div>
    </div>
  );
};

export default AboutGame;
