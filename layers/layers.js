var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_3DF_1 = new ol.format.GeoJSON();
var features_3DF_1 = format_3DF_1.readFeatures(json_3DF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3DF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3DF_1.addFeatures(features_3DF_1);
var lyr_3DF_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3DF_1, 
                style: style_3DF_1,
                popuplayertitle: '3DF',
                interactive: true,
                title: '<img src="styles/legend/3DF_1.png" /> 3DF'
            });
var format_GEoestablecimientosTresdeFebrero_2 = new ol.format.GeoJSON();
var features_GEoestablecimientosTresdeFebrero_2 = format_GEoestablecimientosTresdeFebrero_2.readFeatures(json_GEoestablecimientosTresdeFebrero_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEoestablecimientosTresdeFebrero_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEoestablecimientosTresdeFebrero_2.addFeatures(features_GEoestablecimientosTresdeFebrero_2);
var lyr_GEoestablecimientosTresdeFebrero_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEoestablecimientosTresdeFebrero_2, 
                style: style_GEoestablecimientosTresdeFebrero_2,
                popuplayertitle: 'GEo establecimientos Tres de Febrero',
                interactive: true,
    title: 'GEo establecimientos Tres de Febrero<br />\
    <img src="styles/legend/GEoestablecimientosTresdeFebrero_2_0.png" /> Municipal<br />\
    <img src="styles/legend/GEoestablecimientosTresdeFebrero_2_1.png" /> Privado<br />\
    <img src="styles/legend/GEoestablecimientosTresdeFebrero_2_2.png" /> Provincial<br />\
    <img src="styles/legend/GEoestablecimientosTresdeFebrero_2_3.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_3DF_1.setVisible(true);lyr_GEoestablecimientosTresdeFebrero_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_3DF_1,lyr_GEoestablecimientosTresdeFebrero_2];
lyr_3DF_1.set('fieldAliases', {'IN1': 'IN1', 'OBJECTID': 'OBJECTID', 'Entidad': 'Entidad', 'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'SAG': 'SAG', 'FDC': 'FDC', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_GEoestablecimientosTresdeFebrero_2.set('fieldAliases', {'C�digo del Establecimiento': 'C�digo del Establecimiento', 'Nombre': 'Nombre', 'Tipolog�a (sigla)': 'Tipolog�a (sigla)', 'Categor�a de tipolog�a': 'Categor�a de tipolog�a', 'Especialidad': 'Especialidad', 'Domicilio': 'Domicilio', 'Localidad': 'Localidad', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Dependencia': 'Dependencia', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_3DF_1.set('fieldImages', {'IN1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Entidad': 'TextEdit', 'Objeto': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'SAG': 'TextEdit', 'FDC': 'TextEdit', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_GEoestablecimientosTresdeFebrero_2.set('fieldImages', {'C�digo del Establecimiento': 'TextEdit', 'Nombre': 'TextEdit', 'Tipolog�a (sigla)': 'TextEdit', 'Categor�a de tipolog�a': 'TextEdit', 'Especialidad': 'TextEdit', 'Domicilio': 'TextEdit', 'Localidad': 'TextEdit', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Dependencia': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_3DF_1.set('fieldLabels', {'IN1': 'no label', 'OBJECTID': 'no label', 'Entidad': 'no label', 'Objeto': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAM': 'no label', 'SAG': 'no label', 'FDC': 'no label', 'SHAPE_STAr': 'no label', 'SHAPE_STLe': 'no label', });
lyr_GEoestablecimientosTresdeFebrero_2.set('fieldLabels', {'C�digo del Establecimiento': 'no label', 'Nombre': 'inline label - visible with data', 'Tipolog�a (sigla)': 'no label', 'Categor�a de tipolog�a': 'no label', 'Especialidad': 'no label', 'Domicilio': 'no label', 'Localidad': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Dependencia': 'inline label - visible with data', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_GEoestablecimientosTresdeFebrero_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});