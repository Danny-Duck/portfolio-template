import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// styled components
const LoginCont = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// material ui
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300,
      [theme.breakpoints.down("xs")]: {
        width: 300,
      },
    },
  },
}));


export default function Login() {
  const history = useHistory();
  const classes = useStyles();
  // PRODUCTION
  // const { register, handleSubmit } = useForm();
  const { register } = useForm();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ auth: values }),
    };
    const response = await fetch("http://127.0.0.1:3000/login", reqOptions);
    if (response.status >= 400) {
      throw new Error("incorrect credentials");
    } else {
      const { jwt } = await response.json();
      localStorage.setItem("token", jwt);
      console.log(localStorage.getItem("token"));
      history.push("/home");
    }
  };

  return (
    <LoginCont>
      <Form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          name="email"
          error={false}
          onChange={handleChange}
          id="outlined-error"
          label="Email"
          variant="outlined"
          inputRef={register}
          required
          autoFocus={true}
        />
        <TextField
          name="password"
          error={false}
          onChange={handleChange}
          label="Password"
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Form>
    </LoginCont>
  );
}
