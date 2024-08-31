import React, { useEffect, useState } from 'react';

interface Sales {
  serial: number;
  salesId: string;
  productName: string;
  quantity: number;
  salesAmount: number;
}
const salesdatafun = () => {
     const salesData: Sales[] = [
    { serial: 1, salesId: 'S001', productName: 'Product A', quantity: 10, salesAmount: 100 },
    { serial: 2, salesId: 'S002', productName: 'Product B', quantity: 5, salesAmount: 75 },
    { serial: 3, salesId: 'S003', productName: 'Product C', quantity: 8, salesAmount: 160 },
    { serial: 4, salesId: 'S004', productName: 'Product D', quantity: 3, salesAmount: 45 },
    // Additional rows can be added here
  ];
   return salesData
}

export const TotalAmount = () => {
    const data =salesdatafun();
    const Total = data.reduce((total,sales) => total + sales.salesAmount ,0)
    return Total;
}

const TopSales: React.FC = () => {
 const [SalesData, setSalesData] = useState<any>()
  
 useEffect(() => {
    fetch('http://localhost:5000/API/totalSales', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }   
  }).then((response) => { 
    return response.json()
   })
  .then(  (data) => { 
    console.log(data,'data');
     setSalesData(data.data)
   }
     
  )
 
   
 }, [])
 

  return (
    <div className="container mt-5">
      <h2>Top 5 Sales</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Serial</th>
            <th scope="col">Sales ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sales Amount</th>
          </tr>
        </thead>
        <tbody>
          {SalesData  &&  SalesData.map((sale:any,index:any) => (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{sale.SalesId}</td>
              <td>{sale.ProductName}</td>
              <td>{sale.quantity}</td>
              <td>${sale.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSales;
