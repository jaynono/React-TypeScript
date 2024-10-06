import React, { useState } from 'react';
import axios from 'axios';  
import './LoginRegister.css';

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', registerData);
      setMessage(res.data.msg); // Show success message
    } catch (err: any) {
      setMessage(err.response.data.msg); // Show error message
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Register;
