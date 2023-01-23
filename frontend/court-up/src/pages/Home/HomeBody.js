// import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';


function HomeBody(props) {

    // const [testMsg, setTestMsg] = useState('yo');

    const testDb = async () => {
        const response = await fetch(`/api/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'},
            body: JSON.stringify({email: 'nickerickpoopface', password: 'password'})
          })
;
          const resp = await response.json()
          console.log(resp);
        
        //   setTestMsg(resp.msg);
    }

    return (
        
              <Card className='HomeBody'>
                <Card.Body className='Card'>
                    <h1></h1>
                    <Card.Title className='CardTitle mb-5'>Welcome to <span>CourtUp</span></Card.Title>
                    <Card.Text className='my-5'>
                    Find, rate, and play at basketball courts across the globe!
                    </Card.Text>
                    <Button  className='btnHomePrimary btnHomeBody mt-5 mb-2' onClick={testDb}> Courts Near Me</Button>
                    <Button  className= 'btnHomeSecondary btnHomeBody my-2 '>Search Courts</Button>
                </Card.Body>
                </Card>
    )
}

export default HomeBody;
