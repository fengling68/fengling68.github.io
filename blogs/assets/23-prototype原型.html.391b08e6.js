import{_ as e,o as n,c as o,f as a}from"./app.7e19d012.js";const t={},r=a(`<h1 id="prototype原型" tabindex="-1"><a class="header-anchor" href="#prototype原型" aria-hidden="true">#</a> prototype原型</h1><h2 id="原型的基本知识" tabindex="-1"><a class="header-anchor" href="#原型的基本知识" aria-hidden="true">#</a> 原型的基本知识</h2><h3 id="_1、创建构造函数-都有一个-属性-prototype-属性值-是对象" tabindex="-1"><a class="header-anchor" href="#_1、创建构造函数-都有一个-属性-prototype-属性值-是对象" aria-hidden="true">#</a> 1、创建构造函数(都有一个 属性：prototype ; 属性值 : 是对象)</h3><pre><code>function Person (name,age) {
    this.name = name;
    this.age = age;
}
console.log(Person.prototype);   //原型对象   Object {constructor: function}
</code></pre><h3 id="_2、可以给原型对象添加属性" tabindex="-1"><a class="header-anchor" href="#_2、可以给原型对象添加属性" aria-hidden="true">#</a> 2、可以给原型对象添加属性</h3><pre><code>Person.prototype.name = &quot;姬如千泷&quot;;
Person.prototype.sex = &quot;女&quot;;
Person.prototype.say = function () {
    console.log(&quot;我是原型对象中的say函数&quot;);
}

console.log(Person);
console.log(Person.prototype);
</code></pre><h3 id="_3、实例一个对象" tabindex="-1"><a class="header-anchor" href="#_3、实例一个对象" aria-hidden="true">#</a> 3、实例一个对象</h3><pre><code>var person1 = new Person(&quot;荆天明&quot;,29);    //结果：荆天明   优先访问构造函数
console.log(person1.name);
</code></pre><h3 id="_4、原型对象中的属性-可以为-通过构造函数创建的-实例对象所使用-共用" tabindex="-1"><a class="header-anchor" href="#_4、原型对象中的属性-可以为-通过构造函数创建的-实例对象所使用-共用" aria-hidden="true">#</a> 4、原型对象中的属性，可以为(通过构造函数创建的)实例对象所使用(共用);</h3><pre><code>实例对象能够访问原型对象中的属性，实例对象中并没有该属性，但可以使用。节省了空间。

console.log(person1.sex);
person1.say();
</code></pre><h3 id="_5、其他" tabindex="-1"><a class="header-anchor" href="#_5、其他" aria-hidden="true">#</a> 5、其他</h3><pre><code>约定俗成：构造函数设置静态属性，原型对象设置共用的动态属性。
属性访问时优先级：先访问构造函数中(自身)拥有的 ，没有 后在原型对象中查找。
</code></pre><h2 id="验证属性是构造函数-自身-的-还是原型对象的。" tabindex="-1"><a class="header-anchor" href="#验证属性是构造函数-自身-的-还是原型对象的。" aria-hidden="true">#</a> 验证属性是构造函数(自身)的，还是原型对象的。</h2><h3 id="_1、hasownproperty-检测属性是不是自身的-是-true-否-false" tabindex="-1"><a class="header-anchor" href="#_1、hasownproperty-检测属性是不是自身的-是-true-否-false" aria-hidden="true">#</a> 1、hasOwnProperty() 检测属性是不是自身的：是, true; 否, false</h3><pre><code>console.log(per1.hasOwnProperty(&quot;name&quot;));
</code></pre><h3 id="_2、in-检测某个对象能否访问某个属性。不区分是否为自身的。true或false" tabindex="-1"><a class="header-anchor" href="#_2、in-检测某个对象能否访问某个属性。不区分是否为自身的。true或false" aria-hidden="true">#</a> 2、in 检测某个对象能否访问某个属性。不区分是否为自身的。true或false</h3><pre><code>console.log(&quot;name&quot; in person1);
</code></pre><p><br><br><br></p><h2 id="三种继承方式" tabindex="-1"><a class="header-anchor" href="#三种继承方式" aria-hidden="true">#</a> 三种继承方式</h2><ul><li>抽象 面向对象 三个特征: 继承 封装 多态(重载)</li><li>对象比函数的封装更高一级</li></ul><h3 id="_1、原型继承" tabindex="-1"><a class="header-anchor" href="#_1、原型继承" aria-hidden="true">#</a> 1、原型继承</h3><p>继承：原型继承(只能继承一次)</p><p>原型继承实现: 将上级构造函数的实例对象赋值给下级构造函数的原型。</p><pre><code>**********************代码示例*********************************
function Father(name){
    this.name = name;
}
function Son(age){
    this.age = age;
}

var father = new Father(&quot;小头爸爸&quot;);
var son = new Son(10);

Son.prototype = father;  //将父的实例对象赋值给子构造函数的原型    
son.name = &quot;大头儿子&quot;;   

console.log(son);        //Son {age: 10, name: &quot;大头儿子&quot;}
</code></pre><p>原型链( 指针 <em>proto</em> )</p><pre><code>var obj = new Object();    
Son.prototype = father;

son.__proto__     ==  Son.prototype;           //true
father.__proto__  ==  Father.prototype;     //true
obj.__proto__     ==  Object.prototype;        //true
</code></pre><p>原型链</p><pre><code>son.__proto__     指向 Father {name: &quot;小头爸爸&quot;}
father.__proto__  指向 Object {constructor: function}
obj.__proto__
</code></pre><h3 id="_2、构造函数方式继承call-apply" tabindex="-1"><a class="header-anchor" href="#_2、构造函数方式继承call-apply" aria-hidden="true">#</a> 2、构造函数方式继承call(),apply()</h3><p>可以继承多个, 但不能访问原型对象中的属性</p><pre><code>**************************** 代码示例 *****************************
function GrandaFather(city,sex){
    this.city = city;
    this.sex = sex;
}

function Father(name){
    this.name = name;
    this.getName = function(){
        console.log(this.name);
    }
}

function Son(age,name,city,sex){
    this.age = age;
    Father.call(this,name);               // this 指向 创建出的实例对象
    GrandaFather.apply(this,[city,sex]);

    /*************这里有问题**************
    Father.call(this,arguments[0]);
    GrandaFather.apply(this,arguments);    */
}

var son = new Son(18,&quot;石兰&quot;,&quot;蜀国&quot;,&quot;女&quot;);
console.log(son);

//Son {age: 18, name: &quot;石兰&quot;, city: &quot;蜀国&quot;, sex: &quot;女&quot;, getName: function}
</code></pre><h3 id="_3、组合继承" tabindex="-1"><a class="header-anchor" href="#_3、组合继承" aria-hidden="true">#</a> 3、组合继承</h3>`,32),h=[r];function s(c,i){return n(),o("div",null,h)}const p=e(t,[["render",s],["__file","23-prototype原型.html.vue"]]);export{p as default};
