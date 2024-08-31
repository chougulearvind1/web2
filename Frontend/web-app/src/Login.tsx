import React, { useState } from 'react'

const Login:React.FC = () => {
  const [FormData, setFormData] = useState({email:'',password:''})

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name ,value}=e.target;
    setFormData({...FormData,[name]:value.trim()})

  }
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/API/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Registration successful!
        alert('Logged sucessfully')
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
    return (
        <div className="container mt-5">
          <h2>Login</h2>
          <form style={{textAlign:'justify'}} onSubmit={handleSubmit}>
           
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={FormData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary form-control ">Login</button>
          </form>
        </div>
      );
}

export default Login