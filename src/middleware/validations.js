function validateData(req, res, next) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send("All input is required");
        }
        
        const passwordRegex = /^(?=.*\d)[A-Za-z\d]{8,}$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!passwordRegex.test(password) || !emailRegex.test(email)) {
            return res.status(400).send("Invalid email or password");
        }
        next();
    }
    catch (error) {
        return res.status(500).send("Internal Server Error");
    }

}

module.exports = validateData;