import React from 'react';
import './css/screen.css';
import Music from './Music';
import Coverflow from './Coverflow';
import Settings from './Settings';
import Games from './Games';
import SideMenu from './SideMenu';


class Screen extends React.Component{
  constructor(props){
    super(props)
    this.state={
      screen:{'musicMenu':false, 'allSongs':false, 'artists':false,'albums':false},
      activeItemInMenu:this.props.activeItemMusic

    }

  }

// Display the sidemenu, coverflow, games,Music etc here
  render(){
   const {sideMenu,music,games,settings,coverflow} = this.props.screen;
   const {activItemMenu,activeItemMusic,musicComponent}= this.props

   const currentScreen = this.state.screen;
   for(let key in currentScreen){
    currentScreen[key]=false;
   }

   currentScreen[musicComponent]=true;
   const activeItemInMenu =activeItemMusic;

   

    return (
      <>
      <div id='screen'>
        <div id='top-bar'>
          <div id='battery'>

          </div>

        </div>
          {
            !sideMenu
              ?coverflow
                ?<Coverflow />
              :music
                ?<Music display={currentScreen}  activeItemInMenu={activeItemInMenu} />
              :settings
                ?<Settings />
                :<Games />  
            :<SideMenu activeItemInMenu={activItemMenu}/>
          }
      </div>
      </>
    );
  }

}

export default Screen;

