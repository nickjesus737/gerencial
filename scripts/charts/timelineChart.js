 function drawChart1() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Position' });
    data.addColumn({ type: 'string', id: 'Name' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
    [ 'Proyecto 1', 'Inicio', new Date(2000, 0, 1), new Date(2000, 0, 31) ],
    [ 'Proyecto 1', 'Elaboración', new Date(2000, 0, 31), new Date(2000, 1, 29) ],
    [ 'Proyecto 1', 'Construcción', new Date(2000, 1, 29), new Date(2000, 2, 31) ],
    [ 'Proyecto 1', 'Transición', new Date(2000, 2, 31), new Date(2000, 3, 30) ],
    [ 'Proyecto 2', 'Inicio', new Date(2000, 0, 1), new Date(2000, 0, 31) ],
    [ 'Proyecto 2', 'Elaboración', new Date(2000, 0, 31), new Date(2000, 1, 29) ],
    [ 'Proyecto 2', 'Construcción', new Date(2000, 1, 29), new Date(2000, 2, 31) ],
    [ 'Proyecto 2', 'Transición', new Date(2000, 2, 31), new Date(2000, 3, 30) ],
    [ 'Proyecto 3', 'Inicio', new Date(2000, 0, 1), new Date(2000, 0, 31) ],
    [ 'Proyecto 3', 'Elaboración', new Date(2000, 0, 31), new Date(2000, 1, 29) ],
    [ 'Proyecto 3', 'Construcción', new Date(2000, 1, 29), new Date(2000, 2, 31) ],
    [ 'Proyecto 3', 'Transición', new Date(2000, 2, 31), new Date(2000, 3, 30) ],
    [ 'Proyecto 4', 'Inicio', new Date(2000, 0, 1), new Date(2000, 0, 31) ],
    [ 'Proyecto 4', 'Elaboración', new Date(2000, 0, 31), new Date(2000, 1, 29) ],
    [ 'Proyecto 4', 'Construcción', new Date(2000, 1, 29), new Date(2000, 2, 31) ],
    [ 'Proyecto 4', 'Transición', new Date(2000, 2, 31), new Date(2000, 3, 30) ],
    [ 'Proyecto 5', 'Inicio', new Date(2000, 0, 1), new Date(2000, 0, 31) ],
    [ 'Proyecto 5', 'Elaboración', new Date(2000, 0, 31), new Date(2000, 1, 29) ],
    [ 'Proyecto 5', 'Construcción', new Date(2000, 1, 29), new Date(2000, 2, 31) ],
    [ 'Proyecto 5', 'Transición', new Date(2000, 2, 31), new Date(2000, 3, 30) ]]);

    var options = {
        title: 'Fases del proyecto',      
       width: '100%', 
       height: '100%'	  
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChart1'));
    chart.draw(data, options);
 }
 
 function drawChart2() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Nombre' });
    data.addColumn({ type: 'string', id: 'Fase' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
    [ 'Empleado 1', 'Inicio', new Date(2000, 0, 1), new Date(2000, 0, 31) ],
    [ 'Empleado 2', 'Inicio', new Date(2000, 0, 1),  new Date(2000, 0, 31) ],
    [ 'Empleado 3', 'Elaboración', new Date(2000, 1, 1),  new Date(2000, 1, 29) ],
    [ 'Empleado 4', 'Elaboración', new Date(2000, 1, 1),  new Date(2000, 1, 29) ],
    [ 'Empleado 5', 'Contrucción', new Date(2000, 2, 1),  new Date(2000, 4, 31) ],
    [ 'Empleado 6', 'Contrucción', new Date(2000, 2, 1),  new Date(2000, 4, 31) ],
    [ 'Empleado 7', 'Contrucción', new Date(2000, 2, 1),  new Date(2000, 4, 31) ],
    [ 'Empleado 8', 'Contrucción', new Date(2000, 2, 1),  new Date(2000, 4, 31) ],
    [ 'Empleado 9', 'Transición', new Date(2000, 1, 1),  new Date(2000, 5, 30) ],
    [ 'Empleado 10', 'Transición', new Date(2000, 1, 1),  new Date(2000, 5, 30) ]]);

    var options = {
        title: 'Personas asignadas a las fases',      
        width: '100%', 
        height: 350	  
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChart2'));
    chart.draw(data, options);
 }

 google.charts.setOnLoadCallback(drawChart2);
 google.charts.setOnLoadCallback(drawChart1);