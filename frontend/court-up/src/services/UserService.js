const UserService = {
    
    UserLogin: async (email, pass) => {
        const response = await fetch(`/api/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: pass})
        });
        await response.json()
        return response.status === 200;
    },

}

export default UserService;