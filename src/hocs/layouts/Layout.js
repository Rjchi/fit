import Navbar from '../../navegation/nav'
import Footer from '../../navegation/foo'

function Layout({ children }) {
    return (
        <div>
            <Navbar />
                {children}
            <Footer />
        </div>
    );
};

export default Layout;