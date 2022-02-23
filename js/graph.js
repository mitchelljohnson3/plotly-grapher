const GRAPH_RESOLUTION = 5000;
$(document).ready(function () {
    $("#chart").append(graph())
})

// returns the plotly 3d plot
function graph() {
    // which function are we getting the points from?
    var points = ORB_2Px()
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

// returns the 1s graph points
function ORB_1S() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        point[0] = R10()
        point = PolarToCartesian(point)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}
// returns the 2s (n=2 l=0 m=0) graph points
function ORB_2S() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        point[0] = R20()
        point = PolarToCartesian(point)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}
// returns the 2px (n=2 l=1 m=0) graph points
function ORB_2Px() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        var point2 = randomPoint(true)
        point[0] = R21(), point[1] = Y10()
        point2[0] = R21(), point2[1] = -Y10()
        point = PolarToCartesian(point)
        point2 = PolarToCartesian(point2)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
        x.push(point2[0]), y.push(point2[1]), z.push(point2[2])
    }
    return [x, y, z]
}
// returns the 2py (n=2 l=1 m=-1) graph points
function ORB_2Py() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        var point2 = randomPoint(true)
        point[0] = R21(), point[1] = Y10()
        point2[0] = R21(), point2[1] = -Y10()
        point = PolarToCartesian(point)
        point2 = PolarToCartesian(point2)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
        x.push(point2[0]), y.push(point2[1]), z.push(point2[2])
    }
    return [x, y, z]
}
// returns the 2pz (n=2 l=1 m=1) graph points
function ORB_2Pz() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        var point2 = randomPoint(true)
        point[0] = R21(), point[1] = Y10()
        point2[0] = R21(), point2[1] = -Y10()
        point = PolarToCartesian(point)
        point2 = PolarToCartesian(point2)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
        x.push(point2[0]), y.push(point2[1]), z.push(point2[2])
    }
    return [x, y, z]
}