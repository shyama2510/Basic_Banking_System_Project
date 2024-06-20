const express = require("express");
const Customer = require("../models/customer");
const router = express.Router();

router.get("/", async (req, res ,next) => {
  const customers = await Customer.find({});
  console.log(customers)
  res.send(customers);
});



// Function to check if the email is a valid Gmail address
const isValidGmail = (email) => {
  return email.endsWith("@gmail.com");
};
const isValidAccount=(accountnumber)=>{
  if(accountnumber.length!=10)return false;
  return true;
}

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { email_id, name, accountnumber, balance } = req.body;
  console.log(email_id);

  // Check if the email is a valid Gmail address
  if (!isValidGmail(email_id)) {
    return res.status(400).json({ error: "Email must be a Gmail address" });
  }
  if(!isValidAccount(accountnumber)){
    return res.status(400).json({error:"Invalid Acoount Number"});
  }

  try {
    const user = await Customer.findOne({email_id: email_id})
    if (user)
      return res.status(400).json({ message: "Enter unique email" });
      
    const newCustomer = new Customer({
      email_id: email_id,
      name: name,
      accountnumber: accountnumber,
      balance: balance,
    
      
    });

    const savednewCustomer = await newCustomer.save();
    res.status(201).json(savednewCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

module.exports = router;
