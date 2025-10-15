var vg_1 = "map.vg.json";

vegaEmbed("#vis", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "bar.vg.json";

vegaEmbed("#bar", vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);