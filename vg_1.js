var vg_1 = "map.vg.json";

vegaEmbed("#vis", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "bar.vg.json";

vegaEmbed("#bar", vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_3 = "bar2.vg.json";

vegaEmbed("#stackbar", vg_3).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_4 = "heat.vg.json";

vegaEmbed("#heatmap", vg_4).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);