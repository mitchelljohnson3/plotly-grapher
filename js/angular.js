// samples the Y10 (n = 2 l = 1 m = 0)
function Y10() {
    var domain = Math.PI, range = 0.489
    while (true) {
        var theta = randomRange(0.0, domain), u = randomRange(0.0, range)
        var y11 = Math.sqrt((3 / (4 * Math.PI))) * Math.sin(theta)
        if (u < y11) {
            var degrees = RadToDeg(theta)
            return round(degrees, 1)
        }
    }
}
// samples the Y11 (n = 2 l = 1 m = 1)
// sign = true -> Y11 || sign = false -> Y1-1
function Y11(sign) {
    return 0
}