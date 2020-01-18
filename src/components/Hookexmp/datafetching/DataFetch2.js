import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/estilos.css";
import UserInfo from "./UserInfo";

export default function DataFetch2() {
  const [users, setUsers] = useState([]);
  const [idUser, setIduser] = useState(1);

  useEffect(() => {
    if (users.length === 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          setUsers(res.data);
        })
        .catch(err => console.log(err));
    } else {
    }
    //eslint-disable-next-line
  }, [idUser]);

  return (
    <div className='MiCuadro MiTema2'>
      <h2>Data Fetching 2</h2>
      <p>Selecciona un usario para ver su información</p>
      <select onChange={e => setIduser(e.target.value)}>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>
      <div>
        <UserInfo idInicial={idUser} />
      </div>
    </div>
  );
}
