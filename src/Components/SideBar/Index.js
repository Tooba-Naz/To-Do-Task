import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PiNotepadBold } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {MdLogout } from "react-icons/md";
import { Button } from "../../Components/Button/Index";

const SideBar=()=>{
    const location = useLocation();
    const isLocationPage = location.pathname === "/location";
    return(
     
    <>
<aside id="default-sidebar" className="fixed top-0 left-0  w-64 h-screen" aria-label="Sidebar">
   <div class="h-full py-7">

         <div>
         <Link to={'/todo'} > <Button
            type="submit"
            size='large'
            varient={isLocationPage ? "locationButton" : "taskButton"}
          >
            <PiNotepadBold size={'20'} className="color-white mr-4" />
            Task
          </Button>
          </Link>
        </div>
         <div>
         <div>
          <Link to={'/location'}> <Button
            type="submit"
            size='large'
            varient={isLocationPage ? "taskButton" : "locationButton"}
          >
            <HiOutlineLocationMarker size={'20'} className="mr-3" />
            Location
          </Button>
          </Link>
        </div>
          </div>
         <Link to={"/"}><div className="mt-96">
          <Button
            type="submit"
            size='large'
            varient="logoutButton"
          >
            <MdLogout size={'20'} className="mr-3" />
            Log Out
          </Button>
        </div>
        </Link>
   </div>
</aside>



    </>
    )
} 

export default  SideBar;