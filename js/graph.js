const GRAPH_RESOLUTION = 30000;
$(document).ready(function () {
    $("#chart").append(graph())
})

// returns the plotly 3d plot
function graph() {
    // which function are we getting the points from?
    var points = test2()
    var data = [{
        x: points[0], y: points[1], z: points[2],
        mode: 'markers', type: 'scatter3d',
        marker: {
            color: 'rgb(23, 190, 207)',
            size: 2
        }
    }];
    var layout = {
        height: 1000,
        width: 2000,
        xaxis: {
            color: 'rgb(0, 0, 0)'
        },
        yaxis: {
            color: 'rgb(0, 0, 0)'
        },
        zaxis: {
            color: 'rgb(0, 0, 0)'
        }
    }
    return Plotly.newPlot('chart', data, layout);
}

function test1() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var theta = randomRange(0.0, Math.PI)
        var phi = randomRange(0.0, 2 * Math.PI)
        phi = RadToDeg(phi)
        var r = solve1(theta)
        theta = RadToDeg(theta)
        var point = PolarToCartesian([r, theta, phi])
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}

function test2() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var theta = randomRange(0.0, Math.PI)
        var phi = randomRange(0.0, 2 * Math.PI)
        var r = solve2(theta, phi)
        theta = RadToDeg(theta)
        phi = RadToDeg(phi)
        var point = PolarToCartesian([r, theta, phi])
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}

function test3() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var theta = randomRange(0.0, Math.PI)
        var phi = randomRange(0.0, 2 * Math.PI)
        var r = solve3(theta, phi)
        theta = RadToDeg(theta)
        phi = RadToDeg(phi)
        var point = PolarToCartesian([r, theta, phi])
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}

function solve1(theta) {
    var val = Math.sqrt(3 / (4 * Math.PI)) * Math.cos(theta)
    return Math.pow(val, 2)
}

function solve2(theta, phi) {
    var comp = math.complex('-i')
    var val = Math.sqrt(3 / (8 * Math.PI)) * Math.sin(theta) * Math.pow(Math.E, (-comp * phi))
    return Math.pow(val, 2)
}

function solve3(theta, phi) {
    var comp = math.complex('i')
    var val = (-1 * Math.sqrt(3 / (8 * Math.PI))) * Math.sin(theta) * Math.pow(Math.E, (comp * phi))
    return Math.pow(val, 2)
}