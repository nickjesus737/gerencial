function drawChart1() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
       ['Proyectos', 'Vuejs', 'Ruby on Rails', 'React', 'Laravel', 'JavaScript', 'HTML5', 'Django', 'CSS', 'Angular'],
       ['Modister', 0, 0, 0, 0, 5, 30, 40, 5, 20],
       ['Master Bus', 10, 0, 0, 40, 10, 30, 0, 10, 0],
       ['BoardTask', 0, 0, 20, 40, 10, 20, 0, 10, 0],
       ['EasyCounts', 0, 0, 0, 15, 15, 10, 30, 10, 20],
       ['FastDrug', 0, 35, 0, 0, 20, 10, 0, 5, 30],
    ]);

    var options = {
       title: '',
       isStacked: true      
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('steppedAreaChart1'));
    chart.draw(data, options);
 }

 function drawChart2() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
       ['Proyectos', 'Vuejs', 'Ruby on Rails', 'React', 'Laravel', 'JavaScript', 'HTML5', 'Django', 'CSS', 'Angular'],
       ['Juan Benitez', 10, 0, 0, 30, 0, 0, 30, 10, 20],
       ['Jenniffer Alvarez', 0, 0, 30, 0, 10, 20, 0, 40, 0],
       ['Jesús Acendra', 30, 10, 0, 30, 30, 0, 0, 0, 0],
       ['Martin Monroy', 5, 15, 20, 50, 10, 0, 0, 0, 0],
       ['Plinio Puello', 0, 0, 50, 0, 0, 20, 0, 30, 0],
    ]);

    var options = {
       title: '',
       isStacked: true      
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('steppedAreaChart2'));
    chart.draw(data, options);
 }

 function drawChart3() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
       ['Proyectos', 'Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5'],
       ['Juan Benitez', 50, 10, 20, 10, 10],
       ['Jenniffer Alvarez', 10, 30, 0, 50, 10],
       ['Jesús Acendra', 30, 20, 20, 0, 30],
       ['Martin Monroy', 20, 0, 60, 10, 10],
       ['Plinio Puello', 0, 30, 0, 30, 40],
    ]);

    var options = {
       title: 'Dedicacion del empleado por proyecto',
       isStacked: true      
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('steppedAreaChart3'));
    chart.draw(data, options);
 }

 google.charts.setOnLoadCallback(drawChart1);
 google.charts.setOnLoadCallback(drawChart2);
 google.charts.setOnLoadCallback(drawChart3);