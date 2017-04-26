require(["esri/map",
        "esri/layers/FeatureLayer",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/renderers/HeatmapRenderer",
        "dojo/domReady!"
              ], function (Map, FeatureLayer, ArcGISDynamicMapServiceLayer, HeatmapRenderer) {
    var map = new Map("map", {
        basemap: "topo",
        center: [-105.48, 39.17],
        zoom: 8

    });

    var serviceURL = "http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Crash_Data/FeatureServer/0";
    var heatmapFeatureLayer = new FeatureLayer(serviceURL);
    var heatmapRenderer = new HeatmapRenderer();
    heatmapFeatureLayer.setRenderer(heatmapRenderer);
    map.addLayer(heatmapFeatureLayer);

    var sewageLayer = new FeatureLayer(
        "http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/sewage/FeatureServer/0"
    );

    map.addLayer(sewageLayer);

    var crashLayer = new FeatureLayer(
        "http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Crash_Data/FeatureServer/0"
    );

    map.addLayer(crashLayer);

});