function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Salary');
    data.addColumn('boolean', 'Full Time Employee');
    data.addRows([
       ['Mike',  {v: 10000, f: '$10,000'}, true],
       ['Jim',   {v:8000,   f: '$8,000'},  false],
       ['Alice', {v: 12500, f: '$12,500'}, true],
       ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ]);

    var options = {
       showRowNumber: true,
       width: '100%',
       height: '250px'
    };
          
    // Instantiate and draw the chart.
    var chart = new google.visualization.Table(document.getElementById('tableChart'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(drawChart); 