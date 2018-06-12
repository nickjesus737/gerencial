var options2 = {
    title: 'Personas asignadas a las fases',
    width: '550',
    height: '350'
};

function drawChartGerente() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Position' });
    data.addColumn({ type: 'string', id: 'Name' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
        ['Modister', 'Inicio', new Date(2018, 0, 1), new Date(2018, 3, 31)],
        ['Modister', 'Elaboración', new Date(2018, 1, 28), new Date(2018, 4, 15)],
        ['Modister', 'Construcción', new Date(2018, 4, 1), new Date(2018, 5, 13)],
        ['Modister', 'Transición', new Date(2018, 1, 28), new Date(2018, 5, 13)],
        ['MasterBus', 'Inicio', new Date(2018, 1, 12), new Date(2018, 2, 12)],
        ['MasterBus', 'Elaboración', new Date(2018, 1, 23), new Date(2018, 2, 23)],
        ['MasterBus', 'Construcción', new Date(2018, 2, 23), new Date(2018, 5, 8)],
        ['MasterBus', 'Transición', new Date(2018, 1, 23), new Date(2018, 5, 13)],
        ['BoardTask', 'Inicio', new Date(2017, 9, 3), new Date(2017, 10, 2)],
        ['BoardTask', 'Elaboración', new Date(2017, 9, 26), new Date(2017, 10, 30)],
        ['BoardTask', 'Construcción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['BoardTask', 'Transición', new Date(2017, 9, 26), new Date(2018, 5, 13)],
        ['EasyCounts', 'Inicio', new Date(2018, 4, 14), new Date(2018, 5, 8)],
        ['EasyCounts', 'Elaboración', new Date(2018, 5, 1), new Date(2018, 5, 13)],
        ['EasyCounts', 'Transición', new Date(2018, 5, 1), new Date(2018, 5, 13)],
        ['FastDrug', 'Inicio', new Date(2018, 5, 11), new Date(2018, 5, 13)]]);

    var optionsG = {
        title: 'Fases del proyecto',
        width: '100%',
        height: '100%'
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChartGerente'));
    chart.draw(data, optionsG);
}

function drawChart1() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Nombre' });
    data.addColumn({ type: 'string', id: 'Fase' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
        ['Luis Montalvo', 'Inicio', new Date(2018, 0, 1), new Date(2018, 3, 15)],
        ['Jose Lorca', 'Inicio', new Date(2018, 0, 1), new Date(2018, 3, 15)],
        ['Javier Casas', 'Inicio', new Date(2018, 0, 1), new Date(2018, 3, 15)],
        ['Maria Nieves', 'Inicio', new Date(2018, 0, 1), new Date(2018, 3, 15)],
        ['Amparo Cañada', 'Elaboración', new Date(2018, 1, 29), new Date(2018, 4, 30)],
        ['Eugenio Reyes', 'Elaboración', new Date(2018, 1, 29), new Date(2018, 4, 30)],
        ['Mercedes Mosquera', 'Elaboración', new Date(2018, 1, 29), new Date(2018, 4, 30)],
        ['Cristian Morgado', 'Elaboración', new Date(2018, 1, 29), new Date(2018, 4, 30)],
        ['Jose Vallejo', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Jose Ibañez', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Rosario Coll', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Esperanza Verde', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Catalina Anaya', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Maria Escalona', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Martin Monroy', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['David Aragones', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['David Marmol', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Marc Ledo', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Rocio Cornejo', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Juan Carlos Bustamante', 'Contrucción', new Date(2018, 4, 1), new Date(2018, 8, 30)],
        ['Monica Gordon', 'Transición', new Date(2018, 1, 1), new Date(2018, 10, 30)],
        ['Maria Arrabal', 'Transición', new Date(2018, 1, 1), new Date(2018, 10, 30)],
        ['Jesus Marchena', 'Transición', new Date(2018, 1, 1), new Date(2018, 10, 30)],
        ['Marcos Segura', 'Transición', new Date(2018, 1, 1), new Date(2018, 10, 30)],
        ['Joseph Arques', 'Transición', new Date(2018, 1, 1), new Date(2018, 10, 30)]]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChart1'));
    chart.draw(data, options2);
}

function drawChart2() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Nombre' });
    data.addColumn({ type: 'string', id: 'Fase' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
        ['Juan Benitez', 'Inicio', new Date(2018, 1, 12), new Date(2018, 2, 12)],
        ['Maria Londoño', 'Inicio', new Date(2018, 1, 12), new Date(2018, 2, 12)],
        ['Monica Nogales', 'Inicio', new Date(2018, 1, 12), new Date(2018, 2, 12)],
        ['Antonia Araujo', 'Elaboración', new Date(2018, 1, 23), new Date(2018, 2, 23)],
        ['Esther Caro', 'Elaboración', new Date(2018, 1, 23), new Date(2018, 2, 23)],
        ['Vincent Maria', 'Elaboración', new Date(2018, 1, 23), new Date(2018, 2, 23)],
        ['Ruben Mira', 'Contrucción', new Date(2018, 2, 23), new Date(2018, 5, 8)],
        ['Daniel Arjona', 'Contrucción', new Date(2018, 2, 23), new Date(2018, 5, 8)],
        ['Marta Palacios', 'Contrucción', new Date(2018, 2, 23), new Date(2018, 5, 8)],
        ['Patricia Orta', 'Contrucción', new Date(2018, 2, 23), new Date(2018, 5, 8)],
        ['Lorena Palazaon', 'Contrucción', new Date(2018, 2, 23), new Date(2018, 5, 8)],
        ['Alfredo Villanueva', 'Contrucción', new Date(2018, 2, 23), new Date(2018, 5, 8)],
        ['Francisco Galan', 'Transición', new Date(2018, 1, 23), new Date(2018, 7, 6)],
        ['Ignacio Pablo', 'Transición', new Date(2018, 1, 23), new Date(2018, 7, 6)],
        ['Silvia Polo', 'Transición', new Date(2018, 1, 23), new Date(2018, 7, 6)]]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChart2'));
    chart.draw(data, options2);
}

function drawChart3() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Nombre' });
    data.addColumn({ type: 'string', id: 'Fase' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
        ['Veronica Palmer', 'Inicio', new Date(2017, 9, 3), new Date(2017, 10, 2)],
        ['Milagros Vela', 'Inicio', new Date(2017, 9, 3), new Date(2017, 10, 2)],
        ['Juan Izquierdo', 'Inicio', new Date(2017, 9, 3), new Date(2017, 10, 2)],
        ['Jose Coronado', 'Elaboración', new Date(2017, 9, 26), new Date(2017, 10, 30)],
        ['Cristian Nevado', 'Elaboración', new Date(2017, 9, 26), new Date(2017, 10, 30)],
        ['Julio Fajardo', 'Elaboración', new Date(2017, 9, 26), new Date(2017, 10, 30)],
        ['Teresa Balboa', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Maria Tapia', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Eduardo Salado', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Julio Segovia', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Ignacio Fuente', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Jenniffer Alvarez', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Samuel Terron', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Lucia Manso', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Silvia Rius', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Sebastian Gallo', 'Contrucción', new Date(2017, 10, 30), new Date(2018, 3, 22)],
        ['Ana Espinoza', 'Transición', new Date(2017, 9, 26), new Date(2018, 5, 22)],
        ['Joan Mosquera', 'Transición', new Date(2017, 9, 26), new Date(2018, 5, 22)],
        ['Jose Ferrando', 'Transición', new Date(2017, 9, 26), new Date(2018, 5, 22)],
        ['Juan Huertas', 'Transición', new Date(2017, 9, 26), new Date(2018, 5, 22)]]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChart3'));
    chart.draw(data, options2);
}

function drawChart4() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Nombre' });
    data.addColumn({ type: 'string', id: 'Fase' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
        ['Juan Molano', 'Inicio', new Date(2018, 4, 14), new Date(2018, 5, 8)],
        ['Jaime Florez', 'Elaboración', new Date(2018, 5, 1), new Date(2018, 5, 29)],
        ['Ana Uribe', 'Elaboración', new Date(2018, 5, 1), new Date(2018, 5, 29)],
        ['Susana Torrecilla', 'Contrucción', new Date(2018, 5, 29), new Date(2018, 7, 29)],
        ['Ana Jerez', 'Contrucción', new Date(2018, 5, 29), new Date(2018, 7, 29)],
        ['Plinio Puello', 'Contrucción', new Date(2018, 5, 29), new Date(2018, 7, 29)],
        ['Daniel Angulo', 'Contrucción', new Date(2018, 5, 29), new Date(2018, 7, 29)],
        ['Guillermo Ferrandez', 'Contrucción', new Date(2018, 5, 29), new Date(2018, 7, 29)],
        ['Pedro Teran', 'Transición', new Date(2018, 5, 1), new Date(2018, 9, 22)],
        ['Susana Badia', 'Transición', new Date(2018, 5, 1), new Date(2018, 9, 22)]]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChart4'));
    chart.draw(data, options2);
}

function drawChart5() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn({ type: 'string', id: 'Nombre' });
    data.addColumn({ type: 'string', id: 'Fase' });
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });
    data.addRows([
        ['Santiago Acero', 'Inicio', new Date(2018, 5, 11), new Date(2018, 6, 11)],
        ['Angeles Posada', 'Inicio', new Date(2018, 5, 11), new Date(2018, 6, 11)],
        ['Carala Montañes', 'Elaboración', new Date(2018, 6, 7), new Date(2018, 7, 10)],
        ['Fernando Moya', 'Elaboración', new Date(2018, 6, 7), new Date(2018, 7, 10)],
        ['Maria Bocanegra', 'Contrucción', new Date(2018, 7, 10), new Date(2018, 10, 8)],
        ['Jesús Acendra', 'Contrucción', new Date(2018, 7, 10), new Date(2018, 10, 8)],
        ['Julian Mesa', 'Contrucción', new Date(2018, 7, 10), new Date(2018, 10, 8)],
        ['Consuelo Paez', 'Contrucción', new Date(2018, 7, 10), new Date(2018, 10, 8)],
        ['Jose Salva', 'Contrucción', new Date(2018, 7, 10), new Date(2018, 10, 8)],
        ['Eugenio Sales', 'Transición', new Date(2018, 6, 7), new Date(2018, 11, 27)],
        ['Jose Salom', 'Transición', new Date(2018, 6, 7), new Date(2018, 11, 27)],
        ['Maria Morilla', 'Transición', new Date(2018, 6, 7), new Date(2018, 11, 27)]]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.Timeline(document.getElementById('timelineChart5'));
    chart.draw(data, options2);
}

google.charts.setOnLoadCallback(drawChartGerente);
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);