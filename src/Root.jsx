import React, { useState, useEffect } from "react";
import "./Root.css";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import { Read } from "./components/read";
import { Edit } from "./components/edit";

export const Root = () => {
  const [editContactId, setEditContactId] = useState(null);
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  //add change
  const handleAddFormChange = (e) => {
    e.preventDefault();
    const InputName = e.target.getAttribute('name');
    const InputValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[InputName] = InputValue;
    setAddFormData(newFormData);
  };

  //add submit
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const FreshUser = { 
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, FreshUser];
    setContacts(newContacts);
  };

  //Edit click
  const handleEditClick = (e, contact, id) => {
    e.preventDefault();

    setEditContactId(id);
    console.log(id, "idd");

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  //Edit change
  const handleEditFormChange = (e) => {
    e.preventDefault();
    const InputName = e.target.getAttribute('name');
    const InputValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[InputName] = InputValue;
    setEditFormData(newFormData);
  };

  //Edit Submit
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const EditedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    // const newContacts = [...contacts];
    // console.log(newContacts, "f");

    // const index = contacts.findIndex((contact) => contact.id === editContactId);
    // // console.log(index, 'index');
    // newContacts[index] = EditedContact;

    const newContacts = contacts.map(contact => {
      if(contact.id === editContactId){
        contact = EditedContact
        return contact
      } else {
        return contact
      }
    })

    setContacts(newContacts);
    setEditContactId(null);
  };

  // cancel
  const Cancel = () => {
    setEditContactId(null);
  };

  //Delete
  const handleDeleteClick = (id) => {
    // let Deleted = contacts.filter(value => value.id !== id)
    // setContacts(Deleted);

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === id);
    newContacts.splice(index, 1);

    setContacts(newContacts)
  };

  return (
    <div className="app-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              // console.log(contact.id, 'e');
              return editContactId === contact.id ? (
                <Edit
                  key={contact.id}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleEditFormSubmit={handleEditFormSubmit}
                  Cancel={Cancel}
                />
              ) : (
                <Read
                  key={contact.id}
                  handleEditClick={handleEditClick}
                  contact={contact}
                  handleDeleteClick={handleDeleteClick}
                />
              );
            })}
          </tbody>
        </table>
      </form>

      <h2>Add user</h2>
      <form >
        <input
          type="text"
          name="fullName"
          placeholder="Enter a name "
          required
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter a address "
          required
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter phone number"
          required
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter an email "
          required
          onChange={handleAddFormChange}
        />
        <button onClick={handleAddFormSubmit}>Add User</button>
      </form>
    </div>
  );
};
