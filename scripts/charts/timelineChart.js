 function drawChartGerente() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Position' });
    data.addColumn({ type: 'string', id: 'Name' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
    [ 'Modister', 'Inicio', new Date(2018, 0, 1), new Date(2018, 3, 31) ],
    [ 'Modister', 'Elaboración', new Date(2018, 1, 28), new Date(2018, 4, 15) ],
    [ 'Modister', 'Construcción', new Date(2018, 4, 1), new Date(2018, 5, 13) ],
    [ 'Modister', 'Transición', new Date(2018, 1, 28), new Date(2018, 5, 13) ],
    [ 'MasterBus', 'Inicio', new Date(2018, 1, 12), new Date(2018, 2, 12) ],
    [ 'MasterBus', 'Elaboración', new Date(2018, 1, 23), new Date(2018, 2, 23) ],
    [ 'MasterBus', 'Construcción', new Date(2018, 2, 23), new Date(2018, 5, 8) ],
    [ 'MasterBus', 'Transición', new Date(2018, 1, 23), new Date(2018, 5, 13) ],
    [ 'BoardTask', 'Inicio', new Date(2017, 9, 3), new Date(2017, 10, 2) ],
    [ 'BoardTask', 'Elaboración', new Date(2017, 9, 26), new Date(2017, 10, 30) ],
    [ 'BoardTask', 'Construcción', new Date(2017, 10, 30), new Date(2018, 3, 22) ],
    [ 'BoardTask', 'Transición', new Date(2017, 9, 26), new Date(2018, 5, 13) ],
    [ 'EasyCounts', 'Inicio', new Date(2018, 4, 14), new Date(2018, 5, 8) ],
    [ 'EasyCounts', 'Elaboración', new Date(2018, 5, 1), new Date(2018, 5, 13) ],
    [ 'EasyCounts', 'Transición', new Date(2018, 5, 1), new Date(2018, 5, 13) ],
    [ 'FastDrug', 'Inicio', new Date(2018, 5, 11), new Date(2018, 5, 13) ]]);

    var options = {
        title: 'Fases del proyecto',      
       width: '100%', 
       height: '100%'	  
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChartGerente'));
    chart.draw(data, options);
 }
 
 function drawChart1() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Nombre' });
    data.addColumn({ type: 'string', id: 'Fase' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
    [ 'Empleado 1', 'Inicio', new Date(2018, 0, 1), new Date(2018, 3, 15) ],
    [ 'Empleado 2', 'Inicio', new Date(2018, 0, 1),  new Date(2018, 3, 15) ],
    [ 'Empleado 3', 'Inicio', new Date(2018, 0, 1), new Date(2018, 3, 15) ],
    [ 'Empleado 4', 'Inicio', new Date(2018, 0, 1),  new Date(2018, 3, 15) ],
    [ 'Empleado 5', 'Elaboración', new Date(2018, 1, 29),  new Date(2018, 4, 30) ],
    [ 'Empleado 6', 'Elaboración', new Date(2018, 1, 29),  new Date(2018, 4, 30) ],
    [ 'Empleado 7', 'Elaboración', new Date(2018, 1, 29),  new Date(2018, 4, 30) ],
    [ 'Empleado 8', 'Elaboración', new Date(2018, 1, 29),  new Date(2018, 4, 30) ],
    [ 'Empleado 9', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 10', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 11', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 12', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 13', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 14', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 15', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 16', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 17', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 18', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 19', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 20', 'Contrucción', new Date(2018, 4, 1),  new Date(2018, 8, 30) ],
    [ 'Empleado 21', 'Transición', new Date(2018, 1, 1),  new Date(2018, 10, 30) ],
    [ 'Empleado 22', 'Transición', new Date(2018, 1, 1),  new Date(2018, 10, 30) ],
    [ 'Empleado 23', 'Transición', new Date(2018, 1, 1),  new Date(2018, 10, 30) ],
    [ 'Empleado 24', 'Transición', new Date(2018, 1, 1),  new Date(2018, 10, 30) ],
    [ 'Empleado 25', 'Transición', new Date(2018, 1, 1),  new Date(2018, 10, 30) ]]);

    var options = {
        title: 'Personas asignadas a las fases',      
        width: '100%', 
        height: 350
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChart1'));
    chart.draw(data, options);
 }

 google.charts.setOnLoadCallback(drawChartGerente);
 google.charts.setOnLoadCallback(drawChart1);