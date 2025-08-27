import React, { useState } from 'react'
import './Adlog.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Config/Config';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

export default function Adlog() {
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [loading, setLoading] = useState(false);
 const navigate = useNavigate(); 
    const handleSubmit =async (e)=>{
        e.preventDefault();
        setLoading(true);
const auth = getAuth(app);
 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setLoading(false);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    setLoading(false);
  }); 
   }
  return (
     <div class=" d1">
        {loading? <Spinner />: 
   <form class="form" action="" onSubmit={handleSubmit}>
      <h1 className="head">Login Here</h1>
      <p className="p">Don't have an account? <a className="sign"onClick={()=>{navigate("/reg")
          }}>Sign Up</a></p>
      <input className='input mail' onChange={(e)=>setemail(e.target.value)} required type="email" placeholder='Username' /><br /><br />
      <input className='input' onChange={(e)=>setpassword(e.target.value)} required type="password"placeholder='Email' /><br /><br />
      <button onClick={()=>{navigate("/")
          }}id='btn'type='submit'>Login</button><br />
          
      </form>
      }
    </div>
  )
}
