import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="min-h-screen">
        <div className="container mx-auto mt-10" align="center">
          <h2 className="text-2xl font-semibold mb-5">Users Details</h2>
          <table className="table-auto w-full text-left border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">
                  Email Id
                </th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Account Number
                </th>
                <th className="border border-gray-300 px-4 py-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.email_id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.accountnumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FetchData;
