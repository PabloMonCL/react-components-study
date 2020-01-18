import React, { useState, useEffect } from "react";
//se debe instalar axios utilizando npm i axios
//axios permite hacer llamatos html como get post put etc
import axios from "axios";
import "../css/estilos.css";

export default function Datafetchinghook() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log(res);
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='MiCuadro MiTema1'>
      <h2>DataFetching</h2>
      <p>
        Estos Ususarios son extraidos de{" "}
        <a href='https://jsonplaceholder.typicode.com/users'>
          jsonplaceholder.com
        </a>
      </p>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
