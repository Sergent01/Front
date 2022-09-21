import React from "react";

import styles from "./ManageData.module.scss";

const ManageData = (props) => {
  const handleChange = (e) => {
    let id = e.target.id;
    if (e.target.checked) {
      props.setArray([...props.array, id]);
    } else {
      props.setArray(
        props.array.filter((isId) => {
          return isId != id;
        })
      );
    }
  };

  return (
    <div className={styles.manageData__main}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                onChange={handleChange}
                id={props.data._id}
                type="checkbox"
              />
            </td>
            <td>{props.data.phone}</td>
            <td>{props.data.email}</td>
            <td>{props.data.lastName}</td>
            {/* <td>{props.data.address.street}</td> */}
            <td>{props.data.address.zipCode}</td>
            <td>{props.data.address.city}</td>
            {/* <td>{props.data.situation}</td>
            <td>{props.data.state}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageData;
