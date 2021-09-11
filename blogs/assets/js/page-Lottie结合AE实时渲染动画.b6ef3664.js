(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{830:function(n,t,e){"use strict";e.r(t);var i=e(1),a=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"lottie结合ae实时渲染动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lottie结合ae实时渲染动画"}},[n._v("#")]),n._v(" Lottie结合AE实时渲染动画")]),n._v(" "),e("h2",{attrs:{id:"_1、lottie-vue文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、lottie-vue文件"}},[n._v("#")]),n._v(" 1、lottie.vue文件")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("/* \n  Lottie官网：https://www.lottiefiles.com/?page=1\n  1、安装vue\n  2、安装lottie     : npm install --save vue-lottie  \n  3、引入components : import Lottie from './lottie.vue';\n  4、引入json文件\n*/\n\n<template>\n    <div :style=\"style\" ref=\"lavContainer\"></div>\n</template>\n\n<script>\n  import lottie from 'lottie-web';\n  export default {\n    props: {\n      options: {\n        type: Object,\n        required: true\n      },\n      height: Number,\n      width: Number,\n    },\n\n    data () {\n      return {\n        style: {\n          width: this.width ? `${this.width}px` : '100%',\n          height: this.height ? `${this.height}px` : '100%',\n          overflow: 'hidden',\n          margin: '0 auto'\n        }\n      }\n    },\n\n    mounted () {\n      this.anim = lottie.loadAnimation({\n          container: this.$refs.lavContainer,\n          renderer: 'svg',\n          loop: this.options.loop !== false,\n          autoplay: this.options.autoplay !== false,\n          animationData: this.options.animationData,\n          rendererSettings: this.options.rendererSettings\n        }\n      );\n      this.$emit('animCreated', this.anim);\n    }\n  }\n<\/script>\n")])])]),e("h2",{attrs:{id:"_2、渲染一个动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、渲染一个动画"}},[n._v("#")]),n._v(" 2、渲染一个动画")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('<template>\n  <div id="app">\n    \x3c!-- 第一个动画 --\x3e\n    <lottie :options="defOpt1" :height="300" :width="300" v-on:animCreated="handleAni"/>\n    \x3c!-- 第二个动画 --\x3e\n    <lottie :options="defOpt2" :height="200" :width="200" v-on:animCreated="handleAni"/>\n    \x3c!-- 控制器 --\x3e\n    <div>\n        <p>Speed: x'+n._s(n.animationSpeed)+'</p>\n        <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="animationSpeed">\n    </div>\n    <button v-on:click="stop">stop</button>\n    <button v-on:click="pause">pause</button>\n    <button v-on:click="play">play</button>\n  </div>\n</template>\n\n<script>\n// lottie组件\nimport Lottie from \'./lottie.vue\';\n// 示例动画json文件可在lottie官网下载\nimport * as animate1 from \'../js/animate1.json\';\nimport * as animate2 from \'../js/animate2.json\';\n\nexport default {\n  name: \'app\',\n  components: {\n    \'lottie\': Lottie\n  },\n  data() {\n    return {\n      count: 1,\n      defOpt1: {animationData: animate1},\n      defOpt2: {animationData: animate2}\n      animationSpeed: 1\n    }\n  },\n  methods: {\n    handleAni: function (anim) {\n      let aniName = "anim"+this.count;\n      this[aniName] = anim;\n      this.count++;\n    },\n\n    stop: function () {\n      this.anim.stop();\n    },\n\n    play: function () {\n      this.anim.play();\n    },\n\n    pause: function () {\n      this.anim.pause();\n    },\n\n    onSpeedChange: function () {\n      this.anim.setSpeed(this.animationSpeed);\n    }\n  }\n}\n<\/script>\n\n<style rel="stylesheet/scss" lang="scss">\n  #app{\n    position: absolute;\n    width: 100%;\n    overflow: auto;\n    background: greenyellow;\n  }\n</style>\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);