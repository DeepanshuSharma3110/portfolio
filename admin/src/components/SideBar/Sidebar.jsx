import React from 'react'

const Sidebar = ({setCurrentMenu}) => {
    const handleDisplay = (name)=>{
         
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
        }
        
    }
  return (
    <div className='border py-3 max-h-screen'>
        <ul>
            
            {/* first item */}
            
            <li>
                <div className='border-y-2 border-l-2 py-1 pl-3' onClick={()=>handleDisplay("AddItem")}>
                    <img />
                    <p className='hidden sm:block'>Add Item</p>
                </div>
            </li>


            <li>
                <div  onClick={()=>handleDisplay("ListItem")}>
                    <img />
                    <p className='hidden sm:block'>List Item</p>
                </div>
            </li>


            <li>
                <div  onClick={()=>handleDisplay("Order")}>
                    <img />
                    <p className='hidden sm:block'>Order</p>
                </div>
            </li>



        </ul>
    </div>
  )
}

export default Sidebar
