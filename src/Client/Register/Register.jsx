import React, { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "./Register.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Alert, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {db} from "../../Config/Config"
import { addDoc, collection } from 'firebase/firestore';
export default function Register() {
    const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      navigate('/login');
    }, 3000);
};
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className="outer">
     <div class="register-container">
        <div class="register-card">
 
            <div class="register-header">
                <div class="register-icon">
                    <i class="material-icons custom-icon"><PersonAddIcon fontSize='large'/></i>
                </div>
                <h1>Create Account</h1>
                <p>Fill in your details to get started</p>
            </div>
             <form id="register-form">
                <div class="form-group">
                    <label class="form-label" for="name">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        class="form-input" 
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                 <div class="form-group">
                    <label class="form-label" for="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        class="form-input" 
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                   <div class="form-group">
                    <label class="form-label" for="address">Address</label>
                    <textarea 
                        id="address" 
                        class="form-input textarea" 
                        placeholder="Include street, city, state"
                        required
                    ></textarea>
                   
                </div>
                 <div class="form-group">
                    <label class="form-label" for="role">Role</label>
                    <select id="role" class="form-select" required>
                        <option value="">Select your role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                 <button type="submit" class="register-button" id="submit-button">
                    Create Account
                </button>
                {/* <Alert icon={<CheckCircleIcon/>} severity="success">
                     Account created successfully! Redirecting to login page...
                </Alert> */}
            </form>
            <Snackbar 
            open={showAlert} 
            autoHideDuration={3000}
            onClose={handleCloseAlert}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert 
              icon={<CheckCircleIcon />} 
              severity="success"
              onClose={handleCloseAlert}
              sx={{ width: '100%' }}
            >
              Account created successfully! Redirecting to login page...
            </Alert>
          </Snackbar>
            <div class="login-link">
                Already have an account? <a href="/login">Sign in here</a>
            </div>
        </div>
    </div>
    </div>
  )
}
