const GRAPH_RESOLUTION = 10000;
$(document).ready(function () {
    $("#chart").append(GRAPH10())
})

function GRAPH10() {
    var points = P10()
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

function P10() {
    var x_arr = [], y_arr = [], z_arr = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = RANDOM_POINT()
        var radius = R10()
        point[0] *= radius, point[1] *= radius, point[2] *= radius
        x_arr.push(point[0]), y_arr.push(point[1]), z_arr.push(point[2])
    }
    return [x_arr, y_arr, z_arr]
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

// returns random float value within the range of min - max
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
// returns decimal rounded to d decimal places
function round(num, d) {
    var r = Math.pow(10, d)
    return Math.round((num + Number.EPSILON) * r) / r
}
// returns rad radians converted to degrees
function DegToRad(rad) {
    return rad / (180 / Math.PI)
}
// returns deg degrees converted to radians
function RadToDeg(deg) {
    return deg * (180 / Math.PI)
}

// returns random 3d point in sphere (cartesian coordinates)
// functions perfectly, picks points all with a radius of 1 from 0,0
function RANDOM_POINT() {
    // calculate random latitude and longitude
    var u1 = Math.random(), u2 = Math.random() // calculate two random numbers
    var lat = (Math.acos((2.0 * u1) - 1.0) - (Math.PI / 2.0)) // calculate random latitude
    var lon = (2.0 * Math.PI * u2) // calculate random longitude
    // convert lat, lon into cartesian coordinates
    var x = Math.cos(lat) * Math.cos(lon)
    var y = Math.cos(lat) * Math.sin(lon)
    var z = Math.sin(lat)
    return [x, y, z]
}

// functioning perfectly
function POLAR_TO_CARTESIAN(point) {
    var radius = point[0], theta = DegToRad(point[1]), phi = DegToRad(point[2])
    var X = radius * Math.sin(phi) * Math.cos(theta)
    var Y = radius * Math.sin(phi) * Math.sin(theta)
    var Z = radius * Math.cos(phi)
    return [round(X, 2), round(Y, 2), round(Z, 2)]
}

// functioning perfectly
function CARTESIAN_TO_POLAR(point) {
    var X = point[0], Y = point[1], Z = point[2]
    var radius = Math.sqrt(X * X + Y * Y + Z * Z)
    var theta = RadToDeg(Math.atan2(Y, X))
    var phi = RadToDeg(Math.acos(Z / radius))
    return [round(radius, 2), round(theta, 2), round(phi, 2)]
}