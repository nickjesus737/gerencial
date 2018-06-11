function drawMainDashboard() {
    var dashboard = new google.visualization.Dashboard(document.getElementById('proyecto12'));
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
    var categoryPicker3 = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'picker3',
        'options': {
            'filterColumnIndex': 4,
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
        ['Proyecto', 'Front-end', 'Back-end','# Desarrolladores', 'Sistema'],
        ['Michael', 'Angular', 'Php', 12, 'Web'],
        ['Elisa', 'React', 'Django', 20, 'Android'],
        ['Robert', 'Angular', 'Laravel', 7, 'Web'],
        ['John', 'Vuejs', 'Ruby on Rails', 54, 'iOs'],
        ['Jessica', 'React', 'Django', 22, 'Android'],
        ['Aaron', 'Angular', 'Django', 3, 'Web'],
        ['Margareth', 'Vuejs', 'Laravel', 42, 'Web'],
        ['Miranda', 'React', 'Ruby on Rails',33, 'iOs']
    ]);
    dashboard.bind([slider, categoryPicker, categoryPicker2, categoryPicker3], [table, column]);
    dashboard.draw(data);
}

google.charts.setOnLoadCallback(drawMainDashboard);
