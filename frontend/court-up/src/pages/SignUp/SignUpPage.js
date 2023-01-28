import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './SignUp.css';

function SignUpPage(props) {
    return (
        <Container className='PageBody'>
        <Form className='FormBody'>
            <div>
                 <h1 className='FormTitle'>Sign Up</h1>
            </div> 
            
            <Form.Group className='Email'>
                 <Form.Label htmlFor='InputEmail' className='LoginItem'>Email</Form.Label>
                 <Form.Control type='email' id='InputEmail' placeholder='example@nickface.com' className='Input'/>
            </Form.Group>

            <Form.Group className='Password'>
                     <Form.Label htmlFor='InputPassword' className='LoginItem'>Password</Form.Label>
                     <Form.Control type='password' id='InputPassword' placeholder='example' className='Input'/>
            </Form.Group>
               
            <Form.Group className='Submit'>
                    <br /><Button type='submit' className='LoginButton'>Sign Up</Button> 
                <a href='login' className= 'LoginAccount'>Already Have An Account?</a>
            </Form.Group> 
          
        </Form>
        </Container>
    )
}

export default SignUpPage;