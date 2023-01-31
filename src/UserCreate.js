import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios";
import md5 from "md5";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '70%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
  },
}));


export default function UserCreate() {
  const classes = useStyles();
  
  const handleSubmit = event => {
    
// document.getElementById('password').value=convertMD5(password);
    console.warn({Emp_name, Emp_city, Emp_email,Emp_designation,Emp_code, password , Brncode});
    debugger;
    event.preventDefault();
    var data = {
      'Emp_name': Emp_name,
      'Emp_city': Emp_city,
      'Emp_email': Emp_email,
      'Emp_designation': Emp_designation,
      'Emp_code': Emp_code,
      'password': md5(password),
      'Brncode': Brncode,
    }
    
    // let data = {Emp_name, Emp_city, Emp_email,Emp_designation,Emp_code}
  fetch("http://localhost:8190/CobaSysM3/rest/AccInfoService/createEmpData",{
    method:'POST',
    heafetchders:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn("resp",resp)
     if(resp!= null){
      alert("User Created");
      window.location.href = '/User_Details';
     }
     else{
      alert("User not created");
     }
    })
   
  })
  setName("");
  setCity("");
  setEmail("");
  setDesignation("");
  setCode("");
  setPassword("");
  setBrncode("");
  }
 
  const convertMD5 = (inputText) => {
    let encodedVal = md5(inputText);
    // setText(encodedVal);
    return encodedVal;
  };
  /*
   function saveUser() {
    debugger;
    // console.warn({Emp_name, Emp_city, Emp_email,Emp_designation,Emp_code  });
    let data = { Emp_name, Emp_city, Emp_email,Emp_designation,Emp_code }
     axios('http://localhost:8190/CobaSysM3/rest/AccInfoService/reactapi', {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data) 
     }).then((result) => {
        //   console.warn("result",result);
        result.json().then((resp) => {
           console.warn("resp", resp)
        })
     })
    }

  */

  const [Emp_name, setName] = useState("");
  const [Emp_city, setCity] = useState("");
  const [Emp_email, setEmail] = useState("");
  const [Emp_designation, setDesignation] = useState("");
  const [Emp_code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [Brncode, setBrncode] = useState("");
  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          USERS CREATE
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Emp_name"
                name="Emp_Name"
                variant="outlined"
                required
                fullWidth
                id="Emp_Name"
                label="Emp_name"
                value={Emp_name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Emp_city"
                label="Emp_city"
                value={Emp_city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Emp_email"
                label="Emp_email"
                value={Emp_email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Emp_Designation"
                label="Emp_Designation"
                value={Emp_designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Emp_code"
                label="Emp_code"
                value={Emp_code }
                onChange={(e) => setCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type ="password"
                id="password"
                label="password"
                value={password }
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type ="text"
                id="brncode"
                label="brncode"
                value={Brncode }
                onChange={(e) => setBrncode(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create 
          </Button>
        </form>
      </div>  
    </Container>
  );
}