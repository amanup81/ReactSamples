import logo from './logo.svg';
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("url").then((result) => {
      result.json().then((response) => {
        // console.log("result", response)
        setData(response)
      })
    })
  }, [])
  console.log(data);
  return (
    <div className='App'>
      <h1>API Call</h1>
      <table border="2px">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
          </tr>
          {
            data.map((item) => {
              <tr>
                <td>{item.userId}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
              </tr>
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
