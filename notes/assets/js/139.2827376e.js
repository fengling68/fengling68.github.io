(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{451:function(n,e,a){"use strict";a.r(e);var t=a(1),i=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"hilo之game（相机和粒子系统）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hilo之game（相机和粒子系统）"}},[n._v("#")]),n._v(" hilo之game（相机和粒子系统）")]),n._v(" "),a("h2",{attrs:{id:"_1、camera-普通相机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、camera-普通相机"}},[n._v("#")]),n._v(" 1、Camera 普通相机")]),n._v(" "),a("pre",[a("code",[n._v("// 创建tween类\nvar Tween = Hilo.Tween;\n\n// 创建舞台\nvar stage = new Hilo.Stage({\n    renderType: 'canvas',\n    container: document.getElementById(\"wrap\"),\n    width: 500,\n    height: 500\n});\n\n// 创建地图\nvar map = new Hilo.Container({\n    width: 1000,\n    height: 1000\n}).addTo(stage);\nvar bg = window.bg = new Hilo.Bitmap({\n    image: 'images/map.jpg',\n    width: 1000,\n    height: 1000\n}).addTo(map);\n\n// 创建摄像机，设置边界，deadzone\nvar deadzone = [50,50,100,100];\nvar camera = new Hilo.Camera({\n    width:500,\n    height:500,\n    bounds:[0, 0, 1000, 1000],      // 捕捉范围\n    deadzone: deadzone              // 盲区\n});\n\n// 显示deadzone区域\nstage.addChild(new Hilo.View({\n    x:camera.deadzone[0],\n    y:camera.deadzone[1],\n    width:camera.deadzone[2],\n    height:camera.deadzone[3],\n    background:\"rgba(255, 0, 0, 0.3)\"\n}));\n\n// 创建第一只鱼\nvar fish0 = new Hilo.Bitmap({\n    image: 'images/fish.png',\n    rect: [0, 0, 174, 126],     // 图片大小\n    x: 100,          // 初始位置\n    y: 100,          // 初始位置\n    scaleX: 0.5,     // 缩小\n    scaleY: 0.5,     // 缩小\n    pivotX: 174,     // 鱼相对于deadzone的位置\n    pivotY: 55,      // 鱼相对于deadzone的位置\n    onUpdate:function(){\n        this.x +=this.speed;\n        if(this.x > 950 || this.x < 0){\n            this.speed *= -1;\n            this.scaleX *= -1;\n        }\n    }\n}).addTo(map);\nfish0.speed = 2;\n\n// 创建第二只鱼\nvar fish1 = new Hilo.Bitmap({\n    image: 'images/fish.png',\n    rect: [0, 0, 174, 126],\n    x: 100,\n    y: 100,\n    scaleX: 0.5,\n    scaleY: 0.5,\n    pivotX: 174,\n    pivotY: 55,\n    rotation:90,\n    onUpdate:function(){\n        this.y +=this.speed;\n        if(this.y > 950 || this.y < 0){\n            this.speed *= -1;\n            this.scaleX *= -1;\n        }\n    }\n}).addTo(map);\nfish1.speed = 2;\n\n// 开启定时器\nvar ticker = new Hilo.Ticker(60);\nticker.addTick(stage);\nticker.addTick(camera);\nticker.addTick(Tween);\nticker.start();\n\n// map跟随摄像机滚动\nticker.addTick({\n    tick:function(){\n        map.x = - camera.scroll.x;\n        map.y = - camera.scroll.y;\n    }\n});\n\n// 摄像机跟着鱼滚动\ncamera.follow(fish1);\n\n// 切换摄像机跟随对象\nvar tween;\ndocument.body.onclick = function(){\n    var target = camera.target == fish1?fish0:fish1;\n    // 要跟随的鱼的坐标点\n    var pos = {\n        x:camera.target.x,\n        y:camera.target.y\n    };\n    // 移除上次的跟随对象\n    Tween.remove(tween);\n    // 跟随当前的鱼\n    tween = Tween.to(pos,{\n        x:target.x,\n        y:target.y\n    },{\n        duration:500,\n        onComplete:function(){\n            camera.follow(target, deadzone);\n        }\n    })\n    // 鱼在运动，重新追踪一次\n    camera.follow(pos, null);\n}\n")])]),n._v(" "),a("h2",{attrs:{id:"_2、camera3d-3d相机-（未完成）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、camera3d-3d相机-（未完成）"}},[n._v("#")]),n._v(" 2、Camera3d 3D相机  （未完成）")]),n._v(" "),a("h2",{attrs:{id:"_3、particlesystem粒子系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、particlesystem粒子系统"}},[n._v("#")]),n._v(" 3、ParticleSystem粒子系统")]),n._v(" "),a("pre",[a("code",[n._v('// 粒子背景图\nvar img = document.getElementById("texture");\n// 创建粒子系统\nvar particleSystem = new Hilo.ParticleSystem({\n    x:0,                             \n    y:0,\n    emitNum:5,                       // 粒子个数\n    emitTime:1,                      // 时间间隔\n    particle:{                       // 粒子                   \n        image:img,                   // 粒子背景图\n        life:22,\n        alphaV:-.01,\n        vxVar: 100,                   // x 轴方向水平散开\n        vyVar: 300,                   // y 轴方向垂直散开\n        axVar: 500,                   // z 轴水平散开      \n        ayVar: 200,                   // z 轴垂直散开\n        scale: 0.8,                   // 缩小放大\n        rotationVar:360,              // 旋转相关\n        rotationVVar: 10,             // 旋转相关\n        pivotX:.5,                    // 中心点\n        pivotY:.5,\n        frame:[                      // 帧\n            [75, 236, 7, 11],\n            [111, 160, 17, 46],\n            [68, 236, 7, 11],\n            [112, 223, 7, 17],\n            [0, 0, 30, 99]\n        ]\n    }\n});\n// 添加粒子系统\nstage.addChild(particleSystem);\n// 开启粒子系统\nparticleSystem.start();\n\n// 在定时器中设置粒子系统的随机位置\nticker.addTick({\n    tick:function(){\n        particleSystem.emitterX = Math.random() * winWidth;\n        particleSystem.emitterY = Math.random() * winHeight;\n    }\n})\n')])])])}),[],!1,null,null,null);e.default=i.exports}}]);