import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/Users";
import Select from "react-select";
import "./AddUsers.css";

function AddUsers() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [otherSkills, setOtherSkills] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState([]);
  const [skills, setSkills] = useState("");
  const [nameError, setNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [skillError, setSkillError] = useState("");
  const [addressError, setAddressError] = useState("");

  const roleOptions = [
    { value: "frontEndDeveloper", label: "Front end developer" },
    { value: "backEndDeveloper", label: "Back end developer" },
    { value: "devOps", label: "DevOps" },
    { value: "dataEngineer", label: "Data Engineer" },
  ];

  // const skillsOption = [
  //   { value: "reactJs", label: "ReactJs" },
  //   { value: "angular", label: "Angular" },
  //   { value: "dotNet", label: "Dot Net" },
  //   { value: "java", label: "Java" },
  //   { value: "nodeJs", label: "NodeJs" },
  //   { value: "aws", label: "AWS" },
  //   { value: "azure", label: "Azure" },

  // ]
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError("Please Enter Your Name*");
    } else if (dateOfBirth === "") {
      setDobError("Please Select a Date*");
    } else if (gender === "") {
      setGenderError("Select Your Gender*");
    } else if (role.length === 0) {
      setRoleError("Select a Role*");
    } else if (skills === "") {
      setSkillError("Select Skills*");
    } else if (address === "") {
      setAddressError("Please Enter Your Address*");
    } else {
      dispatch(
        addUser({
          id: userList[userList.length - 1].id + 1,
          name,
          dateOfBirth,
          gender,
          role: role.label,
          skills,
          otherSkills,
          address,
          comments,
        })
      );
    }
  };

  return (
    <div className="addUser">
      <div className="name-tag alignment-tag label-tag form-data">
        <label className="label-text">Enter Your Name*</label>
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
          }}
        />
        {nameError && (
          <p className="error-text">
            <small>{nameError}</small>
          </p>
        )}
      </div>
      <div className="common-row-class">
        <div className="date-tag alignment-tag label-tag form-data">
          <label className="label-text">Date of birth*</label>
          <input
            type="date"
            onChange={(e) => {
              setDateOfBirth(e.target.value);
              setDobError("");
            }}
          />
          {dobError && (
            <p className="error-text">
              <small>{dobError}</small>
            </p>
          )}
        </div>

        <div className="gender-tag alignment-tag label-tag form-data">
          <label className="label-text">Gender*</label>
          <div className="gender-radio-align">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => {
                setGender(e.target.value);
                setGenderError("");
              }}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => {
                setGender(e.target.value);
                setGenderError("");
              }}
            />{" "}
            Female
          </div>
          {genderError && (
            <p className="error-text">
              <small>{genderError}</small>
            </p>
          )}
        </div>
      </div>
      <div className="select-tag alignment-tag label-tag form-data">
        <label className="label-text">Role*</label>
        <Select
          options={roleOptions}
          defaultValue={role}
          onChange={(data) => {
            setRole(data);
            setRoleError("");
          }}
        />
        {roleError && (
          <p className="error-text">
            <small>{roleError}</small>
          </p>
        )}
      </div>
      <div className="skill-tag alignment-tag label-tag form-data">
        <label className="label-text">Skills*</label>
        <div>
          <div className="form-data">
            <input
              type="checkbox"
              id="reactJs"
              name="reactJs"
              value="reactJs"
              onChange={(e) => {
                setSkills(e.target.value);
                setSkillError("");
              }}
            />{" "}
            ReactJs
            <input
              type="checkbox"
              id="angular"
              name="angular"
              value="angular"
              onChange={(e) => {
                setSkills(e.target.value);
                setSkillError("");
              }}
            />{" "}
            Angular
            <input
              type="checkbox"
              id="dotNet"
              name="dotNet"
              value="dotNet"
              onChange={(e) => {
                setSkills(e.target.value);
                setSkillError("");
              }}
            />{" "}
            Dot Net
            <input
              type="checkbox"
              id="java"
              name="java"
              value="java"
              onChange={(e) => {
                setSkills(e.target.value);
                setSkillError("");
              }}
            />{" "}
            Java
          </div>
          <div className="form-data">
            <input
              type="checkbox"
              id="nodeJs"
              name="nodeJs"
              value="nodeJs"
              onChange={(e) => {
                setSkills(e.target.value);
                setSkillError("");
              }}
            />{" "}
            NodeJs
            <input
              type="checkbox"
              id="AWS"
              name="AWS"
              value="AWS"
              onChange={(e) => {
                setSkills(e.target.value);
                setSkillError("");
              }}
            />{" "}
            AWS
            <input
              type="checkbox"
              id="azure"
              name="azure"
              value="azure"
              onChange={(e) => {
                setSkills(e.target.value);
                setSkillError("");
              }}
            />{" "}
            Azure
          </div>
        </div>
        {skillError && (
          <p className="error-text">
            <small>{skillError}</small>
          </p>
        )}
      </div>
      <div className="common-row-class">
        <div className="other-skills alignment-tag label-tag form-data">
          <label className="label-text">Other Skills</label>
          <textarea
            placeholder="OtherSkils...."
            className="text-area"
            onChange={(e) => {
              setOtherSkills(e.target.value);
            }}
          />
        </div>
        <div className="address-tag alignment-tag label-tag form-data">
          <label className="label-text">Enter Your Address*</label>
          <textarea
            placeholder="Address"
            className="text-area"
            onChange={(e) => {
              setAddress(e.target.value);
              setAddressError("");
            }}
          />
          {addressError && (
            <p className="error-text">
              <small>{addressError}</small>
            </p>
          )}
        </div>
      </div>
      <div>
        <div className="comments-tag alignment-tag label-tag form-data">
          <label className="label-text">Comments</label>
          <textarea
            placeholder="Comments"
            className="text-area"
            onChange={(e) => {
              setComments(e.target.value);
            }}
          />
        </div>
        <div className="submit-btn">
          <button className="submit-btn-secondary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddUsers;
