import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

export default function Login () {
    const navigate = useNavigate()
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email === "" || password === "") {
            swAlert(
                <h2>Please enter email and password</h2>
            )
            return;
        } 
        if (email !== "" && !regexEmail.test(email)) {
            swAlert(
                <h2>Incorrect email format</h2>
            )
            return;
        }
        if (email !== "challenge@alkemy.org" || password !== "react") {
            swAlert(
                <h2>Incorrect email or password</h2>
            )
            return;
        }
        console.log("Login success");
        axios.post('http://challenge-react.alkemy.org', {email, password})
        .then(res => {
            swAlert(
                <h2>Login successful</h2>
            )
            const token = res.data.token;
            sessionStorage.setItem('token', token);
            navigate("/list")
        })
        .catch(err => {
            swAlert(
                <h2>ERROR {err.message}</h2>
            )
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    )
}