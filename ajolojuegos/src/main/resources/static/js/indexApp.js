$(() => {
    axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
    const { createApp } = Vue

    createApp({
        data() {
            return {
                games: []
            }
        },
        created() {
            this.fetchGames();
        },
        methods: {
            fetchGames() {
                axios.get('/api/games')
                    .then(response => {
                        this.games = response.data;
                    })
                    .catch(error => {
                        console.error('Error fetching games:', error);
                    });
            },
            viewGame(gameId) {
                // Redireccionar a la página de detalles del juego con el ID del juego seleccionado
                window.location.href = `/game/${gameId}`;
            }
        }
    }).mount('#app')
})
