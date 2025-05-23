import './css/controls.css';
import leftArrow from './images/left-arrow.png';
import rightArrow from './images/right-arrow.png';
import bottomArrow from './images/arrow-pointing-downwards.png';
//onClick={props.handleRotate}
// introduce your own eventhandler for eac button Here.
function Controls(props) {
    return (
      <section id="controls" onClick={props.handleRotate}>
        <div id="wheel" >
          <span 
            id="menu-button"
            className="buttons" 
            style={ {top: 20} }
            onClick={props.handleMenu}
          >
            Menu
          </span>
          <img className="buttons" draggable="false"
            src={leftArrow} alt="left" 
            style={ {left: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src={rightArrow} alt="right" 
            style={ {right: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src={bottomArrow} alt="bottom" 
            style={ {bottom: 13, width: 30, height: 37} }>
          </img>
          <div id="ok-button" onClick={props.handleOk}>
            <b>OK</b>
          </div>
        </div>
      </section>
    );
  }
  
  export default Controls;
  