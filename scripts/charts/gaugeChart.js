var option1 = { min: 0, max: 500, yellowFrom: 350, yellowTo: 450, redFrom: 450, redTo: 500, minorTicks: 5 };
var gauge1;

var option2 = { min: 0, max: 20, yellowFrom: 13, yellowTo: 17, redFrom: 17, redTo: 20, minorTicks: 5 };
var gauge2;

function drawGauge1() {
  gaugeData1 = new google.visualization.DataTable();
  gaugeData1.addColumn('number', 'Empleados');
  gaugeData1.addRows(1);
  gaugeData1.setCell(0, 0, 200);

  gauge1 = new google.visualization.Gauge(document.getElementById('gaugeChart1'));
  gauge1.draw(gaugeData1, option1);
}

function changeTemp(dir) {
  gaugeData1.setValue(0, 0, gaugeData1.getValue(0, 0) + dir * 25);
  gauge1.draw(gaugeData1, option1);
  gaugeData2.setValue(0, 0, gaugeData2.getValue(0, 0) + dir * 1);
  gauge2.draw(gaugeData2, option2);
}

function drawGauge2() {
  gaugeData2 = new google.visualization.DataTable();
  gaugeData2.addColumn('number', 'Proyectos');
  gaugeData2.addRows(1);
  gaugeData2.setCell(0, 0, 8);

  gauge2 = new google.visualization.Gauge(document.getElementById('gaugeChart2'));
  gauge2.draw(gaugeData2, option2);
}

google.charts.setOnLoadCallback(drawGauge1);
google.charts.setOnLoadCallback(drawGauge2);