function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Fase del Proyecto');
    data.addColumn('number', 'Tiempo');
    data.addRows([
       ['Inicio', 10],
       ['Elaboración', 30],
       ['Construcción', 60],
       ['Transición', 20]
    ]);
       
    // Set chart options
    var options = {
       'title':'Tiempo de ejecucuión de cada fase del proyecto',
       'width': '100%',
       'height': '100%',
       pieHole: 0.4
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('donutChart'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart);