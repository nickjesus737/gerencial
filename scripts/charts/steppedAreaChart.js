function drawChart() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
       ['Proyectos',  'Angular', 'TypeScript', 'Node'],
       ['Alfred Hitchcock (1935)', 8.4, 7.9, 2],
       ['Ralph Thomas (1959)',     6.9, 6.5, 5],
       ['Don Sharp (1978)',        6.5, 6.4, 1],
       ['James Hawes (2008)',      4.4, 6.2, 7]
    ]);

    var options = {
       title: 'Tecnologias en los proyectos',
       isStacked: true      
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('proyecto6'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart);