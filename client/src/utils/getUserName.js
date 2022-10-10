
const getUserName = (userId, usersFormStore) => {
    let users =  usersFormStore;
    for (let i = 0; i < users.length; i++) {
        if(userId == users[i].id){
            return users[i].email;
        }   
    }
}

export default getUserName;