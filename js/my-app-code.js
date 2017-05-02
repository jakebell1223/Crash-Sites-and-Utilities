require(["esri/map",
        "esri/layers/FeatureLayer",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/renderers/HeatmapRenderer",
        "esri/layers/ImageParameters",
//        "dojo/dom",
//        "dojo/on",
//        "dojo/query",
        "dojo/domReady!"
              ], function (Map, FeatureLayer, ArcGISDynamicMapServiceLayer, HeatmapRenderer, ImageParameters, dom, on, query) {
    //    var layer, visibleLayerIds = [];
    var map = new Map("map", {
        basemap: "topo",
        center: [-104.9903, 39.7392],
        minZoom: 7,
        maxZoom: 14,
        zoom: 10

    });

    //    var imageParameters = new ImageParameters();
    //    imageParameters.layerIds = [0];
    //    imageParameters.layerOption = ImageParameters.LAYER_OPTION_SHOW;
    //
    //    layer = new FeatureLayer("http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Crash_Data/FeatureServer/0", {
    //        "imageParameters": imageParameters
    //    });
    //    map.addLayer(layer);
    //
    //    on(dom.byId("layer0CheckBox"), "change", updateLayerVisibility);
    //    on(dom.byId("layer1CheckBox"), "change", updateLayerVisibility);
    //    on(dom.byId("layer2CheckBox"), "change", updateLayerVisibility);
    //
    //    function updateLayerVisibility() {
    //        var inputs = query(".list_item");
    //        var inputCount = inputs.length;
    //        visibleLayerIds = "http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/sewage/FeatureServer/0";
    //
    //        for (var i = 0; i < inputCount; i++) {
    //            if (inputs[i].checked) {
    //                visibleLayerIds.push(inputs[i].value);
    //            }
    //        }
    //
    //        if (visibleLayerIds.length === 0) {
    //            visibleLayerIds.push(-1);
    //        }
    //
    //        layer.setVisibleLayers(visibleLayerIds);
    //    }

    var serviceURL = "http://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Crash_Data/FeatureServer/0";
    var heatmapFeatureLayer = new FeatureLayer(serviceURL);
    var heatmapRenderer = new HeatmapRenderer({
        blurRadius: 22,
        colorStops: [
            {
                ratio: 0,
                color: "rgba(0, 0, 255, 0)"
            },
            {
                ratio: 0.2,
                color: "rgb(0, 0, 255)"
            },
            {
                ratio: 0.4,
                color: "rgb(255, 0, 255)"
            },
            {
                ratio: 0.6,
                color: "rgb(255, 0, 0)"
            }],
        maxPixelIntensity: 300,
        minPixelIntensity: 10
    });
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