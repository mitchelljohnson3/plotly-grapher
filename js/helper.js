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
    return [X, Y, Z]
}
// functioning perfectly
function CartesianToPolar(point) {
    var X = point[0], Y = point[1], Z = point[2]
    var radius = Math.sqrt(X * X + Y * Y + Z * Z)
    var theta = RadToDeg(Math.atan2(Y, X))
    var phi = RadToDeg(Math.acos(Z / radius))
    return [round(radius, 2), round(theta, 2), round(phi, 2)]
}