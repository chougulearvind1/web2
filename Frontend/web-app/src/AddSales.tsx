import React, { useState } from 'react'

const AddSales:React.FC = () => {
  const [FormData, setFormData] = useState({
    productName:'',
    quantity:'',
    Amount:''
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name ,value}=e.target;
    setFormData({...FormData,[name]:value})

  }
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/API/AddSales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Registration successful!
        alert('Registerd sucessfully')
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

    return (
        <div className="container mt-5">
          <h2>Add Sales Entry</h2>
          <form style={{textAlign:'justify'}} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                name="productName"
                value={FormData.productName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">quantity</label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                name="quantity"
                value={FormData.quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Amount" className="form-label">Amount</label>
              <input
                type="text"
                className="form-control"
                id="Amount"
                name="Amount"
                value={FormData.Amount}
                onChange={handleChange}
                required
              />
            </div>
          
            <button type="submit" className="btn btn-primary form-control ">Add Sales</button>
          </form>
        </div>
      );
}

export default AddSales