import React from 'react'
import Navbar from '../components/Navbar'
import ViewAllUsers from '../components/ViewAllUsers'
import Footer from '../components/Footer'
import list from "../../public/list.json"

function UserList() {
  console.log(list);
  return (
    <>
     <Navbar/>
     <div className="min h-screen ">
     <ViewAllUsers/>

     </div>
   
    <Footer/>   
    </>
   
  )
}

export default UserList;
