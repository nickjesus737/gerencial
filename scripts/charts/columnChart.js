function drawChart() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
       ['Tecnologia', 'Cantidad', {role: 'style'}],
       ['2012',  900, 'color: red'],
       ['2013',  1000, 'color: blue'],
       ['2014',  1170, 'color: black'],
       ['2015',  1250, 'color: yellow'],
       ['2016',  1530, 'color: green']
    ]);

    var options = {title: 'Population (in millions)'}; 

    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('proyecto3'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart);