import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, deleteUser } from "../rtk/Slice/Person-operation";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const users = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(users);

  return (
    <Container className="py-5">
      <h1>Welcome Users</h1>
      <Button
        variant="primary"
        className="m-2"
        onClick={() => dispatch(clearAll())}
      >
        Clear All
      </Button>
      <Link
        to="create"
        className="m-2 w-full btn btn-Success  bg-success c-light"
      >
        Create User
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="danger"
                  className="m-3"
                  onClick={() => dispatch(deleteUser(user))}
                >
                  Delete
                </Button>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-primary "
                  variant="success"
                  onClick={() => {
                    navigate("/create");
                  }}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
