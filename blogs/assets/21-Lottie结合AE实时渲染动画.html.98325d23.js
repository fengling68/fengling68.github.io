import{_ as e,o as i,c as a,b as n,t as o,a as s}from"./app.ae676a5c.js";const l={},r=s(`<h1 id="lottie\u7ED3\u5408ae\u5B9E\u65F6\u6E32\u67D3\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#lottie\u7ED3\u5408ae\u5B9E\u65F6\u6E32\u67D3\u52A8\u753B" aria-hidden="true">#</a> Lottie\u7ED3\u5408AE\u5B9E\u65F6\u6E32\u67D3\u52A8\u753B</h1><h2 id="_1\u3001lottie-vue\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1\u3001lottie-vue\u6587\u4EF6" aria-hidden="true">#</a> 1\u3001lottie.vue\u6587\u4EF6</h2><pre><code>/* 
  Lottie\u5B98\u7F51\uFF1Ahttps://www.lottiefiles.com/?page=1
  1\u3001\u5B89\u88C5vue
  2\u3001\u5B89\u88C5lottie     : npm install --save vue-lottie  
  3\u3001\u5F15\u5165components : import Lottie from &#39;./lottie.vue&#39;;
  4\u3001\u5F15\u5165json\u6587\u4EF6
*/

&lt;template&gt;
    &lt;div :style=&quot;style&quot; ref=&quot;lavContainer&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import lottie from &#39;lottie-web&#39;;
  export default {
    props: {
      options: {
        type: Object,
        required: true
      },
      height: Number,
      width: Number,
    },

    data () {
      return {
        style: {
          width: this.width ? \`\${this.width}px\` : &#39;100%&#39;,
          height: this.height ? \`\${this.height}px\` : &#39;100%&#39;,
          overflow: &#39;hidden&#39;,
          margin: &#39;0 auto&#39;
        }
      }
    },

    mounted () {
      this.anim = lottie.loadAnimation({
          container: this.$refs.lavContainer,
          renderer: &#39;svg&#39;,
          loop: this.options.loop !== false,
          autoplay: this.options.autoplay !== false,
          animationData: this.options.animationData,
          rendererSettings: this.options.rendererSettings
        }
      );
      this.$emit(&#39;animCreated&#39;, this.anim);
    }
  }
&lt;/script&gt;
</code></pre><h2 id="_2\u3001\u6E32\u67D3\u4E00\u4E2A\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6E32\u67D3\u4E00\u4E2A\u52A8\u753B" aria-hidden="true">#</a> 2\u3001\u6E32\u67D3\u4E00\u4E2A\u52A8\u753B</h2>`,4);function p(t,d){return i(),a("div",null,[r,n("pre",null,[n("code",null,`<template>
  <div id="app">
    <!-- \u7B2C\u4E00\u4E2A\u52A8\u753B -->
    <lottie :options="defOpt1" :height="300" :width="300" v-on:animCreated="handleAni"/>
    <!-- \u7B2C\u4E8C\u4E2A\u52A8\u753B -->
    <lottie :options="defOpt2" :height="200" :width="200" v-on:animCreated="handleAni"/>
    <!-- \u63A7\u5236\u5668 -->
    <div>
        <p>Speed: x`+o(t.animationSpeed)+`</p>
        <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="animationSpeed">
    </div>
    <button v-on:click="stop">stop</button>
    <button v-on:click="pause">pause</button>
    <button v-on:click="play">play</button>
  </div>
</template>

<script>
// lottie\u7EC4\u4EF6
import Lottie from './lottie.vue';
// \u793A\u4F8B\u52A8\u753Bjson\u6587\u4EF6\u53EF\u5728lottie\u5B98\u7F51\u4E0B\u8F7D
import * as animate1 from '../js/animate1.json';
import * as animate2 from '../js/animate2.json';

export default {
  name: 'app',
  components: {
    'lottie': Lottie
  },
  data() {
    return {
      count: 1,
      defOpt1: {animationData: animate1},
      defOpt2: {animationData: animate2}
      animationSpeed: 1
    }
  },
  methods: {
    handleAni: function (anim) {
      let aniName = "anim"+this.count;
      this[aniName] = anim;
      this.count++;
    },

    stop: function () {
      this.anim.stop();
    },

    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    }
  }
}
<\/script>

<style rel="stylesheet/scss" lang="scss">
  #app{
    position: absolute;
    width: 100%;
    overflow: auto;
    background: greenyellow;
  }
</style>
`,1)])])}const m=e(l,[["render",p],["__file","21-Lottie\u7ED3\u5408AE\u5B9E\u65F6\u6E32\u67D3\u52A8\u753B.html.vue"]]);export{m as default};
