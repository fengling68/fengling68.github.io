import{_ as n,o,c as e,f as t}from"./app.fa375d3e.js";const a={},r=t(`<h1 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h1><pre><code>OO(object oriented)  面向对象
OOP(object oriented programming) 面向对象编程

面向对象实质: 面向对象是对面向过程的封装
对象是一个独立的命名空间，不受外界影响。
键值对 key:value;

对象是一系列无序属性构成 属性名称:属性值;
</code></pre><h2 id="对象的创建" tabindex="-1"><a class="header-anchor" href="#对象的创建" aria-hidden="true">#</a> 对象的创建</h2><pre><code>//(1)字面量方式
var obj = {
    name:&#39;荆天明&#39;,
    age:18,
    sex:&#39;男&#39;,
    say:function(){
        console.log(&quot;秦时明月-&quot; + this.name);
    }
};


//(2)工厂方式
function factory(name,price){
    var obj = {};    //空对象
    obj.name = name;
    obj.price = price;
    return obj;
}

var bmw = factory(&quot;宝马&quot;,&quot;25万&quot;);    
console.log(bmw);      //Object {name: &quot;宝马&quot;, price: &quot;25万&quot;}


//(3)高级方式( new + 构造函数 方式)
var obj = new Object();
</code></pre><h2 id="属性的访问" tabindex="-1"><a class="header-anchor" href="#属性的访问" aria-hidden="true">#</a> 属性的访问</h2><pre><code>//(1)增加属性
obj.height = &quot;180cm&quot;;

//(2)删除属性
delete obj.sex;
delete obj[&quot;sex&quot;];

//(3)修改属性
obj.name = &quot;盖聂&quot;;

//(4)访问属性或方法
console.log(obj.name);
console.log(obj[&quot;name&quot;]);

obj.say();
obj[&quot;say&quot;]();

//(5)遍历对象
对象只能用for in遍历(拿到的是每个属性)
for(var key in obj){
    console.log(key);       //每个属性
    console.log(obj[key]);  //每个属性值, 只能用中括号方式访问
}
</code></pre><h2 id="抓错语句-不会阻止下面的代码运行" tabindex="-1"><a class="header-anchor" href="#抓错语句-不会阻止下面的代码运行" aria-hidden="true">#</a> 抓错语句(不会阻止下面的代码运行)</h2><pre><code>try{
    //尝试处理的代码
    console.log(height);
}catch(e){
    //抓取错误信息
    console.log(e);
}
</code></pre><h2 id="给对象obj添加对象属性" tabindex="-1"><a class="header-anchor" href="#给对象obj添加对象属性" aria-hidden="true">#</a> 给对象obj添加对象属性</h2><pre><code>var car = {
    name:&#39;变形金刚&#39;,
    color:&#39;yellow&#39;,
    price:100000,
    say:function(){
        console.log(&quot;我是变形金刚&quot;);
    },
    run:function(){
        console.log(&quot;我要跑了&quot;);
    }
};

obj.car = car;
console.log(car);

//访问obj的car属性中的name值
console.log(obj.car.name);
console.log(obj[&quot;car&quot;][&quot;name&quot;]);
</code></pre><p><strong>访问对象不存在的属性, 结果为undefine, 弱类型的体现</strong></p><h2 id="new-构造函数" tabindex="-1"><a class="header-anchor" href="#new-构造函数" aria-hidden="true">#</a> new + 构造函数</h2><pre><code>new String()
new Array()
new Date()
new RegExp()
new Map()

//(1)创建构造函数
function Animal(name,color){
    this.name = name;
    this.color = color;
    this.say = function(){
        console.log(&quot;我是&quot;+this.name);
    }
}

//(2)创建对象
var cat = new Animal(&quot;加菲猫&quot;,&quot;白色&quot;);

//(3)属性访问
console.log(cat);
cat.say();

构造函数：首字母大写
一个构造函数，可以创建多个实例对象    一对多
</code></pre><h2 id="检测数据类型" tabindex="-1"><a class="header-anchor" href="#检测数据类型" aria-hidden="true">#</a> 检测数据类型</h2><pre><code>(1)typeof: 能检测类型，但不能细化
(2)instanceof: 检测某个实例对象与构造函数的关系(实例对象 instanceof 构造函数)
(3)object.prototype.toString.call();
    object String
    object Array
    object Function

    object.prototype.toString.call(obj).slice(8,-1) === &quot;Array&quot;

********************* 示例1 ************************************
function Person(name,age){
    this.name = name;
    this.age = age;
}

var person1 = new Person(&quot;姬如千泷&quot;,18);
console.log(typeof person1);                   // Object
console.log(person1 instanceof Person);        // true

******************** 示例2 *************************************
var arr = [1,2,3];
console.log(typeof arr);                       // Object
console.log(arr instanceof Array);             // true

******************** 示例3 *************************************
function fn(){
    console.log(123);
}
console.log(typeof Person);                    //function特殊的数据类型
console.log(typeof fn);                        //function特殊的数据类型
console.log(fn instanceof Function);           //true
</code></pre>`,15),c=[r];function s(i,l){return o(),e("div",null,c)}const d=n(a,[["render",s],["__file","22-对象.html.vue"]]);export{d as default};
