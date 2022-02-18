function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function R10() {
    const RANGE = 0.5413, DOMAIN = 5
    while (true) {
        var x = randomRange(0.0, DOMAIN), u = randomRange(0.0, RANGE)
        var fx = Math.pow(x, 2) * Math.pow((2 * Math.pow(1, (3 / 2)) * Math.pow(Math.E, -x)), 2)
        if (u <= fx) return x
    }
}


const N = 10000
var res = {}
for (let i = 0; i < N; i++) {
    var tmp = R10()
    if (tmp in res) res[tmp]++
    else res[tmp] = 1
}
var keys = Object.keys(res)
keys.sort()
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], res[keys[i]])
}