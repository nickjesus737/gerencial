// Set chart options
var options = {
    'title': 'Tiempo de ejecucuión de cada fase del proyecto en semanas',
    'width': '550',
    'height': '440',
    pieHole: 0.4
};

function drawChart1() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Fase del Proyecto');
    data.addColumn('number', 'Tiempo');
    data.addRows([
        ['Inicio', 10],
        ['Elaboración', 13],
        ['Construcción', 20],
        ['Transición', 40]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('donutChart1'));
    chart.draw(data, options);
}

function drawChart2() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Fase del Proyecto');
    data.addColumn('number', 'Tiempo');
    data.addRows([
        ['Inicio', 4],
        ['Elaboración', 4],
        ['Construcción', 12],
        ['Transición', 21]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('donutChart2'));
    chart.draw(data, options);
}
function drawChart3() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Fase del Proyecto');
    data.addColumn('number', 'Tiempo');
    data.addRows([
        ['Inicio', 4],
        ['Elaboración', 6],
        ['Construcción', 23],
        ['Transición', 39]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('donutChart3'));
    chart.draw(data, options);
}
function drawChart4() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Fase del Proyecto');
    data.addColumn('number', 'Tiempo');
    data.addRows([
        ['Inicio', 4],
        ['Elaboración', 4],
        ['Construcción', 8],
        ['Transición', 20]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('donutChart4'));
    chart.draw(data, options);
}
function drawChart5() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Fase del Proyecto');
    data.addColumn('number', 'Tiempo');
    data.addRows([
        ['Inicio', 4],
        ['Elaboración', 4],
        ['Construcción', 13],
        ['Transición', 24]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('donutChart5'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5); 