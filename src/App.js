import { useEffect, useState } from 'react';
import './App.css';
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';

function App() {

//=============Create User...!==============
  const [users, setUsers] = useState([]);

  useEffect(() => {
    localStorage.setItem('data',JSON.stringify(users));
  }, [users]);  

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('users'))
  //   if(data)
  //   {
  //     setUsers(data);
  //   }
  // }, []);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    console.log("users===>", ...users);
}

//=============Update user...!=================
  const [editing, setEditing] = useState(false);
  const initialFormState = {id: null, name: "", email: "", password: ""}
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editUser = (user) => {
      setEditing(true);

      setCurrentUser({id: user.id, name: user.name, email: user.email, password: user.password});
  } 
 
  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  }
  
//==================Delete User....!===================
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <>  
      <div>
        {
          editing ? (
            <div>
              <h2>Update User</h2>
              <Update
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser} 
              />
            </div>
          ):(
            <div>
              <h2>Add User</h2>
              <Create addUser={addUser}/>
            </div>
          )}
          <div>
            <h2>View User</h2>
             <Read users={users} deleteUser={deleteUser} editUser={editUser} />
          </div>
      </div>
    </>
  );
}
export default App;