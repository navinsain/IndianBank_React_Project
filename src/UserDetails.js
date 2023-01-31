import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function UserDetails() {
  const classes = useStyles();

  const [users, setUsers] = useState([],[]);
  
  useEffect(() => {
    UsersGet()
  }, [])
 // https://www.mecallapi.com/api/users
  const UsersGet = () => {
    debugger;
    axios.post("http://localhost:8190/CobaSysM3/rest/AccInfoService/getEmpData").then(res=>{
      console.log(res.data)
      setUsers(res?.data?.Data)
    })

      // .then(res => res.json())     
      // .then(  
      //   (result) => {
      //     console.log
      //     setUsers(result)
      //   }
      // )
  }

  const UpdateUser = Emp_kid => {
    window.location = '/update_user/'+Emp_kid
  }
  const Gettranch = Brncode => {
    window.location = '/ExpenseVoucher/'+Brncode
  }

  const UserDelete = Emp_kid => {
    var data = {
      'Emp_kid': Emp_kid
    }
    fetch('http://localhost:8190/CobaSysM3/rest/AccInfoService/deleteEmpData', {
      method: '',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          UsersGet();
        }
      }
    )
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
               <center>USERS DETAILS</center> 
              </Typography>
            </Box>
            <Box>
              <Link to="/Create_user">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Emp_name</TableCell>
                <TableCell align="center">Emp_city</TableCell>
                <TableCell align="left">Emp_email</TableCell>
                <TableCell align="left">Emp_designation</TableCell>
                <TableCell align="left">Emp_code</TableCell>
                <TableCell align="left">Emp_kid</TableCell>
                <TableCell align="left">Brncode</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow  key={user.Emp_kid}>
                  {/* <TableCell align="right">{user.Emp_kid}</TableCell> */}
                  {/* <TableCell align="center">
                    <Box display="flex" justifyContent="center">
                      <Avatar src={user.avatar} />
                    </Box>
                  </TableCell> */}
                  <TableCell align="left">{user.Emp_name}</TableCell>
                  <TableCell align="left">{user.Emp_city}</TableCell>
                  <TableCell align="left">{user.Emp_email}</TableCell>
                  <TableCell align="left">{user.Emp_designation}</TableCell>
                  <TableCell align="left">{user.Emp_code}</TableCell>
                  <TableCell align="left">{user.Emp_kid}</TableCell>  
                   <TableCell align="left">{user.Brncode}</TableCell>   
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UpdateUser(user.Emp_kid)}>Edit</Button>
                      <Button onClick={() => UserDelete(user.Emp_kid)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>


            <TableBody>
              {users.map((user) => (
                <TableRow  key={user.Brncode}>
                 
                 
                   <TableCell align="left">{user.Brncode}</TableCell>   
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => Gettranch(user.Brncode)}>Tranche</Button>
                     
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>      
        </Paper>
      </Container>
    </div>
    
  );
}