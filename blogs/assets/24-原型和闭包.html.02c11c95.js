import{_ as e,o as a,c as n,f as r}from"./app.bae724f5.js";const o={},d=r(`<h1 id="原型和闭包" tabindex="-1"><a class="header-anchor" href="#原型和闭包" aria-hidden="true">#</a> 原型和闭包</h1><p>每个函数(对象)都有prototype属性，是对象属性的集合，默认只有constructor属性； 每个函数(对象)都有_proto_属性，隐世原型，它指向创建该对象的函数的prototype。</p><h3 id="_1、作用域" tabindex="-1"><a class="header-anchor" href="#_1、作用域" aria-hidden="true">#</a> 1、作用域</h3><pre><code>语句执行的环境
全局作用域、函数作用域、eval作用域
</code></pre><h3 id="_2、变量对象" tabindex="-1"><a class="header-anchor" href="#_2、变量对象" aria-hidden="true">#</a> 2、变量对象</h3><pre><code>定义的所有变量和函数
</code></pre><h3 id="_3、执行环境" tabindex="-1"><a class="header-anchor" href="#_3、执行环境" aria-hidden="true">#</a> 3、执行环境</h3><pre><code>定义了变量和函数有权访问的其他数据

\` 1、执行环境中所有代码执行完毕后就会被该环境销毁，保存在其中的所有变量和函数也随之被销毁。\`
\` 2、每个函数都有自己的执行环境，当执行流进入函数中时，函数的环境就会被推入到一个环境栈中；而在函数执行完后，栈将其弹出，把控制权返回之前的执行环境。\`
</code></pre><h3 id="_4、作用域链" tabindex="-1"><a class="header-anchor" href="#_4、作用域链" aria-hidden="true">#</a> 4、作用域链</h3><pre><code>保证对执行环境有权访问的所有变量和函数的访问。
全局函数的变量对象始终都是作用域链中的最后一个对象。
作用域链本质上是一个指向变量对象的指针列表，只引用但不包含变量对象。
</code></pre><h3 id="_5、原型链" tabindex="-1"><a class="header-anchor" href="#_5、原型链" aria-hidden="true">#</a> 5、原型链</h3><pre><code>访问一个对象的属性时，先在基本属性中查找，如果没有，再沿着 _proto_ 这条链向上找，这就是原型链。
</code></pre><h3 id="_6、继承" tabindex="-1"><a class="header-anchor" href="#_6、继承" aria-hidden="true">#</a> 6、继承</h3><pre><code>因为所有对象的原型链都会找到Object.prototype，因此所有对象都有Object.prototype方法，这就是继承。
</code></pre><h3 id="_7、闭包" tabindex="-1"><a class="header-anchor" href="#_7、闭包" aria-hidden="true">#</a> 7、闭包</h3><pre><code>闭包是指有权访问另一个函数作用域中变量和方法的函数。
常见的创建方式是在一个函数内部创建另一个函数。
闭包使用不合理，会造成空间浪费、内存泄漏、性能消耗等问题。

\`闭包实现封装，只有通过对象的特定方法才能访问其属性。\`
</code></pre><h3 id="_8、关系" tabindex="-1"><a class="header-anchor" href="#_8、关系" aria-hidden="true">#</a> 8、关系</h3><pre><code>\`
函数被创建，有了作用域；  ————&gt; 语句执行的环境
函数被调用，有了作用域链；  ————&gt; 指向变量对象的指针列表
函数被继承时，有了原型链；  ————&gt; 利用原型让一个引用类型继承另一个引用类型的属性和方法
当需要获取作用域链或原型链上的变量或值时，有了闭包。  ————&gt; 闭包会沿着作用域链找到开发者想要的变量
\`
</code></pre><h3 id="_9、instanceof的判断规则" tabindex="-1"><a class="header-anchor" href="#_9、instanceof的判断规则" aria-hidden="true">#</a> 9、Instanceof的判断规则</h3><pre><code>(1)沿着 A 的 _proto_ 这条线找
(2)沿着 B 的 _proto_ 这条线找
(3)如果两条线找到同一个引用，即同一个对象，返回true;
(4)如果找到重点还未重合，返回false。
</code></pre><h3 id="_10、如何区分一个属性时基本属性还是原型链中的属性" tabindex="-1"><a class="header-anchor" href="#_10、如何区分一个属性时基本属性还是原型链中的属性" aria-hidden="true">#</a> 10、如何区分一个属性时基本属性还是原型链中的属性</h3><pre><code>function Foo(){

}

var f1 = new Foo();
f1.a = 10;
Foo.prototype.a = 100;
Foo.prototype.b = 200;

var item;
for(item in f1){
    if(f1.hasOwnProperty(item)){
        console.log(item);  // 结果为：a
    }
    console.log(item);   // 结果为：a , b
}
</code></pre><h3 id="_11、js运行前的准备" tabindex="-1"><a class="header-anchor" href="#_11、js运行前的准备" aria-hidden="true">#</a> 11、JS运行前的准备</h3><pre><code>(1)变量生命，默认undefined；
(2)this赋值
(3)函数生命赋值

函数在定义时就确定了函数体内部自由变量的作用域；
函数每次调用，都会产生一个新的执行上下文环境。
</code></pre>`,24),t=[d];function h(c,i){return a(),n("div",null,t)}const s=e(o,[["render",h],["__file","24-原型和闭包.html.vue"]]);export{s as default};
