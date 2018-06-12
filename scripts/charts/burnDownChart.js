function iteration(iteracion, max){
    var options = {
        width: '600',
        height: '440',
        title: 'Burndown Chart '+ iteracion +' iteración',
        hAxis: {
            title: 'Dias', format: '#', viewWindow: { min: 0, max: max },
            gridlines: { count: 10 }
        },
        vAxis: { minValue: 0 },
        colors: ['rgb(52, 160, 86)'],
        trendlines: {
            0: {
                labelInLegend: 'BurnDown Velocity',
                visibleInLegend: false,
            },
        }
    };
    return options;
}

function drawChart1() {

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

    var chart = new google.visualization.ColumnChart(document.getElementById('burnDownChart1'));

    chart.draw(data, iteration('sexta', 38));
}

function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Dias', 'Trabajo Restante'],
        [1, 75],
        [2, 63],
        [3, 55],
        [4, 45],
        [5, 50],
        [6, 42],
        [7, 37],
        [8, 35]
    ]);

    var chart = new google.visualization.ColumnChart(document.getElementById('burnDownChart2'));

    chart.draw(data, iteration('octava', 16));
}

function drawChart3() {

    var data = google.visualization.arrayToDataTable([
        ['Dias', 'Trabajo Restante'],
        [1, 39],
        [2, 37],
        [3, 35],
        [4, 30],
        [5, 28],
        [6, 22]
    ]);

    var chart = new google.visualization.ColumnChart(document.getElementById('burnDownChart3'));

    chart.draw(data, iteration('decima', 15));
}

function drawChart4() {

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
    ]);

    var chart = new google.visualization.ColumnChart(document.getElementById('burnDownChart4'));

    chart.draw(data, iteration('cuarta', 38));
}

function drawChart5() {

    var data = google.visualization.arrayToDataTable([
        ['Dias', 'Trabajo Restante'],
        [1, 75],
        [2, 63],
        [3, 55],
        [4, 45],
    ]);

    var chart = new google.visualization.ColumnChart(document.getElementById('burnDownChart5'));

    chart.draw(data, iteration('primera', 10));
}

google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);

