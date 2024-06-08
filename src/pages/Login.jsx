import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function Login() {

    const navigate = useNavigate();

    const [showPass, setShowPass] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const formHandler = async (e) => {
        e.preventDefault();

        const data = { username: username, password: password };

        let result = await fetch(
            process.env.REACT_APP_BASE_URL + 'login',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            }
        );

        result = await result.json();
        if (result.status) {
            localStorage.setItem('user', JSON.stringify(result.data));
            navigate('/admin/dashboard');
        }
    }

    const isVisible = () => {
        setShowPass(!showPass);
    }

    return (
        <section className='login_section'>
            <div className="container h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-lg-4 col-md-6">
                        <form className="login_form" onSubmit={formHandler}>
                            <div className="login_title"><span>Admin Login</span></div>
                            <div className="mb-3">
                                <TextField
                                    required
                                    label="Username"
                                    type="text"
                                    className="w-100"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <TextField
                                    required
                                    label="Password"
                                    type={showPass ? "text" : "password"}
                                    className="w-100"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <FormControlLabel control={<Checkbox onChange={isVisible} />} label="Show Password" />
                            </div>
                            <div className="mb-3 ">
                                <Button
                                    variant="contained"
                                    className="w-100"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;