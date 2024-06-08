import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { Nav } from "react-bootstrap";

function Layout(){
    const location = useLocation();

    return (
        <>
        <Nav variant="underline" activeKey={location.pathname} className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/web-dev">Wed Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/system-analyst">System Analyst</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/ui-ux">UI/UX</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/it-infra">IT Infrastructure</Nav.Link>
            </Nav.Item>
        </Nav>
            {/* <Nav variant="underline"  className="justify-content-center" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/web-dev">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav> */}
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Layout;