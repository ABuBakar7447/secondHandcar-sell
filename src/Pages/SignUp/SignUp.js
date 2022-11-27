import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const [value, setValue]=useState('User')
    const {createUser, providerGoogleLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    

    const handleSignUp= event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(value)
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset('');
            
        })
        .catch(error =>console.error(error));

    }

    const handleGoogleSignIn = () =>{
        providerGoogleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="hero">
            <div className="hero-content w-3/5 flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-4xl text-center font-bold">Please Sign In</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required/>
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>


                    
                    <label className="block text-sm font-medium text-blue-700">How do you want to signin as?choose below</label>
                    <div className="mt-1">
                        <select className='font-bold p-2 rounded border-2 border-indigo-600' value={value} onChange={e=>setValue(e.target.value)} name="companysize" id="company-size" required>
                        <option >User</option>
                        <option>Seller</option>
                        </select>
                    </div>
                    



                    
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Sign Up" />
                    </div>
                </form>
                <div className='mx-auto mb-5'>
                    <button onClick={handleGoogleSignIn} className='btn'>SignIn By Google</button>
                </div>

                
                
                <p className='text-center'>If you have an account, then <Link className='underline font-bold text-red-700' to='/login'>Log In.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;