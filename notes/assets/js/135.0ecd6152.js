(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{447:function(n,e,t){"use strict";t.r(e);var r=t(1),i=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"threejs带网格的3d运动物体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threejs带网格的3d运动物体"}},[n._v("#")]),n._v(" ThreeJS带网格的3D运动物体")]),n._v(" "),t("h2",{attrs:{id:"index-html文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index-html文件"}},[n._v("#")]),n._v(" index.html文件")]),n._v(" "),t("pre",[t("code",[n._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <style>\n        body{\n            margin: 0;\n            padding: 0;\n        }\n        #canvasdiv{\n           width: 100%;\n           height: 700px;\n           background: black;\n           /* margin: 20px auto; */\n        }\n    </style>\n</head>\n<body>\n    <div id="canvasdiv"></div>\n</body>\n</html>\n\x3c!-- 引入相关文件 --\x3e\n<script src="./js-three/three.min.js"><\/script>\n<script src="./js-three/Stats.js"><\/script>\n<script src="./js-three/Tween.js"><\/script>\n\x3c!-- 引入demo文件 --\x3e\n<script src="./js-three/demo3.js"><\/script>\n')])]),n._v(" "),t("h2",{attrs:{id:"threedemo-js-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threedemo-js-文件"}},[n._v("#")]),n._v(" threeDemo.js 文件")]),n._v(" "),t("pre",[t("code",[n._v("// 开始运动\nthreeStart();\nfunction threeStart() {\n    initThree();\n    initCamera();\n    initScene();\n    initLight();\n    initObject();\n    initGrid();\n    animation();\n}\n\n// 1、初始化场景\nvar scene;\nfunction initScene() {\n    scene = new THREE.Scene();\n}\n\n// 2、初始化相机\nvar camera;\nfunction initCamera() {\n    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);\n    camera.position.x = 100;\n    camera.position.y = 300;\n    camera.position.z = 600;\n    camera.up.x = 0;\n    camera.up.y = 1;\n    camera.up.z = 0;\n    camera.lookAt({\n        x: 0,\n        y: 0,\n        z: 0\n    });\n}\n\n// 3、初始化渲染器\nvar renderer;\nvar stats;\nfunction initThree() {\n    width = document.getElementById('canvasdiv').clientWidth;\n    height = document.getElementById('canvasdiv').clientHeight;\n    renderer = new THREE.WebGLRenderer({\n        antialias: true\n    });\n    renderer.setSize(width, height);\n    document.getElementById('canvasdiv').appendChild(renderer.domElement);\n    renderer.setClearColor(0x000000, 1.0);\n\n    // 左上角 FPS：游戏流畅度/屏幕刷新率  MS：网络延迟   MB：\n    stats = new Stats();\n    stats.domElement.style.position = 'absolute';\n    stats.domElement.style.left = '0px';\n    stats.domElement.style.top = '0px';\n    document.getElementById('canvasdiv').appendChild(stats.domElement);\n}\n\n// 4、实时渲染——运动\nfunction animation() {\n    renderer.render(scene, camera);\n    requestAnimationFrame(animation);\n    // 运动方式1\n    mesh.rotation.x += 0.01;\n    mesh.rotation.y += 0.01;\n    mesh.rotation.z += 0.01;\n    // 运动方式2\n    // mesh.rotateX(-0.01); \n    // mesh.rotateY(-0.01);\n    // mesh.rotateZ(-0.01);\n}\n\n// 5、初始化灯光\nvar light;\nfunction initLight() {\n    light = new THREE.AmbientLight(0xFF0000);\n    light.position.set(100, 100, 200);\n    scene.add(light);\n}\n\n// 6、绘制网格\nfunction initGrid() {\n    var grid = new THREE.GridHelper(1000, 50);\n    grid.setColors(0x0000ff, 0x808080);\n    scene.add(grid);\n}\n\n// 7、初始化3d几何正方形\nvar cube;\nvar mesh;\nfunction initObject() {\n    // 创建几何体\n    var geometry = new THREE.BoxGeometry(100, 100, 100);\n    for (var i = 0; i < geometry.faces.length; i += 2) {  \n        var hex = Math.random() * 0xffffff;  // 六个面随机颜色\n        geometry.faces[i].color.setHex(hex);\n        geometry.faces[i + 1].color.setHex(hex);\n    }\n    // 材料\n    var material = new THREE.MeshBasicMaterial({\n        vertexColors: THREE.FaceColors\n    });\n    // 几何体和材料合成\n    mesh = new THREE.Mesh(geometry, material);\n    mesh.position = new THREE.Vector3(0, 0, 0);\n    scene.add(mesh);\n}\n")])])])}),[],!1,null,null,null);e.default=i.exports}}]);