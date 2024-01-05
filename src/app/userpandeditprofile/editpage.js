// // components/EditProfileForm.js
// import { useState } from 'react';

// const EditProfileForm = ({ user, onSave }) => {
//   const [editedUser, setEditedUser] = useState({
//     name: user.name,
//     email: user.email,

//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleSaveClick = () => {
//     onSave(editedUser);
//   };

//   return (
//     <div>
//       <h2>Edit Profile</h2>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
//         </label>
//         <br />

//         <button type="button" onClick={handleSaveClick}>
//           Save
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfileForm;
