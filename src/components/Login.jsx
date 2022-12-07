import { Button } from "./Button";
import { FormInput } from "./FormInput";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const LoginForm = ({ setCurrentUser }) => {
  const [ formData, setFormData ] = useState({
    email: "",
    password: ""
  });

  const history = useHistory();

  const { email, password } = formData;

  const handleChange = (event) => {
    const { email, value } = event.target;

    setFormData({ ...formData, [email]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then( (resp) => {
      if (resp.ok) {
        resp.json().then( (user) => {
          setCurrentUser(user);
          history.push("/");
        });
      } else {
        resp.json().then( (json) => {
          alert(json.errors)
        });
      }
    });
  };

  return (
    <SignInContainer>
      <form className="form" onSubmit={ handleSubmit }>
        <h1>Welcome back!</h1>
        <span>Login to continue</span>
        <FormInput
        label="Email"
        type="text"
        required
        onChange={ handleChange }
        name="email"
        value={ username }
        />

        <FormInput
        label="Password"
        type="password"
        required
        onChange={ handleChange }
        name="password"
        value={ password }
        />
        <Button type="submit">Login</Button>
      </form>
    </SignInContainer>
  );
};

export default LoginForm;