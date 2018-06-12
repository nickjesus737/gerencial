var option1 = { min: 0, max: 250, yellowFrom: 200, yellowTo: 230, redFrom: 230, redTo: 250, minorTicks: 5 };
var gauge1;

var option2 = { min: 0, max: 13, yellowFrom: 9, yellowTo: 11, redFrom: 11, redTo: 13, minorTicks: 5 };
var gauge2;

function drawGauge1() {
  gaugeData1 = new google.visualization.DataTable();
  gaugeData1.addColumn('number', 'Empleados');
  gaugeData1.addRows(1);
  gaugeData1.setCell(0, 0, 82);

  gauge1 = new google.visualization.Gauge(document.getElementById('gaugeChart1'));
  gauge1.draw(gaugeData1, option1);
}

function changeTemp(dir) {
  gaugeData1.setValue(0, 0, gaugeData1.getValue(0, 0) + dir * 20);
  gauge1.draw(gaugeData1, option1);
  gaugeData2.setValue(0, 0, gaugeData2.getValue(0, 0) + dir * 1);
  gauge2.draw(gaugeData2, option2);
}

function drawGauge2() {
  gaugeData2 = new google.visualization.DataTable();
  gaugeData2.addColumn('number', 'Proyectos');
  gaugeData2.addRows(1);
  gaugeData2.setCell(0, 0, 5);

  gauge2 = new google.visualization.Gauge(document.getElementById('gaugeChart2'));
  gauge2.draw(gaugeData2, option2);
}

google.charts.setOnLoadCallback(drawGauge1);
google.charts.setOnLoadCallback(drawGauge2);