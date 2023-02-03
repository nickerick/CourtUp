const UserService = {
    
    UserLogin: async (email,pass) => {
        const response = await fetch(`/api/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: pass})
        });
    
        // console.log(response.status)
        const resp = await response.json()
        console.log(resp)
        return response.status === 200;
    },

}

export default UserService;