import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

function Layout(){
    return (
        <div>
            {/* <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='web-dev'>Web Development</Link>
                        </li>
                    </ul>
                </nav>
            </header> */}
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;