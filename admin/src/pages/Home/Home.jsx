import React, { useState } from 'react';
import AddList from '../../components/addList/addList';
import ListItem from '../../components/listItem/listItem';
import Order from '../../components/Order/Order';
import Sidebar from '../../components/SideBar/Sidebar';

const Home = () => {
const [currentMenu, setCurrentMenu] = useState({showAddItem:true, showListItem: false, showOrder:false});


    return (
    <>
    {/* navbar */}
    
    <div className='flex gap-3 bg-gray-100'>
    {/* sidemenu */}
        <div>
            <Sidebar setCurrentMenu={setCurrentMenu} />
        </div>

    <div>
    {/* CurrentMenu */}
    {currentMenu.showAddItem && <AddList />}
    {currentMenu.showListItem && <ListItem />}
    {currentMenu.showOrder && <Order />}
    </div>
    </div>
        </>
)
}

export default Home
