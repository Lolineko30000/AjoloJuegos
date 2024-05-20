$(() => {
    axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
    const { createApp } = Vue

    createApp({
        data() {
            return {
                showLogin: true,
                loginData: {
                    username: '',
                    password: ''
                },
                registerData: {
                    username: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            toggleForm() {
                this.showLogin = !this.showLogin;
            },
            login() {
                axios.post('/login_', this.loginData)
                    .then(response => {
                        // Handle successful login
                        console.log(response.data);
                    })
                    .catch(error => {
                        // Handle login error
                        console.error(error);
                    });
            },
            register() {
                axios.post('/register', this.registerData)
                    .then(response => {
                        // Handle successful registration
                        console.log(response.data);
                    })
                    .catch(error => {
                        // Handle registration error
                        console.error(error);
                    });
            }
        }
    }).mount('#app')
})
