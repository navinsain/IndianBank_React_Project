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


export default function Login() {
  const classes = useStyles();
  
  const handleSubmit = event => {
    
// document.getElementById('password').value=convertMD5(password);
    console.warn({Emp_code, password });
    debugger;
    event.preventDefault();
    var data = {
     
      'Emp_code': Emp_code,
      'password': md5(password),
      'Brncode': Brncode,
    }
    
    // let data = {Emp_name, Emp_city, Emp_email,Emp_designation,Emp_code}
  fetch("http://localhost:8190/CobaSysM3/rest/AccInfoService/logindata",{
    method:'POST',
    heafetchders:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn("resp",resp)
     if(resp.result=="success"){
      alert("User Login successfully ");
	  window.location.href = '/Sidebar';
     } 
     else{
      alert("User Not Exit please Create User");
     }
    })
     
  })
 
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

  
  const [Emp_code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [Brncode, setBrncode] = useState("");
  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          USER LOGIN
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
           
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Emp_code"
                label="Emp_code"
                value={Emp_code}
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
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
}

























































// import React, {useState,setState} from 'react';
// import '../style.css'
// function RegistrationForm() {
    
//     const [firstName, setFirstName] = useState(null);
//     const [lastName, setLastName] = useState(null);
//     const [email, setEmail] = useState(null);
//     const [password,setPassword] = useState(null);
//     const [confirmPassword,setConfirmPassword] = useState(null);

//     const handleInputChange = (e) => {
//         const {id , value} = e.target;
//         if(id === "firstName"){
//             setFirstName(value);
//         }
//         if(id === "lastName"){
//             setLastName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
//         if(id === "password"){
//             setPassword(value);
//         }
//         if(id === "confirmPassword"){
//             setConfirmPassword(value);
//         }

//     }

//     const handleSubmit  = () => {
//         console.log(firstName,lastName,email,password,confirmPassword);
//     }

//     return(
//         <div className="form">
//             <div className="form-body">
//                 <div className="username">
//                     <label className="form__label" for="firstName">First Name </label>
//                     <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
//                 </div>
//                 <div className="lastname">
//                     <label className="form__label" for="lastName">Last Name </label>
//                     <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
//                 </div>
//                 <div className="email">
//                     <label className="form__label" for="email">Email </label>
//                     <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
//                 </div>
//                 <div className="password">
//                     <label className="form__label" for="password">Password </label>
//                     <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
//                 </div>
//                 <div className="confirm-password">
//                     <label className="form__label" for="confirmPassword">Confirm Password </label>
//                     <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
//                 </div>
//             </div>
//             <div class="footer">
//                 <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
//             </div>
//         </div>
       
//     )       
// }

// export default RegistrationForm


// import { useState } from 'react';
// import md5 from "md5";
// import  './style.css'
// // import axios from '../api/axios';

// export default function Login() {

// // States for registration
// const [Emp_code, setEmp_code] = useState('');
// const [password, setPassword] = useState('');


// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);


// const validation = () => {
//   debugger;
//     if (Emp_code == "") {
//       alert("Please enter your name");
//     } 
    
       
//       else if (password !== "") {
       
//         if (password == "") {
//             alert("invalid password");
//           }
//       } 

//        else {
//         handleSubmit();
//       }
  
//   };

// // Handling the name change
// const handleName = (e) => {
// 	setEmp_code(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the email change


// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = () => {
//   debugger;
//   debugger;

//   var myHeaders = new Headers();
// myHeaders.append('Accept','application/json',
// 'Content-Type','application/json');

// var raw = {"Emp_code": Emp_code ,"password": md5(password)};

// var requestOptions = {
// method: 'POST',
// headers: myHeaders,
// body:  JSON.stringify(raw),
// redirect: 'follow'
// };

// fetch("http://localhost:8190/CobaSysM3/rest/AccInfoService/logindata", requestOptions)
// .then(res=>{
//  window.location.href = '/Sidebar';
// })
     
//   };

// // Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User {Emp_code} successfully registered!!</h1>
// 	</div>
// 	);
// }; 

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };

// return (
//     <center>
// 	<div className="form">
// 	<div>
// 		<h1>User Registration</h1>
// 	</div>

// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// <form>
// 		{/* Labels and inputs for form data */}
// 		<label className="label">Name</label>
// 		<input onChange={handleName} className="input"
//         placeholder='Enter Emp_code'
// 		value={Emp_code} type="text" />

// 		<label className="label">Email</label>
// 		<input onChange={handlePassword} className="input"
//          placeholder='Enter password'
// 		value={password} type="password" />

// 		{/* <label className="label">Password</label>
// 		<input onChange={handlePassword} className="input"
//          placeholder='Enter password'
// 		value={password} type="password" /> */}

// 		<button onClick={handleSubmit} className="btn" type="submit">
// 		Submit
// 		</button>
// 	</form>

	
// 	</div>
//     </center>
// );
// }
