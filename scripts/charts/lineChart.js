function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Tecnologia');
    data.addColumn('number', 'Ganancias');
    data.addRows([
       ['Angular',  3500000],
       ['Veujs',  2000000],
       ['React',  1500000],
       ['Django',  3000000],
       ['Laravel',  2100000],
       ['Ruby On Rails',  1700000],
       ['PHP',  1000000]
    ]);
       
    // Set chart options
    var options = {'title' : '',
       hAxis: {
          title: 'Tecnologia'
       },
       vAxis: {
          title: 'Ganancias'
       },
       lineWidth: 2,
       pointSize: 4,
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.LineChart(document.getElementById('lineChart'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart);