
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/Footer/Footer';
import Navbar from '../component/shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-278px)] lg:mt-16">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;