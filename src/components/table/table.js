import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function EmployeeTable({ employees }) {
  
    const classes = useStyles();

  const empList = employees.map((employee, index) => {
    const empObj = {};
    empObj.firstName = employee.name.first;
    empObj.lastName = employee.name.last;
    empObj.email = employee.email;
    empObj.username = employee.login.username;
    empObj.phoneNumber = employee.phone;
    empObj.age = employee.dob.age;
    return empObj;
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {empList.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.phoneNumber}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
