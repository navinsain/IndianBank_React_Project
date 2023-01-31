import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import axios from "axios";

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UpdateUser() {
debugger;
  const classes = useStyles(); 

  const {Emp_kid} = useParams();
  
  useEffect(() => {
debugger;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var raw = {"Emp_kid": Emp_kid,    };

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify(raw),
  redirect: 'follow'
};

fetch("http://localhost:8190/CobaSysM3/rest/AccInfoService/fetchEmpData", requestOptions)
  .then(response => response.json())
  //.then(result => console.log(result))
  .then((result)=>{
      debugger;
      result.Data.map((resp)=>{
        // console.warn("resp",resp)
        setEmp_name(resp.Emp_name)
          setEmp_city(resp.Emp_city)
          setEmp_email(resp.Emp_email)
          setEmp_designation(resp.Emp_designation)
      })})     
  .catch(error => console.log('error', error));
    // var data = {
    //   "Emp_kid": Emp_kid,
    // };
    
    // axios.post("http://localhost:8190/CobaSysM3/rest/AccInfoService/fetchEmpData",{
     
    //  // method:'POST',
    //   heafetchders:{
    //     'Accept':'application/json',
    //     'Content-Type':'application/json'
    //   },
    //   body:JSON.stringify(data)
      
    // }).then((result)=>{
    //   debugger;
    //   data.json().then((resp)=>{
    //     console.warn("resp",resp)
    //     setEmp_name(result.user.Emp_name)
    //       setEmp_city(result.user.Emp_city)
    //       setEmp_email(result.user.Emp_email)
    //       setEmp_designation(result.user.Emp_designation)
    //   }) ;    
      
    
     
    // })
    // axios.post("http://localhost:8190/CobaSysM3/rest/AccInfoService/fetchEmpData")
    //   .then(res => res.json())
      
    //   .then(
    //     (result) => {
    //       setEmp_name(result.user.Emp_name)
    //       setEmp_city(result.user.Emp_city)
    //       setEmp_email(result.user.Emp_email)
    //       setEmp_designation(result.user.Emp_designation)
          
    //       // setAvatar(result.user.Emp_code)
    //     }
    //   )
  }, [Emp_kid])

  const handleSubmit = event => {
    debugger;

    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");

var raw = {"Emp_kid": Emp_kid , "Emp_name":Emp_name,"Emp_city":Emp_city, "Emp_email":Emp_email,"Emp_designation":Emp_designation };

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body:  JSON.stringify(raw),
  redirect: 'follow'
};

fetch("http://localhost:8190/CobaSysM3/rest/AccInfoService/updateEmpdata", requestOptions)
.then(res=>{
  window.location.href = '/User_Details';
})
    // event.preventDefault();
    // var data = {
    //   'Emp_kid': Emp_kid,
    //   'Emp_name': Emp_name,
    //   'Emp_city': Emp_city,
    //   'Emp_email': Emp_email,
    //   'Emp_designation': Emp_designation,
    //   // 'Emp_code': Emp_code,
    // }
    //  fetch('http://localhost:8190/CobaSysM3/rest/AccInfoService/updateEmpdata', {
    //   method: 'POST',
    //   headers: {
    //     'Accept':'application/json',
    //   'Content-Type':'application/json'
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     alert(result['message'])
    //     if (result['status'] === 'ok') {
    //       window.location.href = '/User_Details';
    //     }
    //   }
    // )

  //    fetch("http://localhost:8190/CobaSysM3/rest/AccInfoService/updateEmpdata",{
  //   method:'POST',
  //   heafetchders:{
  //     'Accept':'application/json',
  //     'Content-Type':'application/json'
  //   },
  //   body:JSON.stringify(data)
  // }).then((result)=>{
  //   result.json().then((resp)=>{
  //     console.warn("resp",resp)
  //     window.location.href = '/User_Details';
  //    if(resp!= null){
  //     alert("User Created");
  //    }
  //    else{
  //     alert("User not created");
  //    }
  //   })
   
  // })
    // axios.post('http://localhost:8190/CobaSysM3/rest/AccInfoService/updateEmpdata', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/form-data',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     alert(result['message'])
    //     if (result['status'] === 'ok') {
    //       window.location.href = '/User_Details';
    //     }
    //   }
    // )
  }

  const [Emp_name, setEmp_name] = useState('');
  const [Emp_city, setEmp_city] = useState('');
  const [Emp_email, setEmp_email] = useState('');
  const [Emp_designation, setEmp_designation] = useState('');
  // const [Emp_code, setAvatar] = useState('');

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          UPDATE USER
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Employee Name"
                value={Emp_name}
                
                onChange={(e) => setEmp_name(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Employee City"
                value={Emp_city}
                onChange={(e) => setEmp_city(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Emplyee Email"
                value={Emp_email}
                onChange={(e) => setEmp_email(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Employee Designation"
                value={Emp_designation}
                onChange={(e) => setEmp_designation(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="avatar"
                label="Employee Code "
                value={Emp_code}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}

// export const EventsOne = () => {
// return (
// 	<div className="events">
// 	<h1>GeeksforGeeks Event1</h1>
// 	</div>
// );
// };

// export const EventsTwo = () => {
// return (
// 	<div className="events">
// 	<h1>GeeksforGeeks Event2</h1>
// 	</div>
// );
// };
