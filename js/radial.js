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