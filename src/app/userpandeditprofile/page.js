// components/Profile.js
"use client"
import { useState } from 'react';
import EditProfileForm from './EditProfileForm';
import Navbarr from "@/Components/navbarSection/navbar";
import Footer from "@/Components/Footer";
import { Spacer } from "@nextui-org/spacer";
import {
	Box,
	Card,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Heading,
	Text,
	Flex,
	Divider,
	ButtonGroup,
	Button,
} from "@chakra-ui/react";
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const user = {
    id: 1,
    name: localStorage.getItem('name') || 'hasan333',
    email: localStorage.getItem('email') || 'hkhankor@gmail.com',
    // Add other user details as needed
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUser) => {
    // Save updated user information (e.g., send to the server or update local storage)
    localStorage.setItem('name', updatedUser.name);
    localStorage.setItem('email', updatedUser.email);
    // Update other user details as needed
    setIsEditing(false);
  };
  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Makes sure the container takes at least the full viewport height
    },
    centeredContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px',
       // You can adjust this value for spacing around your content
    },
    container: {
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      marginTop: '20px',
      cursor: 'pointer',
    },
  };

  return (
    <>
    <Navbarr/>
    <Box mb="24px">
  <img
    src="/sign.png"
    alt="sign"
    width="300px"
    height="300px"
  />
</Box>
    <div style={styles.pageContainer}>


    <div style={styles.centeredContent}>
    <h1 style={{ color: 'blue', fontSize: '40px', fontWeight: 'bold' }}>Account settings </h1>

      <h1 style={{ fontSize: '40px'}}>User Profile</h1>
      <Spacer y={16} />
      {isEditing ? (
        <EditProfileForm user={user} onSave={handleSave} />
      ) : (
        <>

          <div style={styles.container}>
            <p style={{ fontSize: '20px'}}>Name: {user.name}</p>
            <p style={{ fontSize: '20px'}}>Email: {user.email}</p>
            <Spacer y={10} />

            <button style={styles.button} onClick={handleEditClick}>
              Edit Profile
            </button>
          </div>
        </>
      )}
    </div>

    <Footer />
  </div>
  </>
  );
};

export default Profile;
