import React, { useEffect, useState } from "react";
import axios from "axios";

function Transfer() {
  const [data, setData] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleTransfer = () => {
    axios
      .post("http://localhost:5000/api/transaction", { from, to, amount })
      .then((res) => {
        console.log(res.data);
        alert("Transfer successful!");
        // Optionally, you could refresh the customer data here
        axios
          .get("http://localhost:5000/api/customers")
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
        alert("Transfer failed!");
      });
  };

  return (
    <div className="flex flex-col pt-20 min-h-screen">
      <div className="max-w-xl mx-auto my-20 p-5 bg-white rounded-lg items-center justify-center shadow-md">
        <h2 className="mb-5 text-2xl font-semibold text-gray-700 text-center">
          Transfer Money
        </h2>
        <div className="mt-4">
          <label
            htmlFor="from"
            className="block text-sm font-medium text-gray-700"
          >
            From:
          </label>
          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
          >
            <option value="" disabled>
              Select customer
            </option>
            {data.map((customer) => (
              <option key={customer._id} value={customer.name}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="to"
            className="block text-sm font-medium text-gray-700"
          >
            To:
          </label>
          <select
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
          >
            <option value="" disabled>
              Select customer
            </option>
            {data.map((customer) => (
              <option key={customer._id} value={customer.name}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
          />
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleTransfer}
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
