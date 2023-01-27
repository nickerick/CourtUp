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
                     <div className='ForgotPass'>Forgot Password?</div>
                     <Form.Control type='password' id='InputPassword' placeholder='example' className='Input'/>
            </Form.Group>
               
            <Form.Group className='Submit'>
                    <br /><Button type='submit' className='LoginButton'>Sign In</Button> 
                <div className= 'CreateAccount'>Don't Have An Account?</div>
            </Form.Group> 
          
        </Form>
        </Container>
    )
}

export default LoginPage;