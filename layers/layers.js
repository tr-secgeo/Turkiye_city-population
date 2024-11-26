var wms_layers = [];

var format_TR_il_nufus_0 = new ol.format.GeoJSON();
var features_TR_il_nufus_0 = format_TR_il_nufus_0.readFeatures(json_TR_il_nufus_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR_il_nufus_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR_il_nufus_0.addFeatures(features_TR_il_nufus_0);
var lyr_TR_il_nufus_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TR_il_nufus_0, 
                style: style_TR_il_nufus_0,
                popuplayertitle: "TR_il_nufus",
                interactive: true,
    title: 'TR_il_nufus<br />\
    <img src="styles/legend/TR_il_nufus_0_0.png" /> 86047 - 278335<br />\
    <img src="styles/legend/TR_il_nufus_0_1.png" /> 278335 - 409865<br />\
    <img src="styles/legend/TR_il_nufus_0_2.png" /> 409865 - 647205<br />\
    <img src="styles/legend/TR_il_nufus_0_3.png" /> 647205 - 1273519<br />\
    <img src="styles/legend/TR_il_nufus_0_4.png" /> 1273519 - 15655924<br />'
        });

lyr_TR_il_nufus_0.setVisible(true);
var layersList = [lyr_TR_il_nufus_0];
lyr_TR_il_nufus_0.set('fieldAliases', {'id': 'id', 'name': 'name', 'nufus': 'nufus', });
lyr_TR_il_nufus_0.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'nufus': 'Range', });
lyr_TR_il_nufus_0.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'nufus': 'inline label - always visible', });
lyr_TR_il_nufus_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});