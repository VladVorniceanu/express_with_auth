const getAllUsers = (req, res) => {
    res.send('you want to get all users')
    
};
const createUser = (req, res) => {
    res.send('you want to register')
    
};
const loginUser = (req, res) => {
    res.send('you want to login')
    
};

module.exports = {
    getAllUsers,
    createUser,
    loginUser
}   
