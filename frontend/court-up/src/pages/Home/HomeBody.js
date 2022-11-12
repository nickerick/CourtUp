import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import './Home.css';


function HomeBody(props) {
    return (
        
              <Card className='HomeBody'>
                <Card.Body className='Card'>
                    <Card.Title className='CardTitle mb-5'>Welcome to <span>CourtUp</span></Card.Title>
                    <Card.Text className='my-5'>
                    Find, rate, and play at basketball courts across the globe!
                    </Card.Text>
                    <Button  className='btnPrimary btn mt-5 mb-2'> Courts Near Me</Button>
                    <Button  className= 'btnSecondary btn my-2 '>Search Courts</Button>
                </Card.Body>
                </Card>
        
=======

function HomeBody(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="courtup-logo.png/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
>>>>>>> main
    )
}

export default HomeBody;