import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = {
      email,
      password,
    };
    console.log(formData)
    const result = await login(formData);
    //navigate("/profile");
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit} className="formSign">
        <h1>Sign in</h1>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <a href="#">Olvidastes tu contraseña?</a>
        <button onClick={handleSubmit} className="button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
