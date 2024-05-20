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
                // Aquí deberías hacer una solicitud a tu API para obtener los datos de los juegos desde la base de datos
                // Pero como no tenemos acceso a tu API, simularemos datos de ejemplo aquí
                this.games = [
                    {
                        GAME_ID: 1,
                        TITLE: "The Legend of Zelda: Breath of the Wild",
                        DESCRIPTION: "Explore the wilds of Hyrule in this breathtaking adventure.",
                        PRICE: 59.99,
                        RELEASE_DATE: "2017-03-03",
                        SCORE: 97
                    },
                    {
                        GAME_ID: 2,
                        TITLE: "Red Dead Redemption 2",
                        DESCRIPTION: "Live the life of an outlaw in the dying days of the Wild West.",
                        PRICE: 49.99,
                        RELEASE_DATE: "2018-10-26",
                        SCORE: 96
                    },
                    {
                        GAME_ID: 3,
                        TITLE: "The Witcher 3: Wild Hunt",
                        DESCRIPTION: "Embark on an epic quest as Geralt of Rivia in this stunning open world RPG.",
                        PRICE: 39.99,
                        RELEASE_DATE: "2015-05-19",
                        SCORE: 93
                    }
                    // Puedes agregar más juegos aquí si lo deseas
                ];
            },
            viewGame(gameId) {
                // Redireccionar a la página de detalles del juego con el ID del juego seleccionado
                window.location.href = `/game/${gameId}`;
            }
        }
    }).mount('#app')
})
