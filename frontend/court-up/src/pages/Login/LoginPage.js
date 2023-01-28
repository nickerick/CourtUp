import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './Login.css';

function LoginPage(props) {
    return (
        <Container className='PageBody'>
        <Form className='FormBody'>
            <div>
                 <h1 className='FormTitle'>Login</h1>
            </div> 
            
            <Form.Group className='Email'>
                 <Form.Label htmlFor='InputEmail' className='LoginItem'>Email</Form.Label>
                 <Form.Control type='email' id='InputEmail' placeholder='example@nickface.com' className='Input'/>
            </Form.Group>

            <Form.Group className='Password'>
                     <Form.Label htmlFor='InputPassword' className='LoginItem'>Password</Form.Label>
                     <a href='ForgotPassword' className='ForgotPass'>Forgot Password?</a>
                     <Form.Control type='password' id='InputPassword' placeholder='example' className='Input'/>
            </Form.Group>
               
            <Form.Group className='Submit'>
                    <br /><Button type='submit' className='LoginButton'>Sign In</Button> 
                <a href='signup' className= 'CreateAccount'>Don't Have An Account?</a>
            </Form.Group> 
          
        </Form>
        </Container>
    )
}

export default LoginPage;