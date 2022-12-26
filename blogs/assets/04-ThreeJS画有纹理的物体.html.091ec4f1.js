import{_ as n,o as r,c as t,a as e,b as a}from"./app.aafb335d.js";const i={},c=e("h1",{id:"threejs画有纹理的物体",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#threejs画有纹理的物体","aria-hidden":"true"},"#"),a(" ThreeJS画有纹理的物体")],-1),o=e("pre",null,[e("code",null,`/* 
    1、初始化场景
    2、初始化相机
    3、初始化渲染器
    4、实时渲染
    5、画有纹理的物体
        (1)画平面，并赋予纹理坐标；
        (2)加载纹理；
        (3)将纹理用于材质；
*/

var scene;          // 场景
var camera;         // 相机
var renderer;       // 渲染器
var width = document.getElementById('canvasdiv').clientWidth;
var height = document.getElementById('canvasdiv').clientHeight;


// 开始执行
threeStart();
function threeStart() {
    initScene();        // 初始化场景
    initCamera();       // 初始化相机
    initRender();       // 初始化渲染器
    initRect();         // 加载纹理图
    render();           // 循环动画
}

// 1、场景
function initScene() {
    scene = new THREE.Scene();
}
// 2、相机
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 0;  
    camera.position.y = 0; 
    camera.position.z = 10;
}
// 3、渲染器
function initRender() {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);
    document.getElementById('canvasdiv').appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0.6);
}
// 4、实时渲染
function render() {
    renderer.clear();
    renderer.render(scene, camera);
    // requestAnimationFrame(render);     
}

// 5、画纹理物体
function initRect() {
    // 画平面
    var geo = new THREE.PlaneGeometry(500, 400, 1, 1);
    // 纹理坐标
    geo.vertices[0].uv = new THREE.Vector2(0,0);
    geo.vertices[1].uv = new THREE.Vector2(2,0);
    geo.vertices[2].uv = new THREE.Vector2(2,2);
    geo.vertices[3].uv = new THREE.Vector2(0,2);
    // 加载纹理
    var texture = THREE.ImageUtils.loadTexture("./img/aaa.jpg", null, function (t) {        // 有跨域问题

    });
    // 将纹理应用于材质
    var material = new THREE.MeshBasicMaterial({
        map: texture
    })
    var mesh = new THREE.Mesh(geo, material);
    scene.add(mesh);
}
`)],-1),d=[c,o];function s(h,l){return r(),t("div",null,d)}const u=n(i,[["render",s],["__file","04-ThreeJS画有纹理的物体.html.vue"]]);export{u as default};
