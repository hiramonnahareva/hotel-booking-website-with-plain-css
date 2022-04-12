import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const SignInGoogle = () => {
    const navigate = useNavigate () ;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        navigate ('/') ;
      }
    return (
        <div>
      <button onClick={() => signInWithGoogle()}>Sign In</button>
        </div>
    );
};

export default SignInGoogle;