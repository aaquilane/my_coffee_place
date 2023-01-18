import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import NavigationBar from "./navbar/Navbar";

function Layout({categ}){
   
    return(
        <>
            <Header/>
            {categ.length > 0 && <NavigationBar categories = {categ}/>} 
            <Outlet />
        </>
    )
}

export default Layout