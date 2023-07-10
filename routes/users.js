import express from 'express';
import uid from 'uuid';


const router = express.Router();

const users = [{
    FirstName: "Pratik",
    LastName : "Sandilya",
    Age: 21
},
{
    "FirstName": "Rohit",
    "LastName" : "Singh",
    "Age": 22
}
]

router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
});

router.post('/',(req,res)=>{
    res.send("Route Reached");
    const user  = req.body;
    users.push(user);
    res.send("User Added");
});

export default router;