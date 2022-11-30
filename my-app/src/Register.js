import React , {useState} from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
         <form className="register-form" onSubmit={handleSubmit}>
         <label for="name" className="common-label">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Your Name" id="name" name="name" className="common-input" />
            <label for="email" className="common-label">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Youremail@gmail.com" id="email" name="email" className="common-input" />
            <label for="password" className="common-label">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" className="common-input" />
            <button type="submit" className="common-btn">Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')} className="common-btn2">Already have an Account? Login</button>
        </div>
    )
}