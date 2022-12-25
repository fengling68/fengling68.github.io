import{_ as e,o as t,c as n,f as o}from"./app.8609dc96.js";const a={},r=o(`<h1 id="dom文档对象模型" tabindex="-1"><a class="header-anchor" href="#dom文档对象模型" aria-hidden="true">#</a> DOM文档对象模型</h1><h2 id="dom节点" tabindex="-1"><a class="header-anchor" href="#dom节点" aria-hidden="true">#</a> DOM节点</h2><pre><code>HTML的所有内容都是节点
文档节点  元素节点  属性节点   文本节点
父节点(parent)  子节点(child)  兄弟节点(sibling)  根节点(root)
</code></pre><h2 id="获取dom元素节点-标签" tabindex="-1"><a class="header-anchor" href="#获取dom元素节点-标签" aria-hidden="true">#</a> 获取DOM元素节点(标签)</h2><pre><code>(任何元素都可以自定义属性name，在IE中只识别form表单中的name)

1、getElementById(); 通过id来获取元素节点; 唯一
2、getElementsByTagName(); 通过标签名称获取元素节点; 伪数组(不享有数组的方法)
3、getElementsByClassName(); 通过类名获取元素节点; 伪数组(IE低版本有兼容性问题)
4、getElementsByName(); 通过name属性值获取元素节点。
5、document.querySelector();多种选择器获得元素节点，默认只选择第一个
    var dom1 = document.querySelector(&quot;.myUl&quot;);    //选择第一个类
    var dom2 = document.querySelector(&quot;#my_div&quot;);  //选择唯一的id
    var dom3 = document.querySelector(&quot;input&quot;);    //选择第一个元素标签
6、document.querySelectorAll();通过多种选择器获取页面中的所有元素节点。
</code></pre><h2 id="操作元素节点" tabindex="-1"><a class="header-anchor" href="#操作元素节点" aria-hidden="true">#</a> 操作元素节点</h2><p><strong>获取/访问属性节点</strong></p><pre><code>1、控制台输出    按钮-类型type
    var inps = document.getElementsByTagName(&quot;input&quot;);
    console.log(inps[0].type);

2、输出按钮的内容
   console.log(inps[0].value);

3、在控制台输出div的类名  class不能用,用className
    var divs = document.getElementsByTagName(&quot;div&quot;);
    console.log(divs[0].className);
</code></pre><p><strong>设置属性节点方式一( . 语法)</strong></p><pre><code>1、给div重设类名
    divs[0].className = &quot;div&quot;;

2、给图片设置路径
    var imgs = document.getElementsByTagName(&quot;img&quot;);
    imgs[0].src = &quot;429902.jpg&quot;;

3、单选框、复选框。是通过布尔值设置默认选中

        var inps = document.getElementsByTagName(&quot;input&quot;);
        inps[1].checked = true;

4、option，通过布尔值设置为默认选中
    var opts = document.getElementsByTagName(&quot;option&quot;);
    opts[1].selected = true;
</code></pre><p><strong>设置属性节点方式二(自带属性 || 自定义属性)</strong></p><pre><code>setAttribute();   参数：属性，属性值 
getAttribute();

1、给按钮设置属性
    var inps = document.getElementsByTagName(&quot;input&quot;);
    inps[0].setAttribute(&quot;onclick&quot;,&quot;fn()&quot;);
    function fn(){alert(123);}

2、获取属性
    var divs = document.getElementsByClassName(&quot;my_div&quot;);
    console.log(divs[0].getAttribute(&quot;class&quot;));
</code></pre><h2 id="排它思想" tabindex="-1"><a class="header-anchor" href="#排它思想" aria-hidden="true">#</a> 排它思想</h2><pre><code>var btns = document.getElementsByTagName(&quot;input&quot;);
for(var i = 0 ; i &lt; btns.length ; i ++){
    btns[i].onclick = function(){

        //排他思想：在操作当前元素之前，先清除之前其他的样式
        for(var j = 0 ; j &lt; btns.length ; j++){
            //btns[j].className = &quot;old&quot;;
            btns[j].setAttribute(&quot;class&quot;,&quot;old&quot;);
        }

        //this.style.backgroundColor = &quot;red&quot;;
        //this.className = &quot;current&quot;;
        this.setAttribute(&quot;class&quot;,&quot;current&quot;);
    }
}
</code></pre>`,14),s=[r];function u(d,c){return t(),n("div",null,s)}const l=e(a,[["render",u],["__file","11-DOM文档对象模型.html.vue"]]);export{l as default};
