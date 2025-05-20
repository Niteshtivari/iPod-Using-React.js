import React, { useEffect } from 'react';


function SideMenu(props) {
// write logic for changing the selected item in the side menu
const {activeItemInMenu} = props;
useEffect(()=>{
    const menuitem=document.querySelectorAll('#side-menu tr');
    for(let item of menuitem){
       if(item.getAttribute('data-option')===activeItemInMenu){
        item.classList.add('active');
       }
    }
}

)

  return (
    <table id="side-menu">
        <tbody>
        <tr>
            <th className="table-heading">iPod <i className="fas fa-home"></i></th>
        </tr>
        <tr data-option="coverflow">
            <td className="table-item">Coverflow<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="music">
            <td className="table-item">Music<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="games">
            <td className="table-item">Games<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="settings">
            <td className="table-item">Settings<i className="fas fa-chevron-right"></i></td>
        </tr>
        </tbody>
    </table>
  );
}

export default SideMenu;
