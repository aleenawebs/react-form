import React , {useState} from "react";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
         <form className="login-form" onSubmit={handleSubmit}>
            <label for="email" className="common-label">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Youremail@gmail.com" id="email" name="email" className="common-input" />
            <label for="password" className="common-label">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Youremail@gmail.com" id="password" name="password" className="common-input" />
            <button type="submit" className="common-btn">Login</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')} className="common-btn2">Don't Have An Account? Register</button>
        </div>
       
    )
}