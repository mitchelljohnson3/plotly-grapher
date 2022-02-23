// 2P ORBITALS
// 2Px (n=2 l=1 m=0)
function ORB_2Px() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        var point2 = randomPoint(true)
        point[0] = R21(), point[1] = Y10()
        point2[0] = R21(), point2[1] = -Y10()
        point = PolarToCartesian(point)
        point2 = PolarToCartesian(point2)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
        x.push(point2[0]), y.push(point2[1]), z.push(point2[2])
    }
    return [x, y, z]
}
// 2Py (n=2 l=1 m=-1)
function ORB_2Py() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        var point2 = randomPoint(true)
        point[0] = R21(), point[1] = Y10()
        point2[0] = R21(), point2[1] = -Y10()
        point = PolarToCartesian(point)
        point2 = PolarToCartesian(point2)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
        x.push(point2[0]), y.push(point2[1]), z.push(point2[2])
    }
    return [x, y, z]
}
// 2Pz (n=2 l=1 m=1)
function ORB_2Pz() {
    var x = [], y = [], z = []
    for (let i = 0; i < GRAPH_RESOLUTION; i++) {
        var point = randomPoint(true)
        var point2 = randomPoint(true)
        point[0] = R21(), point[1] = Y10()
        point2[0] = R21(), point2[1] = -Y10()
        point = PolarToCartesian(point)
        point2 = PolarToCartesian(point2)
        x.push(point[0]), y.push(point[1]), z.push(point[2])
        x.push(point2[0]), y.push(point2[1]), z.push(point2[2])
    }
    return [x, y, z]
}