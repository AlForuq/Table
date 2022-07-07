import React from "react";

export const Read = ({ contact, handleEditClick, handleDeleteClick }) => {
  // console.log(contact.id, 'inread');
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          onClick={(event) => handleEditClick(event, contact, contact.id)}
        >
          Edit
        </button>
        <button
          onClick={(event) => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
