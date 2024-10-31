import HomepageSidebar from '../components/HomepageSideBar';
import Navbar from '../components/NavBar';

export const TempHome: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HomepageSidebar />
        </div>
    );
}