ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([25.187864, 33.629401, 45.296439, 44.281298]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TR_il_nufus_1 = new ol.format.GeoJSON();
var features_TR_il_nufus_1 = format_TR_il_nufus_1.readFeatures(json_TR_il_nufus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TR_il_nufus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR_il_nufus_1.addFeatures(features_TR_il_nufus_1);
var lyr_TR_il_nufus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TR_il_nufus_1, 
                style: style_TR_il_nufus_1,
                popuplayertitle: "TR_il_nufus",
                interactive: true,
    title: 'TR_il_nufus<br />\
    <img src="styles/legend/TR_il_nufus_1_0.png" /> 86047 - 278335<br />\
    <img src="styles/legend/TR_il_nufus_1_1.png" /> 278335 - 409865<br />\
    <img src="styles/legend/TR_il_nufus_1_2.png" /> 409865 - 647205<br />\
    <img src="styles/legend/TR_il_nufus_1_3.png" /> 647205 - 1273519<br />\
    <img src="styles/legend/TR_il_nufus_1_4.png" /> 1273519 - 15655924<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_TR_il_nufus_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TR_il_nufus_1];
lyr_TR_il_nufus_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'nufus': 'nufus', });
lyr_TR_il_nufus_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'nufus': 'Range', });
lyr_TR_il_nufus_1.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'nufus': 'inline label - always visible', });
lyr_TR_il_nufus_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});