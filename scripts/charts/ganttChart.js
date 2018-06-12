function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}

function drawChart1() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['1', 'Modelado de Negocio', 'inicio', new Date(2018, 0, 1), new Date(2018, 1, 28), null, 100, null],
        ['2', 'Requisitos', 'inicio', new Date(2018, 1, 15), new Date(2018, 3, 31), null, 25, '1'],
        ['3', 'Analisis y Diseño', 'elaboracion', new Date(2018, 1, 28), new Date(2018, 4, 15), null, 20, '1,2'],
        ['4', 'Implementación', 'construccion', new Date(2018, 4, 1), new Date(2018, 8, 30), null, 0, '3'],
        ['5', 'Pruebas', 'transicion', new Date(2018, 1, 1), new Date(2018, 9, 31), null, 10, null],
        ['6', 'Despliegue', 'transicion', new Date(2018, 9, 1), new Date(2018, 10, 30), null, 0, '4,5']
    ]);

    var options = {
        gantt: {
            criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
            arrow: {
              angle: 100,
              width: 2,
              color: 'black',
              radius: 0 
            }
          }
    };

    var chart = new google.visualization.Gantt(document.getElementById('ganttChart1'));

    chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart1);
