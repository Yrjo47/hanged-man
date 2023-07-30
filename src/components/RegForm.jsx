import React from 'react'
import styles from './RegForm.module.css'
import { useState } from 'react';

const RegForm = ({ isLoginForm, onSubmit }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Call the onSubmit function passed as a prop
      onSubmit({ username, password });
    };
  
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{isLoginForm ? 'Login' : 'Sign Up'}</h2>
        <div>
          <label>Username:</label>
          <input placeholder='Yrvo12' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input placeholder='qwerty123' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {!isLoginForm && (
            <div>
                <label>Confirm Password:</label>
                <input
                placeholder='qwerty123'
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
        )}
        <button type="submit">{isLoginForm ? 'Login' : 'Sign Up'}</button>
      </form>
    );
  };
  
  export default RegForm;