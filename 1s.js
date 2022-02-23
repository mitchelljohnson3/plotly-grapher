const GRAPH_RESOLUTION = 10000;
$(document).ready(function () {
    $("#chart").append(graph())
})

// theta -> angle from positive z axis towards positive x axis
// theta range [0 - 180] degrees OR [0 - PI] radians
// phi -> angle from positive x axis towards positive y axis
// phi range [0 - 360] degrees OR [0 - 2PI] radians

function graph() {
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

// returns the 1s graph points
function ORB_1S() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint()
        var radius = R10()
        point[0] *= radius, point[1] *= radius, point[2] *= radius
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}
// returns the 2s (n=2 l=0 m=0) graph points
function ORB_2S() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint()
        var radius = R20()
        point[0] *= radius, point[1] *= radius, point[2] *= radius
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}
// returns the 2pz (n=2 l=1 m=-+1) graph points
function ORB_2Pz() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        var radius = R21(), theta = Y11()
        point[0] = radius, point[1] = theta
        point = PolarToCartesian(point)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}

// samples the R10 (n = 1 l = 0 radial electron PDF)
// 1s orbital
function R10() {
    var domain = 7.69, range = 0.54
    while (true) {
        var x = randomRange(0.0, domain), u = randomRange(0.0, range)
        var r10 = 2 * Math.pow(1, (3 / 2)) * Math.pow(Math.E, -x)
        var p10 = Math.pow(x, 2) * Math.pow(r10, 2)
        if (u < p10) return round(x, 1)
    }
}
// samples the R20 (n = 2 l = 0 radial electron PDF)
// 2s orbital
function R20() {
    var domain = 19.5, range = 0.191
    while (true) {
        var x = randomRange(0.0, domain), u = randomRange(0.0, range)
        var r20 = Math.pow((1 / 2), (3 / 2)) * (2 - x) * Math.pow(Math.E, (-x / 2))
        var p20 = Math.pow(x, 2) * Math.pow(r20, 2)
        if (u < p20) return round(x, 1)
    }
}
// samples the R21 (n = 2 l = 1 radial electron PDF)
function R21() {
    var domain = 18.37, range = 0.1954
    while (true) {
        var x = randomRange(0.0, domain), u = randomRange(0.0, range)
        var r21 = (1 / Math.sqrt(3)) * Math.pow((1 / 2), (3 / 2)) * x * Math.pow(Math.E, (-x / 2))
        var p21 = Math.pow(x, 2) * Math.pow(r21, 2)
        if (u < p21) return round(x, 1)
    }
}

// samples the Y10 (n = 2 l = 1 m = 0)
function Y10() {
    var DOMAIN = Math.PI, RANGE = 1.225
    return 0
}
// samples the Y11 (n = 2 l = 1 m = 1)
function Y11() {
    var domain = Math.PI, range = 0.866
    while (true) {
        var theta = randomRange(0.0, domain), u = randomRange(0.0, range)
        var y11 = Math.sqrt((3 / 4)) * Math.sin(theta)
        if (u < y11) {
            var degrees = RadToDeg(theta)
            return round(degrees, 1)
        }
    }
}
// BELOW ARE HELPER FUNCTIONS
// -------------------------------------------------
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
// if flag is true, point returned is in polar coordinates
// if flag is false or nothing by default, cartesian coordinates are returned
function randomPoint(flag = false) {
    // calculate random latitude and longitude
    var u1 = Math.random(), u2 = Math.random() // calculate two random numbers
    var lat = (Math.acos((2.0 * u1) - 1.0) - (Math.PI / 2.0)) // calculate random latitude
    var lon = (2.0 * Math.PI * u2) // calculate random longitude
    // convert lat, lon into cartesian coordinates
    var x = Math.cos(lat) * Math.cos(lon)
    var y = Math.cos(lat) * Math.sin(lon)
    var z = Math.sin(lat)
    if (flag) return CartesianToPolar([x, y, z])
    return [x, y, z]
}
// functioning perfectly
function PolarToCartesian(point) {
    var radius = point[0], theta = DegToRad(point[1]), phi = DegToRad(point[2])
    var X = radius * Math.sin(phi) * Math.cos(theta)
    var Y = radius * Math.sin(phi) * Math.sin(theta)
    var Z = radius * Math.cos(phi)
    return [round(X, 2), round(Y, 2), round(Z, 2)]
}
// functioning perfectly
function CartesianToPolar(point) {
    var X = point[0], Y = point[1], Z = point[2]
    var radius = Math.sqrt(X * X + Y * Y + Z * Z)
    var theta = RadToDeg(Math.atan2(Y, X))
    var phi = RadToDeg(Math.acos(Z / radius))
    return [round(radius, 2), round(theta, 2), round(phi, 2)]
}