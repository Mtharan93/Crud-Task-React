import { useState } from "react";
import { faUserPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../features/Users";
import "./UsersLists.css";

function UserLists() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [newName, setNewName] = useState("");
  const [show, setShow] = useState(false);
  const [clickedUser, setClickedUser] = useState(0)

  function changeIsReply(id){
    setClickedUser(id)
    setShow(!show)
  } 

  const capitalizeFirst = (str) =>
    str.charAt(0).toUpperCase() +
    str
      .slice(1)
      .replace(/([A-Z])/g, " $1")
      .trim();

  return (
    <div className="displayUsers">
      {userList.map((user) => {
        return (
          <div className="main-layout">
            <div className="title-card">
              <h1> {capitalizeFirst(user.name)}</h1>
              <div>
                <FontAwesomeIcon
                  icon={faUserPen}
                  className="icon-modify-user"
                  onClick={() => {
                    setShow(true);
                    changeIsReply(user.id)
                  }}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon-modify-trash"
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                />
              </div>
            </div>

            <p>
              {" "}
              {user.dateOfBirth}, {capitalizeFirst(user.gender)}{" "}
            </p>
            <p> {user.role}</p>
            <p> {capitalizeFirst(user.skills)}</p>
            <p> {capitalizeFirst(user.otherSkills)}</p>
            <p> {capitalizeFirst(user.address)}</p>
            <p> {user.comments}</p>
            {show && clickedUser == user.id ? (
              <div>
                <input
                  type="text"
                  placeholder="New Name..."
                  onChange={(e) => {
                    setNewName(e.target.value);
                  }}
                />
                <button
                  className="submit-btn-secondary"
                  onClick={() => {
                    dispatch(
                      updateUser({
                        id: user.id,
                        name: newName,
                      })
                    );
                    setShow(false);
                  }}
                >
                  Submit
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
export default UserLists;
