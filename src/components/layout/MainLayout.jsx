import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function MainLayout() {
    return (
        <>
            <Header />
            
                <Outlet />
            
            <Footer />
        </>
    );
}

export default MainLayout;