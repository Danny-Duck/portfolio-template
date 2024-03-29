import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

// styled components
const ConnectCont = styled.div`
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
      width: 400,
      [theme.breakpoints.down("xs")]: {
        width: 300,
      },
    },
  },
}));

export default function Connect() {
  const classes = useStyles();
  // PRODUCTION
  // const { register, handleSubmit } = useForm();
  const { register } = useForm();

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // PRODUCTION
    // add post requests
    console.log(JSON.stringify(values));
    if (window.confirm("Success")) {
    }
  };

  return (
    <ConnectCont>
      <Form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          name="name"
          error={false}
          onChange={handleChange}
          id="outlined-error"
          label="Name"
          variant="outlined"
          inputRef={register}
          required
          autoFocus={true}
        />
        <TextField
          name="email"
          error={false}
          onChange={handleChange}
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          className={classes.ta}
          onChange={handleChange}
          id="outlined-error-helper-text"
          name="message"
          label="Message"
          variant="outlined"
          multiline={true}
          rows={4}
          withStyles
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Form>
    </ConnectCont>
  );
}
