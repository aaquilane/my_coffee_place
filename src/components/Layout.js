import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavigationBar from "./Navbar";

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