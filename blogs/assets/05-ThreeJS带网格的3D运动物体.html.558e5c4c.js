import{_ as e,o as t,c as n,f as i}from"./app.40d45622.js";const r={},a=i(`<h1 id="threejs带网格的3d运动物体" tabindex="-1"><a class="header-anchor" href="#threejs带网格的3d运动物体" aria-hidden="true">#</a> ThreeJS带网格的3D运动物体</h1><h2 id="index-html文件" tabindex="-1"><a class="header-anchor" href="#index-html文件" aria-hidden="true">#</a> index.html文件</h2><pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        body{
            margin: 0;
            padding: 0;
        }
        #canvasdiv{
           width: 100%;
           height: 700px;
           background: black;
           /* margin: 20px auto; */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;canvasdiv&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;!-- 引入相关文件 --&gt;
&lt;script src=&quot;./js-three/three.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;./js-three/Stats.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;./js-three/Tween.js&quot;&gt;&lt;/script&gt;
&lt;!-- 引入demo文件 --&gt;
&lt;script src=&quot;./js-three/demo3.js&quot;&gt;&lt;/script&gt;
</code></pre><h2 id="threedemo-js-文件" tabindex="-1"><a class="header-anchor" href="#threedemo-js-文件" aria-hidden="true">#</a> threeDemo.js 文件</h2><pre><code>// 开始运动
threeStart();
function threeStart() {
    initThree();
    initCamera();
    initScene();
    initLight();
    initObject();
    initGrid();
    animation();
}

// 1、初始化场景
var scene;
function initScene() {
    scene = new THREE.Scene();
}

// 2、初始化相机
var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 100;
    camera.position.y = 300;
    camera.position.z = 600;
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });
}

// 3、初始化渲染器
var renderer;
var stats;
function initThree() {
    width = document.getElementById(&#39;canvasdiv&#39;).clientWidth;
    height = document.getElementById(&#39;canvasdiv&#39;).clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);
    document.getElementById(&#39;canvasdiv&#39;).appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 1.0);

    // 左上角 FPS：游戏流畅度/屏幕刷新率  MS：网络延迟   MB：
    stats = new Stats();
    stats.domElement.style.position = &#39;absolute&#39;;
    stats.domElement.style.left = &#39;0px&#39;;
    stats.domElement.style.top = &#39;0px&#39;;
    document.getElementById(&#39;canvasdiv&#39;).appendChild(stats.domElement);
}

// 4、实时渲染——运动
function animation() {
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
    // 运动方式1
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    // 运动方式2
    // mesh.rotateX(-0.01); 
    // mesh.rotateY(-0.01);
    // mesh.rotateZ(-0.01);
}

// 5、初始化灯光
var light;
function initLight() {
    light = new THREE.AmbientLight(0xFF0000);
    light.position.set(100, 100, 200);
    scene.add(light);
}

// 6、绘制网格
function initGrid() {
    var grid = new THREE.GridHelper(1000, 50);
    grid.setColors(0x0000ff, 0x808080);
    scene.add(grid);
}

// 7、初始化3d几何正方形
var cube;
var mesh;
function initObject() {
    // 创建几何体
    var geometry = new THREE.BoxGeometry(100, 100, 100);
    for (var i = 0; i &lt; geometry.faces.length; i += 2) {  
        var hex = Math.random() * 0xffffff;  // 六个面随机颜色
        geometry.faces[i].color.setHex(hex);
        geometry.faces[i + 1].color.setHex(hex);
    }
    // 材料
    var material = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors
    });
    // 几何体和材料合成
    mesh = new THREE.Mesh(geometry, material);
    mesh.position = new THREE.Vector3(0, 0, 0);
    scene.add(mesh);
}
</code></pre>`,5),o=[a];function s(d,c){return t(),n("div",null,o)}const l=e(r,[["render",s],["__file","05-ThreeJS带网格的3D运动物体.html.vue"]]);export{l as default};
