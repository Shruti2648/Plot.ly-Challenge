var data = "samples.json"

function dropdownMenu() {
    d3.json(data).then(function(data) {
        var names = data.names
        console.log(names)
    
        var dropdownMenu = d3.select("#selDataset")

        names.forEach((name) => {
            dropdownMenu.append("option").text(name).property("value", name)
        })

        var firstSample = names[0]
        buildTable(firstSample)
        // buildChart(firstSample)
    
    });
}

dropdownMenu()

function optionChanged(sampleID) {
    buildTable(sampleID)
    // buildChart(sampleID)
}

function buildTable(sampleID) {

    d3.json(data).then(function(data) {
        var metadata = data.metadata

        var results = metadata.filter(x => x.id == sampleID)
        console.log(results)
        var tableDiv = d3.select("#sample-metadata")
        Object.entries(results[0]).forEach(function([key, value]) {
            var row = tableDiv.append("tr");
            row.append("td").html(`<strong><font size = '1'>${key}</font></strong>:`);
            row.append('td').html(`<font size ='1'>${value}</font>`);
        });
    })
}
