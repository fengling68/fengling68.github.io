import{_ as n,o as r,c as t,b as e,d as a}from"./app.7bfbe7ae.js";const i={},c=e("h1",{id:"threejs\u753B\u6709\u7EB9\u7406\u7684\u7269\u4F53",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#threejs\u753B\u6709\u7EB9\u7406\u7684\u7269\u4F53","aria-hidden":"true"},"#"),a(" ThreeJS\u753B\u6709\u7EB9\u7406\u7684\u7269\u4F53")],-1),o=e("pre",null,[e("code",null,`/* 
    1\u3001\u521D\u59CB\u5316\u573A\u666F
    2\u3001\u521D\u59CB\u5316\u76F8\u673A
    3\u3001\u521D\u59CB\u5316\u6E32\u67D3\u5668
    4\u3001\u5B9E\u65F6\u6E32\u67D3
    5\u3001\u753B\u6709\u7EB9\u7406\u7684\u7269\u4F53
        (1)\u753B\u5E73\u9762\uFF0C\u5E76\u8D4B\u4E88\u7EB9\u7406\u5750\u6807\uFF1B
        (2)\u52A0\u8F7D\u7EB9\u7406\uFF1B
        (3)\u5C06\u7EB9\u7406\u7528\u4E8E\u6750\u8D28\uFF1B
*/

var scene;          // \u573A\u666F
var camera;         // \u76F8\u673A
var renderer;       // \u6E32\u67D3\u5668
var width = document.getElementById('canvasdiv').clientWidth;
var height = document.getElementById('canvasdiv').clientHeight;


// \u5F00\u59CB\u6267\u884C
threeStart();
function threeStart() {
    initScene();        // \u521D\u59CB\u5316\u573A\u666F
    initCamera();       // \u521D\u59CB\u5316\u76F8\u673A
    initRender();       // \u521D\u59CB\u5316\u6E32\u67D3\u5668
    initRect();         // \u52A0\u8F7D\u7EB9\u7406\u56FE
    render();           // \u5FAA\u73AF\u52A8\u753B
}

// 1\u3001\u573A\u666F
function initScene() {
    scene = new THREE.Scene();
}
// 2\u3001\u76F8\u673A
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 0;  
    camera.position.y = 0; 
    camera.position.z = 10;
}
// 3\u3001\u6E32\u67D3\u5668
function initRender() {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);
    document.getElementById('canvasdiv').appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0.6);
}
// 4\u3001\u5B9E\u65F6\u6E32\u67D3
function render() {
    renderer.clear();
    renderer.render(scene, camera);
    // requestAnimationFrame(render);     
}

// 5\u3001\u753B\u7EB9\u7406\u7269\u4F53
function initRect() {
    // \u753B\u5E73\u9762
    var geo = new THREE.PlaneGeometry(500, 400, 1, 1);
    // \u7EB9\u7406\u5750\u6807
    geo.vertices[0].uv = new THREE.Vector2(0,0);
    geo.vertices[1].uv = new THREE.Vector2(2,0);
    geo.vertices[2].uv = new THREE.Vector2(2,2);
    geo.vertices[3].uv = new THREE.Vector2(0,2);
    // \u52A0\u8F7D\u7EB9\u7406
    var texture = THREE.ImageUtils.loadTexture("./img/aaa.jpg", null, function (t) {        // \u6709\u8DE8\u57DF\u95EE\u9898

    });
    // \u5C06\u7EB9\u7406\u5E94\u7528\u4E8E\u6750\u8D28
    var material = new THREE.MeshBasicMaterial({
        map: texture
    })
    var mesh = new THREE.Mesh(geo, material);
    scene.add(mesh);
}
`)],-1),d=[c,o];function s(h,l){return r(),t("div",null,d)}const u=n(i,[["render",s],["__file","04-ThreeJS\u753B\u6709\u7EB9\u7406\u7684\u7269\u4F53.html.vue"]]);export{u as default};
