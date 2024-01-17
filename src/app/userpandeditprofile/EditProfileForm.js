// EditProfileForm.js
import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import styles from "./userpandeditprofile.module.css";
import Navbarr from "@/Components/navbarSection/navbar";
import Footer from "@/Components/Footer";
import axios from "axios";

const EditProfileForm = ({ email,name,picture, onSave }) => {
  const [editedemail, setEditedemail] = useState(email);
  const [editedname, seteditedname] = useState(name)
  const [editpicture, seteditpicture] = useState(picture)
  const [hallname, sethallname] = useState("")
  const [halldescription, sethalldescription] = useState("")
  const [halllocation, sethalllocation] = useState("")
  const [hallrice, sethallrice] = useState("")
  const [hallvalid, sethallvalid] = useState(false)
  const [password, setpassword] = useState("")
  const [hallpicture, sethallpicture] = useState("")

  useEffect(() => {
    const localemail=localStorage.getItem('email2')
    const fetchApi=async()=>{
        const hallresponse= await axios.get(`http://192.168.100.107:5000/api/halls/${localemail}`)
      console.log(hallresponse.data)
      sethallname(hallresponse.data.hallname)
      setpassword(hallresponse.data.password)
      sethalldescription(hallresponse.data.halldescription)
      sethalllocation(hallresponse.data.halllocation)
      sethallrice(hallresponse.data.hallprice)
      sethallpicture(hallresponse.data.hallpicture)
      if(hallresponse.data!=null){
        sethallvalid(true)

      }
      else{
        sethallvalid(false)
      }
    }
    fetchApi()
  }, [])


  const handleSaveClick2 = async() => {
    const id2=localStorage.getItem("hallid")
  try {
    const response=axios.put(`http://192.168.18.125:5000/api/user/halls?id=${id2}`,{
      email:editedemail,

      hallname:hallname,
      halllocation:halllocation,

      halldescription:halldescription,
      hallprice:hallrice
    })
    console.log(response.data)
    alert("Updated Succesfully")
    localStorage.setItem("email2",editedemail)
  } catch (error) {
    alert(error)

  }
}


  const handleSaveClick = async() => {
    const id=localStorage.getItem("idKey")
 try {
    const response=axios.put(`http://192.168.18.125:5000/api/user?id=${id}`,{
        fullname:editedname,
        email:editedemail,

    })
    console.log(response.data)
    alert("Updated Succesfully")
    localStorage.setItem("email2",editedemail)
 } catch (error) {
    alert(error)

 }





    // onSave(editedUser);
  };

  const handleCancelClick = () => {
    // You may implement additional logic here if needed
    // For simplicity, we will just cancel the editing and not save any changes
    // setEditedUser({ ...user });
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
            <Input name="name" placeholder="Felix Quoka" value={editedname} onChange={({target})=>{
                seteditedname(target.value)
            }} />
          </Form.Item>

          <Form.Item label="Email" className={styles.formGrp}>
            <Input name="email" placeholder="hi@quoka.net" value={editedemail} onChange={({target})=>{
                setEditedemail(target.value)
            }} />
            </Form.Item>
            {hallvalid ? (
                <>
                <Form.Item label="hall name" className={styles.formGrp}>
            <Input name="hallname" placeholder="hi@quoka.net" value={hallname} onChange={({target})=>{
                sethallname(target.value)
            }} />
          </Form.Item>
          <Form.Item label="hall description" className={styles.formGrp}>
            <Input name="halldescription" placeholder="hi@quoka.net" value={halldescription} onChange={({target})=>{
                sethalldescription(target.value)
            }} />
          </Form.Item>
          <Form.Item label="hall location" className={styles.formGrp}>
            <Input name="email" placeholder="hi@quoka.net" value={halllocation} onChange={({target})=>{
                sethalllocation(target.value)
            }} />
          </Form.Item>
          <Form.Item label="hall Price" className={styles.formGrp}>
            <Input name="email" placeholder="hi@quoka.net" value={hallrice} onChange={({target})=>{
                sethallrice(target.value)
            }} />
          </Form.Item>
                </>






            ): (
                <p>nodata more</p>
            )}


          <Form.Item className={styles.formGrp}>
            <Button type="primary" onClick={()=>{
              handleSaveClick()
              handleSaveClick2()
            }}>Update Profile</Button>
          </Form.Item>
        </Form>
      </div>
    </div>

    </>

  );
};

export default EditProfileForm;