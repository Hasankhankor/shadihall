// EditProfileForm.js
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import styles from "./userpandeditprofile.module.css";
import Navbarr from "@/Components/navbarSection/navbar";
import Footer from "@/Components/Footer";

const EditProfileForm = ({ user, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave(editedUser);
  };

  const handleCancelClick = () => {
    // You may implement additional logic here if needed
    // For simplicity, we will just cancel the editing and not save any changes
    setEditedUser({ ...user });
    onSave(user);
  };

  return (
    <>


    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formHeader}>
          Edit Profile
          <i className={`fa fa-times ${styles.close}`}></i>
        </div>

        <Form layout="vertical">
          <Form.Item  label="Full Name" className={styles.formGrp}>
            <Input name="name" placeholder="Felix Quoka" value={editedUser.name} onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Email" className={styles.formGrp}>
            <Input name="email" placeholder="hi@quoka.net" value={editedUser.email} onChange={handleChange} />
          </Form.Item>

          <Form.Item className={styles.formGrp}>
            <Button type="primary" onClick={handleSaveClick}>Update Profile</Button>
          </Form.Item>
        </Form>
      </div>
    </div>

    </>

  );
};

export default EditProfileForm;