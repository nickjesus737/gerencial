function drawChart1() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
       ['Year', 'Sales', 'Expenses'],
       ['2013',  1000,      400],
       ['2014',  1170,      460],
       ['2015',  660,       1120],
       ['2016',  1030,      540]
    ]);

    var options = {title: 'Company Performance',
       hAxis: {title: 'Year', titleTextStyle: {color: '#333'}},
       vAxis: {minValue: 0}
    };  

    // Instantiate and draw the chart.
    var chart = new google.visualization.AreaChart(document.getElementById ('proyecto2'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart1);