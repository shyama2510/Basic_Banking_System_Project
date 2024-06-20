import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
function AddCustomer() {
  const [email_id, setSerialNumber] = useState("");
  const [name, setName] = useState("");
  const [accountnumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = {
      email_id,
      name,
      accountnumber,
      balance: parseFloat(balance), // Ensure balance is a number
    };

    axios
      .post("http://localhost:5000/api/customers", newCustomer)
      .then((res) => {
        setMessage("Customer added successfully!");
        // Optionally, clear the form fields after successful submission
        setSerialNumber("");
        setName("");
        setAccountNumber("");
        setBalance("");
      })
      .catch((err) => {
        console.error(err);
        setMessage("Error adding customer. Please try again.");
      });
  };

  return (
    <>
    <Navbar/>
      <div className="flex flex-col pt-20 min-h-screen">
        <div className="max-w-xl mx-auto my-20 p-5 bg-white rounded-lg items-center justify-center shadow-md">
          <h2 className="mb-5 text-2xl font-semibold text-gray-700 text-center">
            Add New Customer
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="email_id"
                className="block text-sm font-medium   text-gray-700"
              >
                Email Id:
              </label>
              <input
                type="text"
                id="email_id"
                value={email_id}
                onChange={(e) => setSerialNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="accountNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Account Number:
              </label>
              <input
                type="text"
                id="accountNumber"
                value={accountnumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="balance"
                className="block text-sm font-medium text-gray-700"
              >
                Balance:
              </label>
              <input
                type="number"
                id="balance"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Customer
              </button>
            </div>
          </form>
          {message && (
            <div className="mt-4 text-center text-sm   text-gray-700">
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
