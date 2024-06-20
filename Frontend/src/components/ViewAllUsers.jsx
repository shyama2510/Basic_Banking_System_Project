// import React from 'react'
// import globalContext from "../context/globalContext";


// const Customers = () => {
//   const { customers, getCustomers, loading } = useContext(globalContext)
//   const [user, setUser] = useState(null)
//   const [modalDisplay, setModalDisplay] = useState(false)
//   useEffect(() => {
//     getCustomers()
//   }, [])


// function ViewAllUsers() {
//     const data = [
//         {
//           serialnumber: 1,
//           name: "Raj",
//           accountnumber: 835624961518,
//           balance: 40000
//         },
//         {
//           serialnumber: 2,
//           name: "Srishty",
//           accountnumber: 836245963275,
//           balance: 32658
//         },
//         {
//             serialnumber: 3,
//           name: "Harshat",
//           accountnumber: 869624961518,
//           balance: 42000
//         },
//         {
//           serialnumber: 4,
//           name: "Madhu",
//           accountnumber: 835438961518,
//           balance: 100000
//         },
//         {
//           serialnumber: 5,
//           name: "Pooja",
//           accountnumber: 835624215818,
//           balance: 37000
//         },
//         {
//           serialnumber: 6,
//           name: "Dev",
//           accountnumber: 835364961518,
//           balance: 13000
//         },
//         {
//           serialnumber: 7,
//           name: "Ankit",
//           accountnumber: 835624961258,
//           balance: 25000
//         },
//         {
//           serialnumber: 8,
//           name: "Rihan",
//           accountnumber: 835620365518,
//           balance: 80000
//         },
//         {
//           serialnumber: 9,
//           name: "Sumit",
//           accountnumber: 835621256938,
//           balance: 200000
//         },
//         {
//           serialnumber: 10,
//           name: "Sara",
//           accountnumber: 837824961518,
//           balance: 2000
//         }
//       ];
//   return (
    
//       <div className=" mt-32  w-full  px-4  mx-auto md:px-20  ">
//         <div className=" min-w-full bg-gray-300">
//         <table>
//           <thead className="bg-gray-700 text-white">
//             <tr className="w-full">
//             <th className="py-2 px-4">Serial Number</th>
//               <th className="py-2 px-4">Name</th>
//               <th className="py-2 px-4">Account Number</th>
//               <th className="py-2 px-4">Balance</th>
//             </tr>
//           </thead>

//             <tbody>
// {/* 
//                {customers?.map(customer => (
//               <tr
//                 className='customer'
//                 key={customer._id}
//                 onClick={() => {
//                   setModalDisplay(true)
//                   setUser(customer)
//                 }}
//               ><td>{customer.serialnumber}</td>
//                 <td>{customer.name}</td>
//                 <td>{customer.accountnumber}</td>
//                 <td>{customer.balance}</td>
//               </tr>
//             ))}
//           </tbody> */}
  
           

//                 {data.map((i, key)=>{
//                     return(
//                         <tr key={key}>
//                         <td className="py-2 px-4 text-center">{i.serialnumber}</td>
//                         <td className="py-2 px-4 text-center">{i.name}</td>  
//                         <td className="py-2 px-4 text-center">{i.accountnumber}</td>
//                         <td className="py-2 px-4 text-center">{i.balance}</td>      
//                         </tr>  
//                     ) 
//                 })}
                
//              </tbody>
//         </table>
//        </div>

// )
   
//   );


// export default ViewAllUsers;
