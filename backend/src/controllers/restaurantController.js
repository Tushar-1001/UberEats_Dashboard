// const dotenv = require('dotenv').config();
require('dotenv').config()
const restaurantModel = require('../models/restaurantModel');
const jwt = require('jsonwebtoken');
const validator = require('../validators/validator');
const bcrypt = require('bcrypt')
const saltRounds = 10

//Restaurant registration...

const restaurantRegistration = async function (req,res) {

    try {
        const requestBody = req.body;

        const  {
            restaurantName,
            restaurantAddress,
            ownerName,
            ownerAddress,
            ownerEmail,
            password,
            ownerPhone
          } = requestBody

        if(!validator.isValidRequestBody(requestBody)){
            return res.status(400).send({ ststus: false, message: `Empty body not accepted.`})
        }
        
        if (!validator.isValid(restaurantName)) {
            return res.status(400).send({ status: false, message: "restaurantName is required." })
        }
        if (!validator.isValid(restaurantAddress)) {
            return res.status(400).send({ status: false, message: "restaurantAddress is required." })
        }
        if (!validator.isValid(ownerName)) {
            return res.status(400).send({ status: false, message: "ownerName is required." })
        }
        if (!validator.isValid(ownerAddress)) {
            return res.status(400).send({ status: false, message: "ownerAddress is required." })
        }
        if (!validator.isValid(ownerEmail)) {
            return res.status(400).send({ status: false, message: "Email is required ." })
        }
        if (!validator.isValid(password)) {
            return res.status(400).send({ status: false, message: "Password is required." })
        }
        if (!validator.isValid(ownerPhone)) {
            return res.status(400).send({ status: false, message: "Phone number is required" })
        }

        //checking email in DB whether it is already used or not....
        const checkEmail = await restaurantModel.findOne({ownerEmail})
        console.log(checkEmail )

        if(checkEmail){
            return res.status(400).send({ status: false, message: "This email is already in use." })
        }

        //encrypting password by using bcrypt.
        const encryptedPassword = await bcrypt.hash(password, saltRounds)

        const restaurantData = {
            restaurantName,
            restaurantAddress,
            ownerName,
            ownerAddress,
            ownerEmail,
            password : encryptedPassword,
            ownerPhone
        }

        const registerRestaurant = await restaurantModel.create(restaurantData)

        return res.status(200).send({ message: "Restaurant added successfully" , data : registerRestaurant})

        

    } catch (error) {
        return res.status(500).send(error.message)
    }
    
}



//Restaurant login...

const restaurantLogin = async function (req,res) {

    try {
        const requestBody = req.body;

        
        const  { ownerEmail, password} = requestBody
        // console.log(ownerEmail)

        if(!validator.isValidRequestBody(requestBody)){
            return res.status(400).send({ ststus: false, message: `Empty body not accepted.`})
        }
        
        if (!validator.isValid(ownerEmail)) {
            return res.status(400).send({ status: false, message: "Email is required 123." })
        }

        if (!validator.isValid(password)) {
            return res.status(400).send({ status: false, message: "Password is required." })
        }

        //finding restaurant's owner details in DB to verify the credentials.
        const findOwner = await restaurantModel.findOne({ ownerEmail });

       

        if(!findOwner){
            return res.status(400).send({ message: "Login failed! email id is incorrect." })

        }

        //Comparing password in the req.body with the orignal hashed password in the DB.
        let hashedPassword = findOwner.password
        const passwordComparison = await bcrypt.compare(password, hashedPassword)

        
        if (!passwordComparison) return res.status(401).send({ status: false, message: `Login failed! password is incorrect.` });

             //Creating JWT token through userId. 
             const uniqueId = findOwner._id
             const token = jwt.sign({
                uniqueId: uniqueId,
                 iat: Math.floor(Date.now() / 1000), //time of issuing the token.
                 exp: Math.floor(Date.now() / 1000) + 300  //setting token expiry time limit.
             }, process.env.JWT_SECRET_KEY)

             return res.status(200).send({
                message: `login successfull `,
                data: {
                    uniqueId,
                    token
                }
            });

        

       

        

    } catch (error) {
        return res.status(500).send(error.message)
    }
    
}


module.exports = {
    restaurantRegistration,
    restaurantLogin
}