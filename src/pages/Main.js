import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../redux/thunk/appThunk";

const Main = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.app);
  const { userList } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(userList);
    dispatch(getUserList());
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {loading
          ? "Loading"
          : userList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
      </tbody>
    </Table>
  );
};

export default Main;
