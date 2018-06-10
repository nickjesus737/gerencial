function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Tokyo');
    data.addRows([
       ['Jan',  7.0],
       ['Feb',  6.9],
       ['Mar',  9.5],
       ['Apr',  14.5],
       ['May',  18.2],
       ['Jun',  21.5],
       
       ['Jul',  25.2],
       ['Aug',  26.5],
       ['Sep',  23.3],
       ['Oct',  18.3],
       ['Nov',  13.9],
       ['Dec',  9.6]
    ]);
       
    // Set chart options
    var options = {'title' : 'Average Temperatures of Cities',
       hAxis: {
          title: 'Month'
       },
       vAxis: {
          title: 'Temperature'
       }
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.LineChart(document.getElementById('proyecto4'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart);