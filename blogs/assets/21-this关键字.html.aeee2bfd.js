import{_ as n,o as e,c as a,f as o}from"./app.988d0af1.js";const t={},i=o(`<h1 id="this关键字" tabindex="-1"><a class="header-anchor" href="#this关键字" aria-hidden="true">#</a> this关键字</h1><pre><code>this对象：每个函数中都会有this对象。 context:上下文对象
this总是指向调用该函数的对象。
this一般存在于函数中，this指向的是该函数存在的对象。
</code></pre><h2 id="this应用场景" tabindex="-1"><a class="header-anchor" href="#this应用场景" aria-hidden="true">#</a> this应用场景</h2><h3 id="_1、console-log-this-全局下指window" tabindex="-1"><a class="header-anchor" href="#_1、console-log-this-全局下指window" aria-hidden="true">#</a> 1、console.log(this); //全局下指window</h3><h3 id="_2、事件响应函数中使用this-指代事件源。" tabindex="-1"><a class="header-anchor" href="#_2、事件响应函数中使用this-指代事件源。" aria-hidden="true">#</a> 2、事件响应函数中使用this , 指代事件源。</h3><pre><code>onclick = &quot;fn(this)&quot;         //HTML方式要传参
function fn(this){}

btn.onclick = function(){    //DOM0级事件直接使用即可
    alert(this.value);
}
</code></pre><h3 id="_3、字面量方式创建简单对象中使用-指代当前对象" tabindex="-1"><a class="header-anchor" href="#_3、字面量方式创建简单对象中使用-指代当前对象" aria-hidden="true">#</a> 3、字面量方式创建简单对象中使用 , 指代当前对象</h3><pre><code>var obj = {
    name:&#39;荆天明&#39;,
    say:function(){
        console.log(&quot;秦时明月-&quot; + this.name);
    }
};
</code></pre><h3 id="_4、构造函数中使用-指代创建的对象实例" tabindex="-1"><a class="header-anchor" href="#_4、构造函数中使用-指代创建的对象实例" aria-hidden="true">#</a> 4、构造函数中使用 , 指代创建的对象实例</h3><pre><code>function Person(name,age){
    this.name = name;
    this.age = age;
}
var per = new Person(&quot;abc&quot;,20);

没有实例的时候，this指代window。
</code></pre><h3 id="_5、call-和apply-可以改变this的指向" tabindex="-1"><a class="header-anchor" href="#_5、call-和apply-可以改变this的指向" aria-hidden="true">#</a> 5、call()和apply()可以改变this的指向</h3><pre><code>var obj1 = {
    verson:&quot;#1.0&quot;
};
var obj2 = {
    getVerson:function(){
        console.log(this.verson);   
    }
}

obj2.getVerson();            //this指obj2 , undefined
obj2.getVerson.call(obj1);   //this指obj1 , #1.0
</code></pre><h3 id="_6、call-和apply-的相同与不同" tabindex="-1"><a class="header-anchor" href="#_6、call-和apply-的相同与不同" aria-hidden="true">#</a> 6、call()和apply()的相同与不同</h3><pre><code>***********************相同(使用方法和指向)*************************
书写规范：
(1)函数体(函数名)调用call();
(2)参数:对象,调用者
********************************************************************

function fn(){
    console.log(&quot;我叫&quot; + this.name);    //this指window
}

var person = {
    name : &quot;荆天明&quot;,
    age : 18
};

fn.call(person);                       //this指向person
fn.apply(person);                      //this指向person

**********************不同(传参不同)*******************************
apply规定最多有两个参数(放入数组，自动一一匹配)
*******************************************************************

function sum(c,d){
    console.log(this.a + this.b + c + d);
}
var obj = {
    a:20,
    b:20
};

sum.call( obj , 30 , 40 );
sum.apply( obj , [30 , 40] );
</code></pre>`,14),h=[i];function s(r,c){return e(),a("div",null,h)}const l=n(t,[["render",s],["__file","21-this关键字.html.vue"]]);export{l as default};
