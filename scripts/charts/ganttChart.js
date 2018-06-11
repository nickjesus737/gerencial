google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

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
        ['1', 'Modelado de Negocio', 'inicio', new Date(2000, 0, 1), new Date(2000, 1, 29), null, 100, null],
        ['2', 'Requisitos', 'inicio', new Date(2000, 1, 15), new Date(2000, 3, 31), null, 25, '1'],
        ['3', 'Analisis y Diseño', 'elaboracion', new Date(2000, 1, 20), new Date(2000, 4, 15), null, 20, '1,2'],
        ['4', 'Implementación', 'construccion', new Date(2000, 4, 1), new Date(2000, 8, 30), null, 0, '3'],
        ['5', 'Pruebas', 'transicion', new Date(2000, 1, 1), new Date(2000, 9, 31), null, 10, null],
        ['6', 'Despliegue', 'transicion', new Date(2000, 9, 1), new Date(2000, 10, 30), null, 0, '4,5']
    ]);

    var options = {
    };

    var chart = new google.visualization.Gantt(document.getElementById('ganttChart'));

    chart.draw(data, options);
}