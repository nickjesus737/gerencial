google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Dias', 'Trabajo Restante'],
        [1, 175],
        [2, 163],
        [3, 155],
        [4, 145],
        [5, 150],
        [6, 142],
        [7, 137],
        [8, 135],
        [9, 130],
        [10, 128],
        [11, 122],
        [12, 115]
    ]);

    var options = {
        width: '600',
        title: 'Burndown Chart',
        hAxis: {
            title: 'Dias', format: '#', viewWindow: { min: 0, max: 38 },
            gridlines: { count: 10 }
        },
        vAxis: {minValue: 0},
        colors: ['rgb(52, 160, 86)'],
        trendlines: {
            0: {
                labelInLegend: 'BurnDown Velocity',
                visibleInLegend: false,
            },
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('burnDownChart'));

    chart.draw(data, options);
}
