import React, { useState } from 'react'
import addIcon from '../../assets/add_icon.png'
import orderIcon from '../../assets/order_icon.png'

const Sidebar = ({setCurrentMenu}) => {
    const [selectedItem, setSelectedItem] = useState('');
    const handleDisplay = (name)=>{
         setSelectedItem(name)
        switch (name){
            case 'AddItem':
                setCurrentMenu({showAddItem:true, showListItem: false, showOrder:false})
                break;
            case 'ListItem':
                setCurrentMenu({showAddItem:false, showListItem: true, showOrder:false})
                break;
            case 'Order':
                setCurrentMenu({showAddItem:false, showListItem: false, showOrder:true})
                break;
            default:
                break;
    
        }
        
    }
  return (
    <div className='border-r-4 py-3 max-h-screen'>
        <ul className='h-screen'>
            
            {/* first item */}
            
            <li className='mb-4'>
                <div className={`sidebar-menu-mainDiv ${selectedItem === 'AddItem' ? 'bg-pink-300' : 'bg-white'}`} onClick={()=>handleDisplay("AddItem")}>
                    <img src={addIcon} className='md:w-[20px] w-[50px] m-auto md:m-0'/>
                    <p className='hidden md:block text-sm font-semibold'>Add Item</p>
                </div>
            </li>


            <li className='mb-4'>
                <div className={`sidebar-menu-mainDiv ${selectedItem === 'ListItem' ? 'bg-pink-300' : 'bg-white'}`} onClick={()=>handleDisplay("ListItem")}>
                    <img  className='md:w-[20px] w-[50px] m-auto  md:m-0' src={orderIcon}/>
                    <p className='hidden md:block text-sm font-semibold'>List Item</p>
                </div>
            </li>


            <li>
                <div className={`sidebar-menu-mainDiv ${selectedItem === 'Order' ? 'bg-pink-300' : 'bg-white'}`} onClick={()=>handleDisplay("Order")}>
                    <img className='md:w-[20px] w-[50px] m-auto md:m-0' src={orderIcon}/>
                    <p className='hidden md:block text-sm font-semibold'>Order</p>
                </div>
            </li>



        </ul>
    </div>
  )
}

export default Sidebar
