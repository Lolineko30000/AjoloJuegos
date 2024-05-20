$(() => {
    axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
    const { createApp } = Vue

    createApp({
        data() {
            return {
                gameId: null,
                game: {},
                comments: []
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
