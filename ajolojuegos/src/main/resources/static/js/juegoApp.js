$(() => {
    axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
    const { createApp } = Vue

    createApp({
        data() {
            return {
                gameId: null,
                game: {
                    gameId: 1,
                    title: "The Witcher 3: Wild Hunt",
                    players: 2000000,
                    price: 29.99,
                    releaseDate: "2015-05-19",
                    description: "The Witcher 3: Wild Hunt is a action role-playing game developed and published by CD Projekt Red.",
                    classification: "M",
                    score: 95
                },
                comments: [
                    {
                        userId: 1,
                        username: "player123",
                        comment: "¡Este juego es increíble! La historia es absorbente y los gráficos son impresionantes.",
                        date: "2024-05-19"
                    },
                    {
                        userId: 2,
                        username: "gamer456",
                        comment: "Me encanta este juego. La cantidad de misiones secundarias es asombrosa.",
                        date: "2024-05-18"
                    },
                    {
                        userId: 3,
                        username: "gamefanatic",
                        comment: "Uno de los mejores juegos que he jugado. Altamente recomendado.",
                        date: "2024-05-17"
                    },
                    {
                        userId: 4,
                        username: "adventurer",
                        comment: "Los gráficos son impresionantes y la historia es épica. No puedo dejar de jugar.",
                        date: "2024-05-16"
                    },
                    {
                        userId: 5,
                        username: "rpglover",
                        comment: "Este juego tiene una jugabilidad increíble. Me encanta explorar el mundo abierto.",
                        date: "2024-05-15"
                    },
                    {
                        userId: 6,
                        username: "gamer1234",
                        comment: "No puedo creer lo inmersivo que es este juego. Me siento completamente absorbido por el mundo del juego.",
                        date: "2024-05-14"
                    },
                    {
                        userId: 7,
                        username: "videogamelover",
                        comment: "La banda sonora es maravillosa. Agrega mucho a la atmósfera del juego.",
                        date: "2024-05-13"
                    },
                    {
                        userId: 8,
                        username: "player789",
                        comment: "El juego es muy largo y tiene mucha rejugabilidad. No me canso de jugarlo una y otra vez.",
                        date: "2024-05-12"
                    },
                    {
                        userId: 9,
                        username: "gamergirl",
                        comment: "Finalmente completé todas las misiones y encontré todos los secretos. ¡Qué viaje!",
                        date: "2024-05-11"
                    },
                    {
                        userId: 10,
                        username: "gameaddict",
                        comment: "Los personajes son tan realistas y bien escritos. Me siento conectado con ellos.",
                        date: "2024-05-10"
                    },

                ]

            }
        },
        created() {

            const urlParams = new URLSearchParams(window.location.search);
            this.gameId = parseInt(urlParams.get('gameId'));

            $(() => {this.generateCharts();})
        },
        methods: {
            fetchGameData() {


                axios.get(`/api/game/${this.gameId}`)
                    .then(response => {
                        this.game = response.data;
                        this.generateCharts();
                    })
                    .catch(error => {
                        console.error('Error fetching game data:', error);
                    });
            },
            fetchComments() {


                axios.get(`/api/game/${this.gameId}/comments`)
                    .then(response => {
                        this.comments = response.data;
                    })
                    .catch(error => {
                        console.error('Error fetching comments:', error);
                    });
            },
            generateCharts() {


                this.generateScoreChart();


                const fakeData = {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'], // Datos ficticios de nombres de meses
                    datasets: [{
                        label: 'Partidas de Usuarios',
                        data: [10, 20, 15, 25, 30, 20], // Datos ficticios de cantidad de partidas por mes
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                };
    
                this.matchData = fakeData;
                this.renderLineChart();

            },
            generateScoreChart() {

                
                const score = this.game.score;
                new Chart($('#scorechart'), {
                    type: 'bar',
                    data: {
                        labels: ['Score'],
                        datasets: [{
                            label: 'Game Score',
                            data: [score],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        }]
                    },
                });
            },
            
            renderLineChart() {
            
                new Chart($('#playerschart'), {
                    type: 'line',
                    data: {
                        labels: this.matchData.labels,
                        datasets: [{
                            label: this.matchData.datasets[0].label,
                            data: this.matchData.datasets[0].data,
                            fill: this.matchData.datasets[0].fill,
                            borderColor: this.matchData.datasets[0].borderColor,
                            tension: this.matchData.datasets[0].tension
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            },
        }
    }).mount('#app')
})
