import{_ as n,o,c as e,f as t}from"./app.15526377.js";const a={},r=t(`<h1 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h1><pre><code>OO(object oriented)  \u9762\u5411\u5BF9\u8C61
OOP(object oriented programming) \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B

\u9762\u5411\u5BF9\u8C61\u5B9E\u8D28: \u9762\u5411\u5BF9\u8C61\u662F\u5BF9\u9762\u5411\u8FC7\u7A0B\u7684\u5C01\u88C5
\u5BF9\u8C61\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u4E0D\u53D7\u5916\u754C\u5F71\u54CD\u3002
\u952E\u503C\u5BF9 key:value;

\u5BF9\u8C61\u662F\u4E00\u7CFB\u5217\u65E0\u5E8F\u5C5E\u6027\u6784\u6210 \u5C5E\u6027\u540D\u79F0:\u5C5E\u6027\u503C;
</code></pre><h2 id="\u5BF9\u8C61\u7684\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u521B\u5EFA" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u521B\u5EFA</h2><pre><code>//(1)\u5B57\u9762\u91CF\u65B9\u5F0F
var obj = {
    name:&#39;\u8346\u5929\u660E&#39;,
    age:18,
    sex:&#39;\u7537&#39;,
    say:function(){
        console.log(&quot;\u79E6\u65F6\u660E\u6708-&quot; + this.name);
    }
};


//(2)\u5DE5\u5382\u65B9\u5F0F
function factory(name,price){
    var obj = {};    //\u7A7A\u5BF9\u8C61
    obj.name = name;
    obj.price = price;
    return obj;
}

var bmw = factory(&quot;\u5B9D\u9A6C&quot;,&quot;25\u4E07&quot;);    
console.log(bmw);      //Object {name: &quot;\u5B9D\u9A6C&quot;, price: &quot;25\u4E07&quot;}


//(3)\u9AD8\u7EA7\u65B9\u5F0F( new + \u6784\u9020\u51FD\u6570 \u65B9\u5F0F)
var obj = new Object();
</code></pre><h2 id="\u5C5E\u6027\u7684\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u7684\u8BBF\u95EE" aria-hidden="true">#</a> \u5C5E\u6027\u7684\u8BBF\u95EE</h2><pre><code>//(1)\u589E\u52A0\u5C5E\u6027
obj.height = &quot;180cm&quot;;

//(2)\u5220\u9664\u5C5E\u6027
delete obj.sex;
delete obj[&quot;sex&quot;];

//(3)\u4FEE\u6539\u5C5E\u6027
obj.name = &quot;\u76D6\u8042&quot;;

//(4)\u8BBF\u95EE\u5C5E\u6027\u6216\u65B9\u6CD5
console.log(obj.name);
console.log(obj[&quot;name&quot;]);

obj.say();
obj[&quot;say&quot;]();

//(5)\u904D\u5386\u5BF9\u8C61
\u5BF9\u8C61\u53EA\u80FD\u7528for in\u904D\u5386(\u62FF\u5230\u7684\u662F\u6BCF\u4E2A\u5C5E\u6027)
for(var key in obj){
    console.log(key);       //\u6BCF\u4E2A\u5C5E\u6027
    console.log(obj[key]);  //\u6BCF\u4E2A\u5C5E\u6027\u503C, \u53EA\u80FD\u7528\u4E2D\u62EC\u53F7\u65B9\u5F0F\u8BBF\u95EE
}
</code></pre><h2 id="\u6293\u9519\u8BED\u53E5-\u4E0D\u4F1A\u963B\u6B62\u4E0B\u9762\u7684\u4EE3\u7801\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u6293\u9519\u8BED\u53E5-\u4E0D\u4F1A\u963B\u6B62\u4E0B\u9762\u7684\u4EE3\u7801\u8FD0\u884C" aria-hidden="true">#</a> \u6293\u9519\u8BED\u53E5(\u4E0D\u4F1A\u963B\u6B62\u4E0B\u9762\u7684\u4EE3\u7801\u8FD0\u884C)</h2><pre><code>try{
    //\u5C1D\u8BD5\u5904\u7406\u7684\u4EE3\u7801
    console.log(height);
}catch(e){
    //\u6293\u53D6\u9519\u8BEF\u4FE1\u606F
    console.log(e);
}
</code></pre><h2 id="\u7ED9\u5BF9\u8C61obj\u6DFB\u52A0\u5BF9\u8C61\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u5BF9\u8C61obj\u6DFB\u52A0\u5BF9\u8C61\u5C5E\u6027" aria-hidden="true">#</a> \u7ED9\u5BF9\u8C61obj\u6DFB\u52A0\u5BF9\u8C61\u5C5E\u6027</h2><pre><code>var car = {
    name:&#39;\u53D8\u5F62\u91D1\u521A&#39;,
    color:&#39;yellow&#39;,
    price:100000,
    say:function(){
        console.log(&quot;\u6211\u662F\u53D8\u5F62\u91D1\u521A&quot;);
    },
    run:function(){
        console.log(&quot;\u6211\u8981\u8DD1\u4E86&quot;);
    }
};

obj.car = car;
console.log(car);

//\u8BBF\u95EEobj\u7684car\u5C5E\u6027\u4E2D\u7684name\u503C
console.log(obj.car.name);
console.log(obj[&quot;car&quot;][&quot;name&quot;]);
</code></pre><p><strong>\u8BBF\u95EE\u5BF9\u8C61\u4E0D\u5B58\u5728\u7684\u5C5E\u6027, \u7ED3\u679C\u4E3Aundefine, \u5F31\u7C7B\u578B\u7684\u4F53\u73B0</strong></p><h2 id="new-\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#new-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> new + \u6784\u9020\u51FD\u6570</h2><pre><code>new String()
new Array()
new Date()
new RegExp()
new Map()

//(1)\u521B\u5EFA\u6784\u9020\u51FD\u6570
function Animal(name,color){
    this.name = name;
    this.color = color;
    this.say = function(){
        console.log(&quot;\u6211\u662F&quot;+this.name);
    }
}

//(2)\u521B\u5EFA\u5BF9\u8C61
var cat = new Animal(&quot;\u52A0\u83F2\u732B&quot;,&quot;\u767D\u8272&quot;);

//(3)\u5C5E\u6027\u8BBF\u95EE
console.log(cat);
cat.say();

\u6784\u9020\u51FD\u6570\uFF1A\u9996\u5B57\u6BCD\u5927\u5199
\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u5B9E\u4F8B\u5BF9\u8C61    \u4E00\u5BF9\u591A
</code></pre><h2 id="\u68C0\u6D4B\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u68C0\u6D4B\u6570\u636E\u7C7B\u578B</h2><pre><code>(1)typeof: \u80FD\u68C0\u6D4B\u7C7B\u578B\uFF0C\u4F46\u4E0D\u80FD\u7EC6\u5316
(2)instanceof: \u68C0\u6D4B\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u4E0E\u6784\u9020\u51FD\u6570\u7684\u5173\u7CFB(\u5B9E\u4F8B\u5BF9\u8C61 instanceof \u6784\u9020\u51FD\u6570)
(3)object.prototype.toString.call();
    object String
    object Array
    object Function

    object.prototype.toString.call(obj).slice(8,-1) === &quot;Array&quot;

********************* \u793A\u4F8B1 ************************************
function Person(name,age){
    this.name = name;
    this.age = age;
}

var person1 = new Person(&quot;\u59EC\u5982\u5343\u6CF7&quot;,18);
console.log(typeof person1);                   // Object
console.log(person1 instanceof Person);        // true

******************** \u793A\u4F8B2 *************************************
var arr = [1,2,3];
console.log(typeof arr);                       // Object
console.log(arr instanceof Array);             // true

******************** \u793A\u4F8B3 *************************************
function fn(){
    console.log(123);
}
console.log(typeof Person);                    //function\u7279\u6B8A\u7684\u6570\u636E\u7C7B\u578B
console.log(typeof fn);                        //function\u7279\u6B8A\u7684\u6570\u636E\u7C7B\u578B
console.log(fn instanceof Function);           //true
</code></pre>`,15),c=[r];function s(i,l){return o(),e("div",null,c)}const d=n(a,[["render",s],["__file","22-\u5BF9\u8C61.html.vue"]]);export{d as default};
