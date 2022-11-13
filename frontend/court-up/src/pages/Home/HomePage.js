import { Container } from "react-bootstrap";
import HomeNavbar from "../../components/NavBar/HomeNavbar";
import HomeBody from "./HomeBody";

function HomePage(props) {
    return (
        <div>
            <HomeNavbar />
            <Container className="PageBody">
            <HomeBody/>
            </Container>
        </div>
    )
}

export default HomePage;