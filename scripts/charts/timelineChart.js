function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Name' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
    [ 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
    [ 'John Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
    [ 'Thomas Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

    var options = {
        title: 'Fases del proyecto',      
       width: '100%', 
       height: '100%'	  
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('proyecto8'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart);

 function drawChart2() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Position' });
    data.addColumn({ type: 'string', id: 'Name' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
    [ 'Proyecto 1', 'Fase 1', new Date(2000, 0, 1), new Date(2000, 0, 31) ],
    [ 'Proyecto 1', 'Fase 2', new Date(2000, 0, 31), new Date(2000, 1, 29) ],
    [ 'Proyecto 1', 'Fase 3', new Date(2000, 1, 29), new Date(2000, 2, 31) ],
    [ 'Proyecto 1', 'Fase 4', new Date(2000, 2, 31), new Date(2000, 3, 30) ],
    [ 'Proyecto 2', 'Fase 1', new Date(2000, 0, 1), new Date(2000, 0, 31) ],
    [ 'Proyecto 2', 'Fase 2', new Date(2000, 0, 31), new Date(2000, 1, 29) ],
    [ 'Proyecto 2', 'Fase 3', new Date(2000, 1, 29), new Date(2000, 2, 31) ],
    [ 'Proyecto 2', 'Fase 4', new Date(2000, 2, 31), new Date(2000, 3, 30) ]]);

    var options = {
        title: 'Fases del proyecto',      
       width: '100%', 
       height: '100%'	  
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('proyecto9'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart2);