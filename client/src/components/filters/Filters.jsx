import React, { useState } from "react";
import dropdownIcon from "../../frontend_assets/dropdown_icon.png";
const Filters = () => {
    const [displayFilter, setDisplayFilter] = useState(false);
  return (
    <div>
      {/* headding with buttons */}
      <div className="flex gap-3 items-center">
        <p className="text-3xl font-semibold">FILTERS</p>
        <img src={dropdownIcon} className={`w-4 h-5 md:hidden ${displayFilter?'rotate-90':""}`} onClick={()=>setDisplayFilter(!displayFilter)}/>
      </div>

<div className={`${displayFilter?'block':'hidden'} md:block m-5`}>

      <div className="border rounded border-2 px-3 py-2 grid gap-2 mb-3">
        <p className="text-2xl font-semibold" >CATEGORIES</p>
        <div>

        <input type="checkbox" id="Men" name="Men" value="Men" />
        <label for="Men" className="text-xl"> Men</label>
        </div>
       <div>

        <input type="checkbox" id="Women" name="Women" value="Women" />
        <label for="Women" className="text-xl" > Women</label>
       </div>
        <div>

        <input type="checkbox" id="kids" name="kids" value="kids" />
        <label for="kids" className="text-xl"> kids</label>
        </div>
       
      </div>


{/* sub categories */}

<div className="border rounded border-2 px-3 py-2 grid gap-2">
        <p className="text-2xl font-semibold" >TYPE</p>
        <div>

        <input type="checkbox" id="Topwear" name="Topwear" value="Topwear" />
        <label for="Topwear" className="text-xl"> Topwear</label>
        </div>
       <div>

        <input type="checkbox" id="Bottomwear" name="Bottomwear" value="Bottomwear" />
        <label for="Bottomwear" className="text-xl" > Bottomwear</label>
       </div>
        <div>

        <input type="checkbox" id="Winterwear" name="Winterwear" value="Winterwear" />
        <label for="Winterwear" className="text-xl"> Winterwear</label>
        </div>
       
      </div>
</div>

    </div>
  );
};

export default Filters;
