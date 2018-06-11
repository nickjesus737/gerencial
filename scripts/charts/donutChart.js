function drawChart() {
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
       
    // Set chart options
    var options = {
       'title':'Tiempo de ejecucuión de cada fase del proyecto en semanas',
       'width': '100%',
       'height': '100%',
       pieHole: 0.4
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('donutChart'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart);