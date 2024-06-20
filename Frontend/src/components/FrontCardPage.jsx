import React from 'react'


function FrontCardPage() {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-x-10 container mx-auto md:px-20 px-4 light:bg-slate-900  dark:bg-slate-900 ">
          <div className="card w-96 h-35 bg-base-100 shadow-xl mt-6 light:text-white  dark:bg-slate-900">
            <figure className="px-8 pt-10">
              <img src="customer.png" alt="History" className="rounded-xl" />
            </figure>
            <div className="card-body items-center   ">
              <h2 className="card-title">View Users</h2>
              <p>List of Users</p>

              <div className="card-actions">
                <button className="btn btn-primary"><a href="/views">View Users</a></button>
               
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl light:text-white  dark:bg-slate-900">
            <figure className="px-10 pt-10">
              <img src="transfer.png" alt="Transfer" className="rounded-xl" />
            </figure>
            <div className="card-body items-center  light:bg-slate-900  dark:text-white ">
              <h2 className="card-title">Transfer Money</h2>
              <p>Money transfer can be done</p>
              <div className="card-actions">
                <button className="btn btn-primary"><a href="/transfer">Transfer</a></button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl light:text-white  dark:bg-slate-900">
            <figure className="px-10 pt-10">
              <img src="log.png" alt="History" className="rounded-xl" />
            </figure>
            <div className="card-body items-center light:bg-slate-900  dark:text-white   ">
              <h2 className="card-title">Create User</h2>
              <p>Add Details of New User</p>

              <div className="card-actions">
                <button className="btn btn-primary"><a href="/createUser">Add User</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontCardPage
