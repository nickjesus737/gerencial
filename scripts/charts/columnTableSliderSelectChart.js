function drawMainDashboard() {
    var dashboard = new google.visualization.Dashboard(document.getElementById('columnTableSliderSelectChart'));
    var slider = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'slider',
        'options': {
            'filterColumnIndex': 3,
            'ui': {
                'labelStacking': 'vertical',
                'label': 'Número de Desarrolladores',
            }
        }
    });
    var categoryPicker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'picker',
        'options': {
            'filterColumnIndex': 1,
            'ui': {
                'labelStacking': 'vertical',
                'label': 'Front-end:',
                'allowTyping': false,
                'allowMultiple': false
            }
        }
    });
    var categoryPicker2 = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'picker2',
        'options': {
            'filterColumnIndex': 2,
            'ui': {
                'labelStacking': 'vertical',
                'label': 'Back-end:',
                'allowTyping': false,
                'allowMultiple': false
            }
        }
    });
    var column = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'chart1',
        'options': {
            hAxis: {
                title: 'Proyecto'
             },
             vAxis: {
                title: 'Desarrolladores'
             },
        },
        'view': { 'columns': [0, 3] }
    });
    var table = new google.visualization.ChartWrapper({
        'chartType': 'Table',
        'containerId': 'chart2',
        'options': {
        }
    });
    var data = google.visualization.arrayToDataTable([
        ['Proyecto', 'Front-end', 'Back-end','# Desarrolladores'],
        ['Modister', 'Angular', 'Django', 25],
        ['MasterBus', 'Vuejs', 'Laravel', 15],
        ['BoardTask', 'React', 'Laravel', 20],
        ['EasyCounts', 'Angular', 'Django', 10],
        ['FastDrug', 'Angular', 'Ruby', 12]
    ]);
    dashboard.bind([slider, categoryPicker, categoryPicker2], [table, column]);
    dashboard.draw(data);
}

google.charts.setOnLoadCallback(drawMainDashboard);
