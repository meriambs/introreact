import React from 'react';
import { Table } from 'react-bootstrap';

const user = {
  name: 'John',
  lastName: 'Doe',
  age: 40,
  email: 'johnDoe@mail.com',
};

const FourthComponent = () => {
  return (
    <div>
      {/*      <img src="/logoInPublic.png" alt="logo" />
      <img src={logo} alt="logo1" /> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FourthComponent;
