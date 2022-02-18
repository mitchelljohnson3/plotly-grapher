const GRAPH_RESOLUTION = 10000;
$(document).ready(function () {
    $("#chart").append(GRAPH10())
})

function GRAPH10() {
    var points = P10()
    var data = [{
        x: points["x"], y: points["y"], z: points["z"],
        mode: 'markers', type: 'scatter3d',
        marker: {
            color: 'rgb(23, 190, 207)',
            size: 2
        }
    }];
    return Plotly.newPlot('chart', data, { height: 1000, width: 2000 });
}

function P10() {
    var x_arr = [], y_arr = [], z_arr = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        // generate random 3d point
        var point = randomPoint()
        // sample one s distribution
        var radius = R10()
        // apply radius to each point
        point["x"] *= radius, point["y"] *= radius, point["z"] *= radius
        // add coordinate to lists
        x_arr.push(point["x"]), y_arr.push(point["y"]), z_arr.push(point["z"])
    }
    return { "x": x_arr, "y": y_arr, "z": z_arr }
}

// returns random 3d point in sphere (cartesian coordinates)
function randomPoint() {
    // calculate random latitude and longitude
    var u1 = Math.random(), u2 = Math.random() // calculate two random numbers
    var lat = (Math.acos((2 * u1) - 1) - (Math.PI / 2)) // calculate random latitude
    var lon = (2 * Math.PI * u2) // calculate random longitude
    // convert lat, lon into cartesian coordinates
    var x = Math.cos(lat) * Math.cos(lon)
    var y = Math.cos(lat) * Math.sin(lon)
    var z = Math.sin(lat)
    return { "x": x, "y": y, "z": z }
}

// samples the Electron PDF and returns the x value
function R10() {
    var DOMAIN = 7.69, RANGE = 0.54
    while (true) {
        var x = randomRange(0.0, DOMAIN), u = randomRange(0.0, RANGE)
        var r10 = 2 * Math.pow(1, (3 / 2)) * Math.pow(Math.E, -x)
        var p10 = Math.pow(x, 2) * Math.pow(r10, 2)
        if (u < p10) return Math.round(x * 10) / 10
    }
}
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}