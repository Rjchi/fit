import Navbar from '../../navegation/nav'
import Footer from '../../navegation/foo'
import AdminNav from '../../navegation/AdminNav'
import styles from '../../styles/Layout.module.css'

function Layout({ children }) {
    const admin = localStorage.getItem("Admin")
    return (
        <div className={styles.Layout}>
            {
                admin === "1" || admin !== "0"?
                <AdminNav />:
                <Navbar />
            }
                {children}
            <Footer />
        </div>
    );
};

export default Layout;