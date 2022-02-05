const GRAPH_RESOLUTION = 5000;
$(document).ready(function () {
    $("#chart").append(one_s_graph())
})

function one_s_graph() {
    points = one_s_points()
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

function one_s_points() {
    var x_arr = [], y_arr = [], z_arr = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        // calculate random latitude and longitude
        var u1 = Math.random(), u2 = Math.random() // calculate two random numbers
        var lat = (Math.acos((2 * u1) - 1) - (Math.PI / 2)) // calculate random latitude
        var lon = (2 * Math.PI * u2) // calculate random longitude
        // convert lat, lon into cartesian coordinates
        var x = Math.cos(lat) * Math.cos(lon)
        var y = Math.cos(lat) * Math.sin(lon)
        var z = Math.sin(lat)
        // randomly assign coordinate a radius based on the PDF of 1s electron
        var radius = one_s_radius()
        // apply radius to each point
        x *= radius, y *= radius, z *= radius
        // add coordinate to lists
        x_arr.push(x), y_arr.push(y), z_arr.push(z)
    }
    return { "x": x_arr, "y": y_arr, "z": z_arr }
}

// samples the Electron PDF and returns the x value
function one_s_radius() {
    var foundone = false
    while (!foundone) {
        // randomly picks 2 numbers within the domain of the PDF (probability density function)
        var r1 = randomRange(0.0, 4.38), r2 = randomRange(0.0, 4.38)
        // p = 2Zr / n, n being principal quantum number i.e. number of protons
        // and Z being effective nucelar charge i.e. number of protons in the atom
        var p = 2.0 * r1
        var r = 2.0 * Math.pow(1.0, (3.0 / 2.0)) * Math.pow(Math.E, (-1.0 * p)) // radial wave function
        var y = Math.sqrt((1.0 / (4.0 * Math.PI))) // angular wave function
        var w = r * y // wave function
        var E = Math.pow(w, 2.0) // electron probablity density function
        if (r2 < E) return r1 // if 
    }
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}