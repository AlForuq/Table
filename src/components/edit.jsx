import React from "react";

export const Edit = ({
  handleEditFormSubmit,
  Cancel,
  editFormData,
  handleEditFormChange,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          placeholder="Enter a name "
          onChange={handleEditFormChange}
          value={editFormData.fullName}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          placeholder="Enter a address "
          onChange={handleEditFormChange}
          value={editFormData.address}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter phone number "
          onChange={handleEditFormChange}
          value={editFormData.phoneNumber}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          placeholder="Enter an email "
          onChange={handleEditFormChange}
          value={editFormData.email}
        />
      </td>
      <td>
        <button onClick={handleEditFormSubmit}>Save</button>
        <button onClick={Cancel}>Cancel</button>
      </td>
    </tr>
  );
};
