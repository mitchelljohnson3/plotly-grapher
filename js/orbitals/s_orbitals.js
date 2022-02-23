// returns the 1s graph points
function ORB_1S() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        point[0] = R10()
        point = PolarToCartesian(point)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}
// returns the 2s (n=2 l=0 m=0) graph points
function ORB_2S() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        point[0] = R20()
        point = PolarToCartesian(point)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
    }
    return [x, y, z]
}