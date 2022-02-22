var wms_layers = [];


        var lyr_OSMHumanitarian_0 = new ol.layer.Tile({
            'title': 'OSM Humanitarian',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile-b.openstreetmap.fr/hot/{z}/{x}/{y}.png, http://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png, http://tile-c.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });

        var lyr_WazeWorld_1 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_GooglecnSatellite_2 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_3 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_Croqui_quadras_av_4 = new ol.format.GeoJSON();
var features_Croqui_quadras_av_4 = format_Croqui_quadras_av_4.readFeatures(json_Croqui_quadras_av_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Croqui_quadras_av_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Croqui_quadras_av_4.addFeatures(features_Croqui_quadras_av_4);
var lyr_Croqui_quadras_av_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Croqui_quadras_av_4, 
                style: style_Croqui_quadras_av_4,
                interactive: true,
                title: '<img src="styles/legend/Croqui_quadras_av_4.png" /> Croqui_quadras_av'
            });

lyr_OSMHumanitarian_0.setVisible(true);lyr_WazeWorld_1.setVisible(true);lyr_GooglecnSatellite_2.setVisible(true);lyr_GoogleLabels_3.setVisible(true);lyr_Croqui_quadras_av_4.setVisible(true);
var layersList = [lyr_OSMHumanitarian_0,lyr_WazeWorld_1,lyr_GooglecnSatellite_2,lyr_GoogleLabels_3,lyr_Croqui_quadras_av_4];
lyr_Croqui_quadras_av_4.set('fieldAliases', {'id': 'id', 'quadra': 'quadra', });
lyr_Croqui_quadras_av_4.set('fieldImages', {'id': 'TextEdit', 'quadra': 'TextEdit', });
lyr_Croqui_quadras_av_4.set('fieldLabels', {'id': 'inline label', 'quadra': 'no label', });
lyr_Croqui_quadras_av_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});