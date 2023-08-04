import React, { useState } from 'react';

const Update = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (e) => {
    const {name, value}= e.target;
    setUser({...user, [name]: value});
  }
  return (
    <div>
      <form
          onSubmit={(event) => {
            event.preventDefault()
            if(!user.name || !user.email || !user.password)
            {
              return alert("Please Enter All Fields...!");
            }
            props.updateUser(user.id, user)
          }}
      >
        <b>Name:</b>
        <input
          type="text"
          name='name'
          value={user.name}
          onChange={handleInputChange}
        />

        <b>Email:</b>
        <input
          type="text"
          name='email'
          value={user.email}
          onChange={handleInputChange} 
        />

        <b>Password</b>
        <input
          type="text"
          name='password'
          value={user.password}
          onChange={handleInputChange} 
        />

        <button>Update User</button>
        <button onClick={() => props.setEditing(false)}>Cancel</button>
      </form>
    </div>
  )
}
export default Update;