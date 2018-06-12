var options3 = {
    width: '550',
    height: '440',
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
        ['1', 'Modelado de Negocio', 'Inicio', new Date(2018, 0, 1), new Date(2018, 1, 28), null, 100, null],
        ['2', 'Requisitos', 'Inicio', new Date(2018, 1, 15), new Date(2018, 3, 31), null, 100, '1'],
        ['3', 'Analisis y Diseño', 'Elaboración', new Date(2018, 1, 28), new Date(2018, 4, 15), null, 100, '1,2'],
        ['4', 'Implementación', 'Construcción', new Date(2018, 4, 1), new Date(2018, 8, 30), null, 10, '3'],
        ['5', 'Pruebas', 'Transición', new Date(2018, 1, 1), new Date(2018, 9, 31), null, 40, null],
        ['6', 'Despliegue', 'Transición', new Date(2018, 9, 1), new Date(2018, 10, 30), null, 0, '4,5']
    ]);

    var chart = new google.visualization.Gantt(document.getElementById('ganttChart1'));

    chart.draw(data, options3);
}

function drawChart2() {

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
        ['1', 'Modelado de Negocio', 'Inicio', new Date(2018, 1, 12), new Date(2018, 1, 23), null, 100, null],
        ['2', 'Requisitos', 'Inicio', new Date(2018, 1, 20), new Date(2018, 2, 12), null, 100, '1'],
        ['3', 'Analisis y Diseño', 'Elaboración', new Date(2018, 1, 23), new Date(2018, 2, 23), null, 100, '1,2'],
        ['4', 'Implementación', 'Construcción', new Date(2018, 2, 23), new Date(2018, 5, 8), null, 100, '3'],
        ['5', 'Pruebas', 'Transición', new Date(2018, 1, 23), new Date(2018, 7, 3), null, 70, null],
        ['6', 'Despliegue', 'Transición', new Date(2018, 5, 8), new Date(2018, 7, 6), null, 15, '4,5']
    ]);

    var chart = new google.visualization.Gantt(document.getElementById('ganttChart2'));

    chart.draw(data, options3);
}

function drawChart3() {

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
        ['1', 'Modelado de Negocio', 'Inicio', new Date(2017, 9, 3), new Date(2017, 9, 26), null, 100, null],
        ['2', 'Requisitos', 'Inicio', new Date(2017, 9, 24), new Date(2017, 10, 2), null, 100, '1'],
        ['3', 'Analisis y Diseño', 'Elaboración', new Date(2017, 9, 26), new Date(2017, 10, 30), null, 100, '1,2'],
        ['4', 'Implementación', 'Construcción', new Date(2017, 10, 30), new Date(2018, 3, 22), null, 100, '3'],
        ['5', 'Pruebas', 'Transición', new Date(2017, 9, 26), new Date(2018, 5, 15), null, 90, null],
        ['6', 'Despliegue', 'Transición', new Date(2018, 3, 22), new Date(2018, 5, 22), null, 50, '4,5']
    ]);

    var chart = new google.visualization.Gantt(document.getElementById('ganttChart3'));

    chart.draw(data, options3);
}

function drawChart4() {

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
        ['1', 'Modelado de Negocio', 'Inicio', new Date(2018, 4, 14), new Date(2018, 5, 1), null, 100, null],
        ['2', 'Requisitos', 'Inicio', new Date(2018, 4, 28), new Date(2018, 5, 8), null, 100, '1'],
        ['3', 'Analisis y Diseño', 'Elaboración', new Date(2018, 5, 1), new Date(2018, 5, 29), null, 40, '1,2'],
        ['4', 'Implementación', 'Construcción', new Date(2018, 5, 29), new Date(2018, 7, 29), null, 0, '3'],
        ['5', 'Pruebas', 'Transición', new Date(2018, 5, 1), new Date(2018, 9, 12), null, 10, null],
        ['6', 'Despliegue', 'Transición', new Date(2018, 8, 24), new Date(2018, 9, 22), null, 0, '4,5']
    ]);

    var chart = new google.visualization.Gantt(document.getElementById('ganttChart4'));

    chart.draw(data, options3);
}

function drawChart5() {

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
        ['1', 'Modelado de Negocio', 'Inicio', new Date(2018, 5, 11), new Date(2018, 6, 7), null, 10, null],
        ['2', 'Requisitos', 'Inicio', new Date(2018, 5, 22), new Date(2018, 6, 11), null, 0, '1'],
        ['3', 'Analisis y Diseño', 'Elaboración', new Date(2018, 6, 7), new Date(2018, 7, 10), null, 0, '1,2'],
        ['4', 'Implementación', 'Construcción', new Date(2018, 7, 10), new Date(2018, 10, 8), null, 0, '3'],
        ['5', 'Pruebas', 'Transición', new Date(2018, 6, 7), new Date(2018, 11, 20), null, 0, null],
        ['6', 'Despliegue', 'Transición', new Date(2018, 11, 7), new Date(2018, 11, 27), null, 0, '4,5']
    ]);

    var chart = new google.visualization.Gantt(document.getElementById('ganttChart5'));

    chart.draw(data, options3);
}

google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);

