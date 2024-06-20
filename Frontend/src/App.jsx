import React from 'react'

import Home from './Home/Home'
 
import { Route, Routes } from "react-router-dom"
// import UserList from './UserList/UserList'
import TransferMoney from './TransferMoney/TransferMoney'
import FetchData from './FetchData/FetchData'
import CreateUser from './CreateUser/CreateUser'
import TransactionHistory from "./TransactionHistory/TransactionHistory";







function App() {
  return (
    <>
      <div className="dark:bg-slate-900  dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/views" element={<FetchData />} />
          <Route path="/transfer" element={<TransferMoney />} />
          <Route path="/fetch" element={<FetchData />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/transaction" element={<TransactionHistory />} />
  
        </Routes>
      </div>
    </>
  );
}

export default App

