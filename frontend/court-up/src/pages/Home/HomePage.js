import { Container } from "react-bootstrap";
import HomeNavbar from "../../components/NavBar/HomeNavbar";
import HomeBody from "./HomeBody";

function HomePage(props) {
    return (
        <div>
            <HomeNavbar />
            <Container className="PageBody">
            <HomeBody className=''/>
            </Container>
        </div>
    )
}

export default HomePage;