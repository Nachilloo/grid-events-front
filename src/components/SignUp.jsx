import { useState } from "react";
import { signUp } from "../services/authService";
import { Navigate } from "react-router-dom";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = async () => {
    const formData = {
      name,
      email,
      password,
    };

    const result = await signUp(formData);
    Navigate("/profile");
    console.log(result);
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Crea una cuenta</h1>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Password"
        />
        <button onClick={handleOnSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
