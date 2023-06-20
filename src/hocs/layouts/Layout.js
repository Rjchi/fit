import Navbar from '../../navegation/nav'
import Footer from '../../navegation/foo'
import AdminNav from '../../navegation/AdminNav'

function Layout({ children }) {
    const admin = localStorage.getItem("Admin")
    return (
        <>
            {
                admin === "1" || admin !== "0"?
                <AdminNav />:
                <Navbar />
            }
                {children}
            <Footer />
        </>
    );
};

export default Layout;