(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{822:function(n,e,t){"use strict";t.r(e);var i=t(1),r=Object(i.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"three-js简单示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#three-js简单示例"}},[this._v("#")]),this._v(" three.js简单示例")]),this._v(" "),e("p",[this._v("/*\n使用相机将场景渲染到网页上\n1、初始化场景\n2、初始化相机\n3、初始化渲染器\n4、实时渲染\n5、初始化光源\n6、画正方体并在 实时渲染 中使物体运动\n7、画渐变线条 实时渲染 中使物体运动\n*/")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[this._v("var scene;          // 场景\nvar camera;         // 相机\nvar renderer;       // 渲染器\nvar width = document.getElementById('canvasdiv').clientWidth;\nvar height = document.getElementById('canvasdiv').clientHeight;\n\n\n// 0、开始执行\nthreeStart();\n\nfunction threeStart() {     // 注意内部函数执行的顺序\n    initScene();            // 初始化场景\n    initCamera();           // 初始化相机\n    initRender();           // 初始化渲染器\n    initLight();            // 创建光源\n    initRect();             // 画正方形\n    initLine();             // 画线    \n    render();               // 循环动画\n}\n\n// 1、初始化场景————所有物体的容器\nfunction initScene() {\n    scene = new THREE.Scene();\n}\n\n// 2、初始化相机————决定那个角度场景的展示\nfunction initCamera() {\n    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);\n    camera.position.x = 0;              // 初始X位置：负值物体偏右，正值物体偏左\n    camera.position.y = 0;              // 初始Y位置：负值物体偏上，正值物体偏下\n    camera.position.z = 10;             // 初始Z位置：负值物体靠前，正值物体靠后\n}\n\n// 3、初始化渲染器\nfunction initRender() {\n    renderer = new THREE.WebGLRenderer({\n        antialias: true\n    });\n    renderer.setSize(width, height);    // 设置渲染器的宽高、颜色、透明度，并添加到dom中\n    document.getElementById('canvasdiv').appendChild(renderer.domElement);\n    renderer.setClearColor(0x000000, 0.6);\n}\n\n// 4、实时渲染 == 循环渲染\nfunction render() {\n    renderer.clear();\n    renderer.render(scene, camera);     // 渲染(场景，相机，目标，清除上次画布内容)\n    requestAnimationFrame(render);      // 游戏循环：让浏览器去执行一次参数中的函数\n\n    // 改变物体位置，让物体运动\n    cube.rotation.x += 0.02;            \n    cube.rotation.y += 0.02;\n\n    if( line.position.x > 3 ){\n        line.position.x = 0.005;\n        line.position.y = 0.005;\n    }else{\n        line.position.x += 0.005;\n        line.position.y += 0.005;\n    }\n    \n    // 改变相机位置，让物体运动\n    // camera.position.x += 0.01;       \n}\n\n// 5、初始化光源(基类光源+5类)\nvar light;\nfunction initLight() {\n    // (0)基类光 new Light()\n\n    // (1)环境光\n    /* light = new THREE.AmbientLight(0xffff00);\n    light.position.set(-1, -1, 2);\n    scene.add(light); */\n\n    // (2)点光源\n    light = new THREE.PointLight(0xffff00);\n    light.position.set(-1, -1, 2);\n    scene.add(light);\n\n    // (3)聚光灯\n    /* light = new THREE.SpotLight(0xffff00);\n    light.position.set(-1, -1, 2);\n    scene.add(light); */\n\n    // (4)方向光\n    /* light = new THREE.DirectionalLight(0xffff00);\n    light.position.set(-1, -1, 2);\n    scene.add(light); */\n\n    // (4)区域光 —— 有问题\n    /* light = new THREE.AreaLight(0xffff00);\n    light.position.set(-1, -1, 2);\n    scene.add(light); */\n}\n\n// 6、初始化几何正方体\nvar cube;        \nfunction initRect() {\n    var geometry = new THREE.BoxGeometry(1, 1, 1);    // 几何体的长宽高\n    var material = new THREE.MeshLambertMaterial({      // 属性样式  MeshBasicMaterial\n        color: 0x00ffff\n    });\n    cube = new THREE.Mesh(geometry, material);\n    scene.add(cube);\n}\n\n// 7、初始化一条渐变的线条\nvar line;\nfunction initLine() {\n    var geometry = new THREE.Geometry();\n    var material = new THREE.LineBasicMaterial({ \n        vertexColors: true,         // 是否使用顶点颜色\n        linewidth: 50                // 线条宽度\n    });\n    // 创建两点\n    var p1 = new THREE.Vector3( -2, 2, 0 );\n    var p2 = new THREE.Vector3( 2, -2, 0 );\n    geometry.vertices.push(p1);\n    geometry.vertices.push(p2);\n    // 创建两点颜色\n    var color1 = new THREE.Color( 0x0000ff ), \n        color2 = new THREE.Color( 0xff00ff );    \n    geometry.colors.push( color1, color2 );\n    // 连线\n    line = new THREE.Line( geometry, material, THREE.LinePieces );\n    scene.add(line);\n}\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);