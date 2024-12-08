import React, { useState } from 'react';
import AddList from '../../components/addList/addList';
import ListItem from '../../components/listItem/listItem';
import Order from '../../components/Order/Order';
import Sidebar from '../../components/SideBar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
const [currentMenu, setCurrentMenu] = useState({showAddItem:true, showListItem: false, showOrder:false});


    return (
    <div className='bg-gray-100'>
    {/* navbar */}
    <Navbar />
    <div className='flex gap-3'>
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
        </div>
)
}

export default Home
