const UserService = {
    
    testDb: async (testVar) => {
        const response = await fetch(`/api/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: 'nickerickpoopface', password: 'password'})
        });

        const resp = await response.json()
        console.log(resp);
        console.log(testVar)
    },

    testFunction2: function() {
        console.log('test function 2');
    }

}

export default UserService;