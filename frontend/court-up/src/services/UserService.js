const UserService = {
    
    UserLogin: async (email,pass) => {
        const response = await fetch(`/api/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: pass})
        });

        const resp = await response.json()
    },

}

export default UserService;