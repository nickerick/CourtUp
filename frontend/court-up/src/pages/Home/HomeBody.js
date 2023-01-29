import UserService from '../../services/UserService';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';


function HomeBody(props) {
    
    const exampleFunc = () => {
        UserService.testDb('test value');
    }

    return (
        
              <Card className='HomeBody'>
                <Card.Body className='Card'>
                    <Card.Title className='CardTitle mb-5'>Welcome to <span>CourtUp</span></Card.Title>
                    <Card.Text className='my-5'>
                    Find, rate, and play at basketball courts across the globe!
                    </Card.Text>
                    <Button  className='btnPrimary btnHomeBody mt-5 mb-1' onClick={exampleFunc}> Courts Near Me</Button>
                    <Button  className= 'btnSecondary btnHomeBody my-3 '>Search Courts</Button>
                </Card.Body>
                </Card>
    )
}

export default HomeBody;
