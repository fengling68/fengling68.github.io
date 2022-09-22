import{_ as t,o as n,c as e,a as r}from"./app.ef351b53.js";const a={},c=r(`<h1 id="canvas\u505A\u7EB9\u7406\u56FE" tabindex="-1"><a class="header-anchor" href="#canvas\u505A\u7EB9\u7406\u56FE" aria-hidden="true">#</a> canvas\u505A\u7EB9\u7406\u56FE</h1><h2 id="index-html\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#index-html\u6587\u4EF6" aria-hidden="true">#</a> index.html\u6587\u4EF6</h2><pre><code>&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
       #canvasdiv{
           width: 80%;
           height: 600px;
           background: black;
           margin: 20px auto;
       }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;canvasdiv&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;script src=&quot;./js-three/three.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;./js-three/clock.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;./js-three/threedemo.js&quot;&gt;&lt;/script&gt;
</code></pre><h2 id="clock-js-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#clock-js-\u6587\u4EF6" aria-hidden="true">#</a> clock.js \u6587\u4EF6</h2><pre><code>var canvas;

function clock() {
	canvas = document.createElement(&#39;canvas&#39;);
	canvas.width = 200;
	canvas.height = 200;
	var ctx = canvas.getContext(&#39;2d&#39;);
	if (ctx) {
		var timerId;
		var frameRate = 60;

		function canvObject() {
			this.x = 0;
			this.y = 0;
			this.rotation = 0;
			this.borderWidth = 2;
			this.borderColor = &#39;#000000&#39;;
			this.fill = false;
			this.fillColor = &#39;#ff0000&#39;;
			this.update = function () {
				if (!this.ctx) throw new Error(&#39;\u4F60\u6CA1\u6709\u6307\u5B9Actx\u5BF9\u8C61\u3002&#39;);
				var ctx = this.ctx
				ctx.save();
				ctx.lineWidth = this.borderWidth;
				ctx.strokeStyle = this.borderColor;
				ctx.fillStyle = this.fillColor;
				ctx.translate(this.x, this.y);
				if (this.rotation) ctx.rotate(this.rotation * Math.PI / 180);
				if (this.draw) this.draw(ctx);
				if (this.fill) ctx.fill();
				ctx.stroke();
				ctx.restore();
			}
		};

		function Line() {};
		Line.prototype = new canvObject();
		Line.prototype.fill = false;
		Line.prototype.start = [0, 0];
		Line.prototype.end = [5, 5];
		Line.prototype.draw = function (ctx) {
			ctx.beginPath();
			ctx.moveTo.apply(ctx, this.start);
			ctx.lineTo.apply(ctx, this.end);
			ctx.closePath();
		};

		function Circle() {};
		Circle.prototype = new canvObject();
		Circle.prototype.draw = function (ctx) {
			ctx.beginPath();
			ctx.arc(0, 0, this.radius, 0, 2 * Math.PI, true);
			ctx.closePath();
		};

		var circle = new Circle();
		circle.ctx = ctx;
		circle.x = 100;
		circle.y = 100;
		circle.radius = 90;
		circle.fill = true;
		circle.borderWidth = 6;
		circle.fillColor = &#39;#ffffff&#39;;

		var hour = new Line();
		hour.ctx = ctx;
		hour.x = 100;
		hour.y = 100;
		hour.borderColor = &quot;#000000&quot;;
		hour.borderWidth = 10;
		hour.rotation = 0;
		hour.start = [0, 20];
		hour.end = [0, -50];

		var minute = new Line();
		minute.ctx = ctx;
		minute.x = 100;
		minute.y = 100;
		minute.borderColor = &quot;#333333&quot;;
		minute.borderWidth = 7;
		minute.rotation = 0;
		minute.start = [0, 20];
		minute.end = [0, -70];

		var seconds = new Line();
		seconds.ctx = ctx;
		seconds.x = 100;
		seconds.y = 100;
		seconds.borderColor = &quot;#ff0000&quot;;
		seconds.borderWidth = 4;
		seconds.rotation = 0;
		seconds.start = [0, 20];
		seconds.end = [0, -80];

		var center = new Circle();
		center.ctx = ctx;
		center.x = 100;
		center.y = 100;
		center.radius = 5;
		center.fill = true;
		center.borderColor = &#39;orange&#39;;

		for (var i = 0, ls = [], cache; i &lt; 12; i++) {
			cache = ls[i] = new Line();
			cache.ctx = ctx;
			cache.x = 100;
			cache.y = 100;
			cache.borderColor = &quot;orange&quot;;
			cache.borderWidth = 2;
			cache.rotation = i * 30;
			cache.start = [0, -70];
			cache.end = [0, -80];
		}

		timerId = setInterval(function () {
			// \u6E05\u9664\u753B\u5E03
			ctx.clearRect(0, 0, 200, 200);
			// \u586B\u5145\u80CC\u666F\u8272
			ctx.fillStyle = &#39;orange&#39;;
			ctx.fillRect(0, 0, 200, 200);
			// \u8868\u76D8
			circle.update();
			// \u523B\u5EA6
			for (var i = 0; cache = ls[i++];) cache.update();
			// \u65F6\u9488
			hour.rotation = (new Date()).getHours() * 30;
			hour.update();
			// \u5206\u9488
			minute.rotation = (new Date()).getMinutes() * 6;
			minute.update();
			// \u79D2\u9488
			seconds.rotation = (new Date()).getSeconds() * 6;
			seconds.update();
			// \u4E2D\u5FC3\u5706
			center.update();
		}, (1000 / frameRate) | 0);
	} else {
		alert(&#39;\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Canvas\u65E0\u6CD5\u9884\u89C8.\\n\u8DDF\u6211\u4E00\u8D77\u8BF4\uFF1A&quot;Fuck Internet Exploer!&quot;&#39;);
	}
}
</code></pre><h2 id="threedemo-js-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#threedemo-js-\u6587\u4EF6" aria-hidden="true">#</a> threedemo.js \u6587\u4EF6</h2><pre><code>/* 
    1\u3001\u521D\u59CB\u5316\u573A\u666F\u3001\u76F8\u673A\u3001\u6E32\u67D3\u5668
    2\u3001\u5B9E\u65F6\u6E32\u67D3
    3\u3001canvas\u505A\u7EB9\u7406\u56FE
        (1)\u5728canvas\u4E0A\u753B\u65F6\u949F
        (2)\u5C06canvas\u4F20\u9012\u7ED9Texture\u7EB9\u7406
        (3)\u521B\u5EFA\u51E0\u4F55\u4F53\uFF0C\u5E76\u5C06\u7EB9\u7406\u4F20\u9012\u7ED9\u6750\u8D28
        (4)\u6784\u9020THREE.Mesh
*/

var scene;          
var camera;        
var renderer;  
var width = document.getElementById(&#39;canvasdiv&#39;).clientWidth;
var height = document.getElementById(&#39;canvasdiv&#39;).clientHeight;

// \u5F00\u59CB\u6267\u884C
threeStart();
function threeStart() {
    clock();                        // (1)\u5148\u6267\u884Ccanvas\u7ED8\u5236\u7684\u56FE\u7247
    init(); 
    initCanvas();
    animate(); 
}

// 1\u3001\u521D\u59CB\u5316\u573A\u666F\u3001\u76F8\u673A\u3001\u6E32\u67D3\u5668
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.z = 10;
    renderer = new THREE.WebGLRenderer({});
    renderer.setSize(width, height);
    document.getElementById(&#39;canvasdiv&#39;).appendChild(renderer.domElement);
}
// 2\u3001\u5B9E\u65F6\u6E32\u67D3
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);    
    // \u4F7F\u7269\u4F53\u8FD0\u52A8
    texture.needsUpdate = true;
    mesh.rotation.x -= 0.01;
    mesh.rotation.y -= 0.01;
}

// 3\u3001\u753B\u7EB9\u7406\u7269\u4F53
var texture;
var mesh;
function initCanvas() {
    // (2)\u5C06canvas\u4F20\u9012\u7ED9Texture\u7EB9\u7406
    texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    // (3)\u521B\u5EFA\u51E0\u4F55\u4F53\uFF0C\u5C06\u7EB9\u7406\u4F20\u9012\u7ED9\u6750\u8D28
    var geometry = new THREE.BoxGeometry(2, 2, 2);
    var material = new THREE.MeshBasicMaterial({map:texture}); 
    // (4)\u6784\u9020THREE.Mesh
    mesh = new THREE.Mesh( geometry,material );
    scene.add( mesh );
} 
</code></pre>`,7),i=[c];function o(s,d){return n(),e("div",null,i)}const l=t(a,[["render",o],["__file","02-Canvas\u505A\u7EB9\u7406\u56FE.html.vue"]]);export{l as default};
