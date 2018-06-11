function drawChart1() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
       ['Year', 'Gastos', 'Ganancias'],
       ['2013', 3000000, 10000000],
       ['2014', 3800000, 12000000],
       ['2015', 4500000, 13500000],
       ['2016', 4200000, 16000000],
       ['2017', 4600000, 20000000]
    ]);

    var options = {title: 'Desempeño de la Compañia',
       hAxis: {title: 'Año', titleTextStyle: {color: '#333'}},
       vAxis: {minValue: 0}
    };  

    // Instantiate and draw the chart.
    var chart = new google.visualization.AreaChart(document.getElementById ('areaChart'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart1);