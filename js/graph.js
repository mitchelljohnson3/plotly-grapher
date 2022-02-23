const GRAPH_RESOLUTION = 5000;
$(document).ready(function () {
    $("#chart").append(graph())
})

// returns the plotly 3d plot
function graph() {
    // which function are we getting the points from?
    var points = ORB_2S()
    var data = [{
        x: points[0], y: points[1], z: points[2],
        mode: 'markers', type: 'scatter3d',
        marker: {
            color: 'rgb(23, 190, 207)',
            size: 2
        }
    }];
    return Plotly.newPlot('chart', data, { height: 1000, width: 2000 });
}