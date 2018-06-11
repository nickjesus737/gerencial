google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
      data.addColumn('number', 'Empleados Contratados');
      data.addColumn('number', 'Proyectos Realizados');

      data.addRows([
        [2013, 100, 20],
        [2014, 200, 30],
        [2015, 270, 50],
        [2016, 390, 80],
        [2017, 500, 100]
      ]);

      var options = {
        title: 'Personal Contratado y Proyectos Desarrollados',
        hAxis: {
          title: 'Año',
          viewWindow: {
            min: [2012],
            max: [2018]
          }
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('doubleColumnChart'));

      chart.draw(data, options);
    }