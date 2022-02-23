// -------------------------------- 2P ORBITAL ---------------------------------
// 1S (n=1 l=0 m=0)
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
// -----------------------------------------------------------------------------
// -------------------------------- 2S ORBITAL ---------------------------------
// 2S (n=2 l=0 m=0)
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
// -----------------------------------------------------------------------------