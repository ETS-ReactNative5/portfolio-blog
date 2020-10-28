import React from 'react';
import '../stylesheet/Overlay.scss';
import { useLocation } from 'react-router-dom';

const Overlay1 = ({data}, props) => {
  const location = useLocation()
  const artName = location.hash.substring(1);
  const overlayImg = data.filter(d=> d.name.toLowerCase() === artName)[0]
  return(
    // <div className="base" >
    //   <div className="shroud overlay-scroll box">
        <div className="overlay-popup">
         <img className="overlay-img" alt={overlayImg.name} src={require(`../imgs/${overlayImg.type}/${overlayImg.url}`)}/>
          {/* <img className="left-arrow" src="https://www.freeiconspng.com/uploads/white-arrow-transparent-png-22.png" alt="left" onClick={props.handleArrowClick}/>
          <img className="right-arrow" src="https://www.freeiconspng.com/uploads/white-arrow-transparent-png-22.png" alt="right" onClick={props.handleArrowClick}/>
          <p className="all-caps">{props.info.name}</p>
          {props.info.sold ? <p className="sold" onClick={props.handleCloseClick}>SOLD</p> : <a href='/contact'><p className="label" onClick={props.handleCloseClick}>BUY</p></a>}
          <p className="close" onClick={props.handleCloseClick}/>
          {props.info.url ? <img id="overlay-img" alt="painting" src={require(`../imgs/${props.galleryType}/${props.info.url}`)}/> : "" }
          
           */}
           <center> <p className="all-caps">{overlayImg.name}</p></center> 
          <i><p className="title">{overlayImg.specs}</p></i>
          <p className="desc">{overlayImg.description}</p>
        </div>
    //   </div>
    // </div>
  );
};


export default Overlay1;
