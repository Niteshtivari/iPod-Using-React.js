import React from 'react';
import './App.css';
import Screen from './components/Screen';
import Controls from './components/Controls';
import ZingTouch from 'zingtouch';

class App extends React.Component{
    constructor(){
      super();
      this.state ={
      screen:{
        'sideMenu':true, 'coverflow': false, 'games': false, 'settings': false,'music':false
      },
      activItemMenu:'coverflow',
      activeItemMusic:"allSongs",
      musicComponent:"musicMenu"
    }
    }
   
    handleRotate = ()=>{
      console.log(document.getElementById('controls'));
      const myregion= new ZingTouch.Region(document.getElementById('controls'));
      const rotateArea = document.getElementById('wheel');
     if(!rotateArea){
      console.log("rotate area not Ok");
     }
      myregion.bind(rotateArea, 'rotate', function(event){

            const menuList = document.querySelectorAll('tr');
            const distanceFromLast = event.detail.distanceFromLast;

            if(distanceFromLast>1){
              for(let i=1;i<menuList.length;i++){
                if(menuList[i].classList.contains('active')===true){
                  menuList[i].classList.remove('active');
                  if(i===menuList.length-1){
                    menuList[1].classList.add('active');
                  }else{
                    menuList[++i].classList.add('active');
                  }
                }
              }
            }


            if(distanceFromLast<-1){
              for(let i=menuList.length-1;i>0;i--){
                if(menuList[i].classList.contains('active')===true){
                  menuList[i].classList.remove('active');
                  if(i===1){
                    menuList[menuList.length-1].classList.add('active');
                  }else{
                    menuList[--i].classList.add('active');
                  }
                }
              }
            }
  

      })
    }

    handleOk=()=>{
      const selectedItemFromMenu = document.querySelector('#side-menu .active');
      const selectedItemFromMusic = document.querySelector('#music-menu .active');

      if(selectedItemFromMenu){
        const optionSelected = selectedItemFromMenu.getAttribute('data-option');
        const screen = this.state.screen;
        for(let key in screen){
          screen[key]=false;
        }

        screen[optionSelected]= true;
        this.setState({
          screen:screen,
          activItemMenu:optionSelected
        })
      }else if(selectedItemFromMusic){
          const optionSelected = selectedItemFromMusic.getAttribute('data-option');
           this.setState({
            activeItemMusic:optionSelected,
            musicComponent:optionSelected
           })
      }

    }

    handleMenu = ()=>{
      if(this.state.musicComponent==='musicMenu'){
        const screen = this.state.screen;
        for(let key in screen){
          screen[key]=false;
        }
        screen.sideMenu=true;
        this.setState({
          screen:screen,
          activeIntemMusic:'allSongs'
        })
      }
    else{
      const optionSelected = this.state.musicComponent
      this.setState({
        musicComponent:'musicMenu',
        activeItemMusic:optionSelected
      })
    }
  }

  /*componentDidMount() {
    this.handleRotate();
  }*/

  // Handle the rotate event fired from the control component

  // If ok button is clicked,  open the selected component

  // If menu button is clicked, go back to the menu screen

  render(){
    const {screen,activItemMenu,activeItemMusic,musicComponent} = this.state
    return (
      <>
      <div id='iPod-app'> 
       <Screen 
               screen={screen}
               activItemMenu={activItemMenu}
               activeItemMusic={activeItemMusic}
               musicComponent={musicComponent}
       />

      <Controls 
               handleOk={this.handleOk}
               handleRotate={this.handleRotate}
               handleMenu={this.handleMenu}


      />

      </div>
      </>
    );
  }

}

export default App;
