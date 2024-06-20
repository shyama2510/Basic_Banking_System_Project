import React from 'react'


function Banner() {
  return (
    <><div className=" max-w-screen-2xl container mx-auto md:px-20 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-32" > 
      <div className="space-y-6">
      <h1 className="text-4xl font-bold">The <span className="text-pink-500">Spark </span> Foundation Bank</h1>
      <p className="text-xl">
      Your Trusted Financial Partner. We offer a comprehensive suite of banking services tailored to meet your personal and business needs. Experience seamless online banking, secure transactions, and dedicated customer support. Join us today and take control of your financial future with confidence.







      </p>
      <button className="btn btn-secondary">Get Started</button>
      </div>
      
      </div>
      <div className="order-1 mt-14 md:order-2 w-full md:w-1/2"> 
      <img src="bannerpage.png"  className="md:w-[550px] md:h-[460px] md:ml-12"></img>
      </div>
    </div>
    </>
    
  )
}

export default Banner
