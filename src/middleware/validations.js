function validateData(req,res,next) {
    try{
        const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.send("incomplete details")
    }
    const passwordRegex = /^(?=.*\d)[A-Za-z\d]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!passwordRegex.test(password) || !emailRegex.test(email)){
        return res.send("Invalid Email or password");
    }
    next();
    }
    catch(err){
        return res.send("error occured")
    }
    
}

module.exports = validateData;