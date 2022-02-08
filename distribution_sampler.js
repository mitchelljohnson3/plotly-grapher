function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function one_s_radius() {
    // uses rejection sampling to sample our custom distribution
    const PDF_RANGE = 0.5413
    const PDF_DOMAIN = 7.69
    while (true) {
        var x = randomRange(0.0, PDF_DOMAIN)
        var u = randomRange(0.0, PDF_DOMAIN)
        var r = 2.0 * Math.pow(1.0, (3.0 / 2.0)) * Math.pow(Math.E, x)
        PDF = Math.pow(x, 2.0) * Math.pow(r, 2.0)
        if (u <= (PDF / (PDF_RANGE * x))) return Math.round(x * 10) / 10
    }
}


const N = 10000
var res = {}
for (let i = 0; i < N; i++) {
    var tmp = one_s_radius()
    if (tmp in res) res[tmp]++
    else res[tmp] = 1
}
var keys = Object.keys(res)
keys.sort()
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], res[keys[i]])
}