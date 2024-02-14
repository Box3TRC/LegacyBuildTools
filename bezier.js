//1D bezier function 一维贝塞尔函数（两点之间连线）
function oneBezier(t, st, ed, b) {
    const { x: x1, y: y1, z: z1 } = st;
    const { x: x2, y: y2, z: z2 } = ed;
    let x = x1 + (x2 - x1) * t;
    let y = y1 + (y2 - y1) * t;
    let z = z1 + (z2 - z1) * t;
    voxels.setVoxel(x, y, z, b)
    return
}
//usage 用法
for (let i = 0; i < 1; i += 0.01)//differentiation 微分
    oneBezier(i, new Box3Vector3(0, 0, 0), new Box3Vector3(10, 10, 10), "medium_gray");


//2D bezier function 二维贝塞尔函数（三点确定一条曲线）
function twoBezier(t, p1, p2, p3, b) {//t:不用管，是曲线的过程值，从0~1循环建立曲线,eihei,oho,aha:三个点的x、z坐标 yy:y坐标 b:方块
    const { x: x1, y: y1, z: z1 } = p1;
    const { x: cx, y: cy, z: cz } = p2;
    const { x: x2, y: y2, z: z2 } = p3;
    let x = (1 - t) * (1 - t) * x1 + 2 * t * (1 - t) * cx + t * t * x2;
    let y = (1 - t) * (1 - t) * y1 + 2 * t * (1 - t) * cy + t * t * y2;
    let z = (1 - t) * (1 - t) * z1 + 2 * t * (1 - t) * cz + t * t * z2;
    voxels.setVoxel(x, y, z, b);
    return;
}
//usage
for (let i = 0; i < 1; i += 0.01)//differentiation 微分
    twoBezier(i, new Box3Vector3(0, 0, 0), new Box3Vector3(0, 10, 0), new Box3Vector3(0, 10, 10), "medium_gray");