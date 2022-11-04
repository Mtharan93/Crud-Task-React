import "./App.css";
import AddUsers from "./Components/AddUsers";
import UserLists from "./Components/UsersLists";

function App() {

  return (
    <div className="App">
      {/* <h1>User Details</h1> */}
      <AddUsers />
      <UserLists />
    </div>
  );
}

export default App;
