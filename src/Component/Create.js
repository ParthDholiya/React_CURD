import React, { useState } from "react";

const Create = (props) => {
  const initialFormState = { id: null, name: "", email: "", password: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    // console.log("user===>", user);
  };

  return (
    <div>
      <form
          onSubmit={(e) => {
          e.preventDefault();
          if (!user.name || !user.email || !user.password) 
          return alert("Please Enter All Fields...!");
          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <b>Name:</b>
        <input
          type="text"
          placeholder="Enter Name...!"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />

        <b>Email:</b>
        <input
          type="text"
          placeholder="Enter Email...!"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />

        <b>Password:</b>
        <input
            type="text"
            placeholder="Enter Password...!"
            name="password"
            value={user.password}
            onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Create;