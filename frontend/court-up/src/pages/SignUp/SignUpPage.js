import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './SignUp.css';

function SignUpPage(props) {
    return (
        <Container className='PageBody'>
        <Form className='SignUpFormBody'>
            <div>
                 <h1 className='FormTitle'>Sign Up</h1>
            </div> 
            <Form.Group className='Username'>
                 <Form.Label htmlFor='InputUsername' className='LoginItem'>Username</Form.Label>
                 <Form.Control type='text' id='InputUsername' className='Input'/>
            </Form.Group>

            <Form.Group className='Email'>
                 <Form.Label htmlFor='InputEmail' className='LoginItem'>Email</Form.Label>
                 <Form.Control type='email' id='InputEmail' className='Input'/>
            </Form.Group>

            <Form.Group className='Password'>
                     <Form.Label htmlFor='InputPassword' className='LoginItem'>Password</Form.Label>
                     <Form.Control type='password' id='InputPassword' className='Input'/>
            </Form.Group>

            <Form.Group className='Password'>
                     <Form.Label htmlFor='ConfirmPassword' className='LoginItem'>Confirm Password</Form.Label>
                     <Form.Control type='password' id='ConfirmPassword' className='Input'/>
            </Form.Group>
               
            <Form.Group className='Submit'>
                    <br /><Button type='submit' className='LoginButton btnPrimary'>Sign Up</Button> 
                <a href='login' className= 'AccountChange'>Already Have An Account?</a>
            </Form.Group> 
          
        </Form>
        </Container>
    )
}

export default SignUpPage;