import { AppProvider } from '../context/MenuContext';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (e: any) => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
    
            const user = result.user;
            console.log("User logged in:", user);
    
            navigate('/');
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return (
        <AppProvider>
        <div className="loginContainer">
            <div className="header">
                <img src={ "images/logo.png" } alt="Triton Eats Logo" className="login_logo-icon" />
            </div>
            <p className='slogan'>Enhance your dining experience</p>
            <div className="login-form">
                <button onClick={ handleLogin } className="google-login-button">Sign In With Google</button>
            </div>
        </div>
        </AppProvider>
        
    );
}

export default Login;