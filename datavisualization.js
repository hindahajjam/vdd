// Create a Pie Chart in ChartJs
// Make sure you have imported ChartJs : https://cdn.jsdelivr.net/npm/chart.js


// our results data from flask python
// const results_A = {{result.get('results_A')|tojson}};
// const results_B = {{result.get('results_B')|tojson}};

var ctx1 = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ["A", "B"],
        datasets: [{
            label: '',
            data: [results_A, results_B],
            backgroundColor: [
                'rgb(0,0,117)',
                'rgb(34,182,97)',
                'rgb(255,205,86)'
            ],
            hoverOffset: 4
        }]
    },

    options: {

        tooltips: {

            multiKeyBackground: '#160c0c',

            usePointStyle: true,
            titleFontSize: 18,
            bodyFontSize: 14,
            xPadding: 10,
            yPadding: 10,

            cornerRadius: 0,
            borderColor: '#A9A9A9',
            borderWidth: 1,

            bodySpacing: 6,

            backgroundColor: '#F4F6F8',

            bodyFontColor: 'rgb(0,0,0)',
            titleFontColor: 'rgb(22,12,12)',

            mode: 'index',
            intersect: false,

        },
    }
});


// Create a Pie Chart in ChartJs

// our results data from flask python
// const data = {{result.get('deals')|tojson}}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    order: 1,
    data: {
        labels: ["Janvier 2022", "Fevrier 2022", "Mars 2022",
            "Avril 2022", "Mai 2022", "Juin 2022", "Juillet 2022",
            "Aout 2022", "Septembre 2022", "Octobre 2022",
            "Novembre 2022", "Decembre2022"],
        datasets: [{
            label: '',
            data: data,
            backgroundColor: [
                'rgba(25,39,54)',
                'rgb(0,200,124)',
                'rgba(112,90,219)',
            ],
            hoverOffset: 4
        }]
    },

    options: {
        tooltips: {

            multiKeyBackground: '#160c0c',

            usePointStyle: true,
            titleFontSize: 18,
            bodyFontSize: 14,
            xPadding: 10,
            yPadding: 10,

            cornerRadius: 0,
            borderColor: '#A9A9A9',
            borderWidth: 1,

            bodySpacing: 6,

            backgroundColor: '#F4F6F8',

            bodyFontColor: 'rgb(0,0,0)',
            titleFontColor: 'rgb(22,12,12)',

            mode: 'index',
            intersect: false,
            callbacks: {
                label: function (t, d) {
                    return ' ' +
                        d.datasets[t.datasetIndex].label
                        + ' ' + ':' + ' ' + t.yLabel
                }
            }
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Nb'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Temps'
                }
            }],
            y: {
                beginAtZero: true,

            }
        },
        title: {
            display: true,
            text: 'Nouvelles Opportunites (Deals)'
        },
    }
});


