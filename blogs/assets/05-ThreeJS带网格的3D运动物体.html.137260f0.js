import{_ as e,o as t,c as n,f as i}from"./app.0f8c3f5f.js";const r={},a=i(`<h1 id="threejs\u5E26\u7F51\u683C\u76843d\u8FD0\u52A8\u7269\u4F53" tabindex="-1"><a class="header-anchor" href="#threejs\u5E26\u7F51\u683C\u76843d\u8FD0\u52A8\u7269\u4F53" aria-hidden="true">#</a> ThreeJS\u5E26\u7F51\u683C\u76843D\u8FD0\u52A8\u7269\u4F53</h1><h2 id="index-html\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#index-html\u6587\u4EF6" aria-hidden="true">#</a> index.html\u6587\u4EF6</h2><pre><code>&lt;!DOCTYPE html&gt;
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
&lt;!-- \u5F15\u5165\u76F8\u5173\u6587\u4EF6 --&gt;
&lt;script src=&quot;./js-three/three.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;./js-three/Stats.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;./js-three/Tween.js&quot;&gt;&lt;/script&gt;
&lt;!-- \u5F15\u5165demo\u6587\u4EF6 --&gt;
&lt;script src=&quot;./js-three/demo3.js&quot;&gt;&lt;/script&gt;
</code></pre><h2 id="threedemo-js-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#threedemo-js-\u6587\u4EF6" aria-hidden="true">#</a> threeDemo.js \u6587\u4EF6</h2><pre><code>// \u5F00\u59CB\u8FD0\u52A8
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

// 1\u3001\u521D\u59CB\u5316\u573A\u666F
var scene;
function initScene() {
    scene = new THREE.Scene();
}

// 2\u3001\u521D\u59CB\u5316\u76F8\u673A
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

// 3\u3001\u521D\u59CB\u5316\u6E32\u67D3\u5668
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

    // \u5DE6\u4E0A\u89D2 FPS\uFF1A\u6E38\u620F\u6D41\u7545\u5EA6/\u5C4F\u5E55\u5237\u65B0\u7387  MS\uFF1A\u7F51\u7EDC\u5EF6\u8FDF   MB\uFF1A
    stats = new Stats();
    stats.domElement.style.position = &#39;absolute&#39;;
    stats.domElement.style.left = &#39;0px&#39;;
    stats.domElement.style.top = &#39;0px&#39;;
    document.getElementById(&#39;canvasdiv&#39;).appendChild(stats.domElement);
}

// 4\u3001\u5B9E\u65F6\u6E32\u67D3\u2014\u2014\u8FD0\u52A8
function animation() {
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
    // \u8FD0\u52A8\u65B9\u5F0F1
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    // \u8FD0\u52A8\u65B9\u5F0F2
    // mesh.rotateX(-0.01); 
    // mesh.rotateY(-0.01);
    // mesh.rotateZ(-0.01);
}

// 5\u3001\u521D\u59CB\u5316\u706F\u5149
var light;
function initLight() {
    light = new THREE.AmbientLight(0xFF0000);
    light.position.set(100, 100, 200);
    scene.add(light);
}

// 6\u3001\u7ED8\u5236\u7F51\u683C
function initGrid() {
    var grid = new THREE.GridHelper(1000, 50);
    grid.setColors(0x0000ff, 0x808080);
    scene.add(grid);
}

// 7\u3001\u521D\u59CB\u53163d\u51E0\u4F55\u6B63\u65B9\u5F62
var cube;
var mesh;
function initObject() {
    // \u521B\u5EFA\u51E0\u4F55\u4F53
    var geometry = new THREE.BoxGeometry(100, 100, 100);
    for (var i = 0; i &lt; geometry.faces.length; i += 2) {  
        var hex = Math.random() * 0xffffff;  // \u516D\u4E2A\u9762\u968F\u673A\u989C\u8272
        geometry.faces[i].color.setHex(hex);
        geometry.faces[i + 1].color.setHex(hex);
    }
    // \u6750\u6599
    var material = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors
    });
    // \u51E0\u4F55\u4F53\u548C\u6750\u6599\u5408\u6210
    mesh = new THREE.Mesh(geometry, material);
    mesh.position = new THREE.Vector3(0, 0, 0);
    scene.add(mesh);
}
</code></pre>`,5),o=[a];function s(d,c){return t(),n("div",null,o)}const l=e(r,[["render",s],["__file","05-ThreeJS\u5E26\u7F51\u683C\u76843D\u8FD0\u52A8\u7269\u4F53.html.vue"]]);export{l as default};
