import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/estilos.css";

function UserInfo(props) {
  const { idInicial } = props;
  // const [id, setId] = useState(idInicial)
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${idInicial}`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err));
  }, [idInicial]);

  return (
    <div className='MiFlexContainer'>
      <div className='MiCuadroSmall'>
        <h3>{user.name}</h3>
      </div>
      <div className='MiCuadroSmall'>
        <h3>{user.email}</h3>
      </div>
      <div className='MiCuadroSmall'>
        <h3>{user.username}</h3>
      </div>
    </div>
  );
}

export default UserInfo;
