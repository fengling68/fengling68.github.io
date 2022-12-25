import{_ as e,o as t,c as i,a as n,b as r}from"./app.8609dc96.js";const o={},a=n("h1",{id:"three-js简单示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#three-js简单示例","aria-hidden":"true"},"#"),r(" three.js简单示例")],-1),c=n("p",null,"/* 使用相机将场景渲染到网页上 1、初始化场景 2、初始化相机 3、初始化渲染器 4、实时渲染 5、初始化光源 6、画正方体并在 实时渲染 中使物体运动 7、画渐变线条 实时渲染 中使物体运动 */",-1),s=n("pre",null,[n("code",null,`var scene;          // 场景
var camera;         // 相机
var renderer;       // 渲染器
var width = document.getElementById('canvasdiv').clientWidth;
var height = document.getElementById('canvasdiv').clientHeight;


// 0、开始执行
threeStart();

function threeStart() {     // 注意内部函数执行的顺序
    initScene();            // 初始化场景
    initCamera();           // 初始化相机
    initRender();           // 初始化渲染器
    initLight();            // 创建光源
    initRect();             // 画正方形
    initLine();             // 画线    
    render();               // 循环动画
}

// 1、初始化场景————所有物体的容器
function initScene() {
    scene = new THREE.Scene();
}

// 2、初始化相机————决定那个角度场景的展示
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 0;              // 初始X位置：负值物体偏右，正值物体偏左
    camera.position.y = 0;              // 初始Y位置：负值物体偏上，正值物体偏下
    camera.position.z = 10;             // 初始Z位置：负值物体靠前，正值物体靠后
}

// 3、初始化渲染器
function initRender() {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);    // 设置渲染器的宽高、颜色、透明度，并添加到dom中
    document.getElementById('canvasdiv').appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0.6);
}

// 4、实时渲染 == 循环渲染
function render() {
    renderer.clear();
    renderer.render(scene, camera);     // 渲染(场景，相机，目标，清除上次画布内容)
    requestAnimationFrame(render);      // 游戏循环：让浏览器去执行一次参数中的函数

    // 改变物体位置，让物体运动
    cube.rotation.x += 0.02;            
    cube.rotation.y += 0.02;

    if( line.position.x > 3 ){
        line.position.x = 0.005;
        line.position.y = 0.005;
    }else{
        line.position.x += 0.005;
        line.position.y += 0.005;
    }
    
    // 改变相机位置，让物体运动
    // camera.position.x += 0.01;       
}

// 5、初始化光源(基类光源+5类)
var light;
function initLight() {
    // (0)基类光 new Light()

    // (1)环境光
    /* light = new THREE.AmbientLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light); */

    // (2)点光源
    light = new THREE.PointLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light);

    // (3)聚光灯
    /* light = new THREE.SpotLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light); */

    // (4)方向光
    /* light = new THREE.DirectionalLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light); */

    // (4)区域光 —— 有问题
    /* light = new THREE.AreaLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light); */
}

// 6、初始化几何正方体
var cube;        
function initRect() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);    // 几何体的长宽高
    var material = new THREE.MeshLambertMaterial({      // 属性样式  MeshBasicMaterial
        color: 0x00ffff
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

// 7、初始化一条渐变的线条
var line;
function initLine() {
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial({ 
        vertexColors: true,         // 是否使用顶点颜色
        linewidth: 50                // 线条宽度
    });
    // 创建两点
    var p1 = new THREE.Vector3( -2, 2, 0 );
    var p2 = new THREE.Vector3( 2, -2, 0 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    // 创建两点颜色
    var color1 = new THREE.Color( 0x0000ff ), 
        color2 = new THREE.Color( 0xff00ff );    
    geometry.colors.push( color1, color2 );
    // 连线
    line = new THREE.Line( geometry, material, THREE.LinePieces );
    scene.add(line);
}
`)],-1),l=[a,c,s];function d(h,f){return t(),i("div",null,l)}const m=e(o,[["render",d],["__file","03-ThreeJS简单示例.html.vue"]]);export{m as default};
