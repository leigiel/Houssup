import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../Firebase/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase.config'; // Correct import

const Login = () => {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function checkRedirectResult() {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          toast.success('Google login successful');
          navigate('/');
        }
      } catch (error) {
        if (error.code !== 'auth/redirect-cancelled-by-user') {
          toast.error('Google login failed: ' + error.message);
        }
      }
    }
    checkRedirectResult();
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      toast.success('Logged in successfully');
      navigate('/');
    } catch (error) {
      toast.error('Login failed: ' + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {
      toast.error('Google login failed: ' + error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await githubLogin();
      toast.success('GitHub login successful');
      navigate('/');
    } catch (error) {
      toast.error('GitHub login failed: ' + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-6">
          <div id="google-signin-button" className="w-full mb-4"></div>
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-900 mb-4"
          >
            Login with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-900 mb-4"
          >
            Login with Github
          </button>
        </div>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/register" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
