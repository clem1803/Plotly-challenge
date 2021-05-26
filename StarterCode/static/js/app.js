// read Json file
d3.json("samples.json").then((data) => {
    console.log(data);

    // get list of name
    var name = data.names;
    console.log(name);

    // get the drop down menu
    var dropDown = d3.select("#selDataset");

    // add name to menu list
    name.forEach(function (id) {
        var item = dropDown.append("option");
        item.text(id);
        item.attr("value", id);
    });

    // select metadata and match it with name


});


function createMetadata(selectedId) {
    d3.json("samples.json").then((data) => {

        // get list of metadata
        var metaData = data.metadata;

        // Loop through list
        var filteredResult = metaData.filter(item1 => item1.id == selectedId)[0];
        console.log(filteredResult);
        var meta = d3.select("#sample-metadata");
        Object.entries(filteredResult).forEach(([k, v]) => {
            meta.append("h6").text(`${k}: ${v}`);
        });
    });
}
function optionChanged(selectedValue) {
    createMetadata(selectedValue);
}