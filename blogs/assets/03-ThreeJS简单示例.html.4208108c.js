import{_ as e,o as t,c as i,a as n,b as r}from"./app.097c626c.js";const o={},a=n("h1",{id:"three-js\u7B80\u5355\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#three-js\u7B80\u5355\u793A\u4F8B","aria-hidden":"true"},"#"),r(" three.js\u7B80\u5355\u793A\u4F8B")],-1),c=n("p",null,"/* \u4F7F\u7528\u76F8\u673A\u5C06\u573A\u666F\u6E32\u67D3\u5230\u7F51\u9875\u4E0A 1\u3001\u521D\u59CB\u5316\u573A\u666F 2\u3001\u521D\u59CB\u5316\u76F8\u673A 3\u3001\u521D\u59CB\u5316\u6E32\u67D3\u5668 4\u3001\u5B9E\u65F6\u6E32\u67D3 5\u3001\u521D\u59CB\u5316\u5149\u6E90 6\u3001\u753B\u6B63\u65B9\u4F53\u5E76\u5728 \u5B9E\u65F6\u6E32\u67D3 \u4E2D\u4F7F\u7269\u4F53\u8FD0\u52A8 7\u3001\u753B\u6E10\u53D8\u7EBF\u6761 \u5B9E\u65F6\u6E32\u67D3 \u4E2D\u4F7F\u7269\u4F53\u8FD0\u52A8 */",-1),s=n("pre",null,[n("code",null,`var scene;          // \u573A\u666F
var camera;         // \u76F8\u673A
var renderer;       // \u6E32\u67D3\u5668
var width = document.getElementById('canvasdiv').clientWidth;
var height = document.getElementById('canvasdiv').clientHeight;


// 0\u3001\u5F00\u59CB\u6267\u884C
threeStart();

function threeStart() {     // \u6CE8\u610F\u5185\u90E8\u51FD\u6570\u6267\u884C\u7684\u987A\u5E8F
    initScene();            // \u521D\u59CB\u5316\u573A\u666F
    initCamera();           // \u521D\u59CB\u5316\u76F8\u673A
    initRender();           // \u521D\u59CB\u5316\u6E32\u67D3\u5668
    initLight();            // \u521B\u5EFA\u5149\u6E90
    initRect();             // \u753B\u6B63\u65B9\u5F62
    initLine();             // \u753B\u7EBF    
    render();               // \u5FAA\u73AF\u52A8\u753B
}

// 1\u3001\u521D\u59CB\u5316\u573A\u666F\u2014\u2014\u2014\u2014\u6240\u6709\u7269\u4F53\u7684\u5BB9\u5668
function initScene() {
    scene = new THREE.Scene();
}

// 2\u3001\u521D\u59CB\u5316\u76F8\u673A\u2014\u2014\u2014\u2014\u51B3\u5B9A\u90A3\u4E2A\u89D2\u5EA6\u573A\u666F\u7684\u5C55\u793A
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 0;              // \u521D\u59CBX\u4F4D\u7F6E\uFF1A\u8D1F\u503C\u7269\u4F53\u504F\u53F3\uFF0C\u6B63\u503C\u7269\u4F53\u504F\u5DE6
    camera.position.y = 0;              // \u521D\u59CBY\u4F4D\u7F6E\uFF1A\u8D1F\u503C\u7269\u4F53\u504F\u4E0A\uFF0C\u6B63\u503C\u7269\u4F53\u504F\u4E0B
    camera.position.z = 10;             // \u521D\u59CBZ\u4F4D\u7F6E\uFF1A\u8D1F\u503C\u7269\u4F53\u9760\u524D\uFF0C\u6B63\u503C\u7269\u4F53\u9760\u540E
}

// 3\u3001\u521D\u59CB\u5316\u6E32\u67D3\u5668
function initRender() {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);    // \u8BBE\u7F6E\u6E32\u67D3\u5668\u7684\u5BBD\u9AD8\u3001\u989C\u8272\u3001\u900F\u660E\u5EA6\uFF0C\u5E76\u6DFB\u52A0\u5230dom\u4E2D
    document.getElementById('canvasdiv').appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0.6);
}

// 4\u3001\u5B9E\u65F6\u6E32\u67D3 == \u5FAA\u73AF\u6E32\u67D3
function render() {
    renderer.clear();
    renderer.render(scene, camera);     // \u6E32\u67D3(\u573A\u666F\uFF0C\u76F8\u673A\uFF0C\u76EE\u6807\uFF0C\u6E05\u9664\u4E0A\u6B21\u753B\u5E03\u5185\u5BB9)
    requestAnimationFrame(render);      // \u6E38\u620F\u5FAA\u73AF\uFF1A\u8BA9\u6D4F\u89C8\u5668\u53BB\u6267\u884C\u4E00\u6B21\u53C2\u6570\u4E2D\u7684\u51FD\u6570

    // \u6539\u53D8\u7269\u4F53\u4F4D\u7F6E\uFF0C\u8BA9\u7269\u4F53\u8FD0\u52A8
    cube.rotation.x += 0.02;            
    cube.rotation.y += 0.02;

    if( line.position.x > 3 ){
        line.position.x = 0.005;
        line.position.y = 0.005;
    }else{
        line.position.x += 0.005;
        line.position.y += 0.005;
    }
    
    // \u6539\u53D8\u76F8\u673A\u4F4D\u7F6E\uFF0C\u8BA9\u7269\u4F53\u8FD0\u52A8
    // camera.position.x += 0.01;       
}

// 5\u3001\u521D\u59CB\u5316\u5149\u6E90(\u57FA\u7C7B\u5149\u6E90+5\u7C7B)
var light;
function initLight() {
    // (0)\u57FA\u7C7B\u5149 new Light()

    // (1)\u73AF\u5883\u5149
    /* light = new THREE.AmbientLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light); */

    // (2)\u70B9\u5149\u6E90
    light = new THREE.PointLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light);

    // (3)\u805A\u5149\u706F
    /* light = new THREE.SpotLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light); */

    // (4)\u65B9\u5411\u5149
    /* light = new THREE.DirectionalLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light); */

    // (4)\u533A\u57DF\u5149 \u2014\u2014 \u6709\u95EE\u9898
    /* light = new THREE.AreaLight(0xffff00);
    light.position.set(-1, -1, 2);
    scene.add(light); */
}

// 6\u3001\u521D\u59CB\u5316\u51E0\u4F55\u6B63\u65B9\u4F53
var cube;        
function initRect() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);    // \u51E0\u4F55\u4F53\u7684\u957F\u5BBD\u9AD8
    var material = new THREE.MeshLambertMaterial({      // \u5C5E\u6027\u6837\u5F0F  MeshBasicMaterial
        color: 0x00ffff
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

// 7\u3001\u521D\u59CB\u5316\u4E00\u6761\u6E10\u53D8\u7684\u7EBF\u6761
var line;
function initLine() {
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial({ 
        vertexColors: true,         // \u662F\u5426\u4F7F\u7528\u9876\u70B9\u989C\u8272
        linewidth: 50                // \u7EBF\u6761\u5BBD\u5EA6
    });
    // \u521B\u5EFA\u4E24\u70B9
    var p1 = new THREE.Vector3( -2, 2, 0 );
    var p2 = new THREE.Vector3( 2, -2, 0 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    // \u521B\u5EFA\u4E24\u70B9\u989C\u8272
    var color1 = new THREE.Color( 0x0000ff ), 
        color2 = new THREE.Color( 0xff00ff );    
    geometry.colors.push( color1, color2 );
    // \u8FDE\u7EBF
    line = new THREE.Line( geometry, material, THREE.LinePieces );
    scene.add(line);
}
`)],-1),l=[a,c,s];function d(h,f){return t(),i("div",null,l)}const m=e(o,[["render",d],["__file","03-ThreeJS\u7B80\u5355\u793A\u4F8B.html.vue"]]);export{m as default};
