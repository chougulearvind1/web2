import React, { useState } from 'react'



const Register:React.FC = () => {

  const [FormData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name ,value}=e.target;
    setFormData({...FormData,[name]:value})

  }
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/API/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Registration successful!
        alert('Register sucessfully')
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
    return (
        <div className="container mt-5">
          <h2>Register</h2>
          <form style={{textAlign:'justify'}} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={FormData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={FormData.lastName}
                onChange={handleChange}
                required
              />
            </div>
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
            <button type="submit" className="btn btn-primary form-control ">Register</button>
          </form>
        </div>
      );
}

export default Register