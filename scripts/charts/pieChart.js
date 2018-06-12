function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Tecnología');
    data.addColumn('number', 'Percentage');
    data.addRows([
        ['Angular', 3],
        ['Django', 2],
        ['Laravel', 2],
        ['React', 1],
        ['Ruby on Rails', 1],
        ['Vuejs', 1]
    ]);

    // Set chart options
    var options = { 'title': ''};

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);