import { Outlet, useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Nav } from "react-bootstrap";

function Layout(){
    const location = useLocation();

    return (
        <>
            <Nav variant="underline" activeKey={'/portfolio' + location.pathname} className="justify-content-center">
                <Nav.Item>
                    <Nav.Link as={Link} to="/" eventKey="/portfolio/">
                    Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/web-dev" eventKey="/portfolio/web-dev">
                    Web Development
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/system-analyst" eventKey="/portfolio/system-analyst">
                    System Analyst
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/ui-ux" eventKey="/portfolio/ui-ux">
                    UI/UX
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/it-infra" eventKey="/portfolio/it-infra">
                    IT Infrastructure
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;