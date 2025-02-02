
import { AuthProvider } from '../Firebase/AuthContext'; 
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className='font-Inter'>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;
