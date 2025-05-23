import React, { useEffect } from 'react';


function MusicMenu(props) {

    const {activeItemInMenu} = props;
    useEffect(()=>{
        const menuitem=document.querySelectorAll('#music-menu tr');
        for(let item of menuitem){
           if(item.getAttribute('data-option')===activeItemInMenu){
            item.classList.add('active');
           }
        }
    }
    
    )
    return (
      <table id="music-menu">
        <tbody>
        <tr>
            <th className="table-heading">Music <i className="fas fa-music"></i></th>
        </tr>
        <tr data-option="allSongs">
            <td className="table-item">All Songs<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="artists">
            <td className="table-item">Artists<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="albums">
            <td className="table-item">Albums<i className="fas fa-chevron-right"></i></td>
        </tr>
        </tbody>
    </table>
    );
  }
  
  export default MusicMenu;
  