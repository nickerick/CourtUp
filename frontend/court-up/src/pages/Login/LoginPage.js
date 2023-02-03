import { useState } from 'react';
import UserService from '../../services/UserService';
import {useNavigate} from "react-router-dom"

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './Login.css';

function LoginPage(props) {

    const [inputEmail, setInputEmail] = useState("");
    const [inputPass, setInputPass] = useState("");
    const navigate = useNavigate();

    const loginFunc = async () => {
        var LoginSuccess = await UserService.UserLogin(inputEmail,inputPass);
        if (LoginSuccess){
            navigate('/courts');
        }
           
    }

    const EmailHandler = event => {
        setInputEmail(event.target.value);
     };

    const PassHandler = event => {
        setInputPass(event.target.value);
     };
    
    return (
        <Container className='PageBody'>
        <Form className='LoginFormBody'>
            <div>
                 <h1 className='FormTitle'>Login</h1>
            </div> 
            
            <section className='Email'>
                 <Form.Label htmlFor='InputEmail' className='LoginItem'>Email</Form.Label>
                 <Form.Control onChange={EmailHandler} name='EmailInput'  type='email' id='InputEmail' className='Input'/>
            </section>

            <section className='Password'>
                     <Form.Label htmlFor='InputPassword' className='LoginItem'>Password</Form.Label>
                     <a href='ForgotPassword' className='ForgotPass'>Forgot Password?</a>
                     <Form.Control onChange={PassHandler} type='password' id='InputPassword' className='Input'/>
            </section>
               
            <section className='Submit'>
                    <br /><Button className='LoginButton btnPrimary' onClick={loginFunc}>Sign In</Button> 
                <a href='signup' className= 'AccountChange'>Don't Have An Account?</a>
            </section> 
          
        </Form>
        </Container>
    )
}

export default LoginPage;