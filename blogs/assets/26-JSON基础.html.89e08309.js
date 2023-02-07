import{_ as n,o,c as e,f as t}from"./app.4112d7f2.js";const a={},s=t(`<h1 id="json基础" tabindex="-1"><a class="header-anchor" href="#json基础" aria-hidden="true">#</a> JSON基础</h1><h2 id="json-javascript-object-notation" tabindex="-1"><a class="header-anchor" href="#json-javascript-object-notation" aria-hidden="true">#</a> JSON(JavaScript Object Notation)</h2><pre><code>是一种轻量级的数据交换格式，广泛的用于互联网数据的传输。
保存数据的媒介，是JavaScript中的一种数据类型。
值：数字、字符串、布尔、特殊、数组、对象
</code></pre><h2 id="json的构成-名值对" tabindex="-1"><a class="header-anchor" href="#json的构成-名值对" aria-hidden="true">#</a> JSON的构成 (名值对)</h2><pre><code>1、简单值：数字，字符串，布尔类型，特殊类型
2、对象：{名值对或数组}
3、数组：[]

/*********** JSON格式 对象键名必须有引号 **************/
var person = {
    &quot;name&quot; : &quot;姬如千泷&quot;,
    &quot;age&quot; : 23,
    &quot;sex&quot; : &quot;女&quot;,
    &quot;family&quot; : [&quot;爸爸&quot;,&quot;妈妈&quot;]
};

获取和设置JSON的属性值
var perName = person.name;

改变属性值
person.age = 18;

定义json数组：跟js的数组使用方式相同。
/******* 一般json的数组中，存放json对象,用来存放多个数据 ******/
var meeting = [
    {
        &quot;name&quot;: &quot;荆天明&quot;,
        &quot;age&quot;: 18
    },
    {
        &quot;name&quot;: &quot;姬如千泷&quot;,
        &quot;age&quot;: 18
    },
];

遍历数组并输出到页面    
window.onload = function(){
    for(var i = 0 ; i &lt; meeting.length ; i++){
        var per = meeting[i];
        h1.innerHTML += &quot;姓名:&quot; + per.name + &quot;年龄:&quot; + per.age;
    }
}
</code></pre><h2 id="用json可做" tabindex="-1"><a class="header-anchor" href="#用json可做" aria-hidden="true">#</a> 用json可做</h2><pre><code>1、会定义各种json（普通对象 ， 数组描述多个事物）
    例：新闻构成(title,time,content,author,class)
2、使用json，获取json中保存的数据。
</code></pre><h2 id="json解析和序列化" tabindex="-1"><a class="header-anchor" href="#json解析和序列化" aria-hidden="true">#</a> json解析和序列化</h2><pre><code>json解析：将字符串转换成json数据。
json序列化：将json数据转换为字符串。

全局对象JSON对json进行解析以及序列化
var json = &#39;{&quot;name&quot;:&quot;zhangsan&quot;}&#39;;

1、eval()方法
    var jsonObj = eval( &quot; ( &quot; + json + &quot; ) &quot; );
    ()告诉eval方法，传递给方法的参数是json字符串，要将其解析为json数据

2、parse()解析方法————将json字符串转换为json数据
    var jsonObj = JSON.parse(json);
    console.log(jsonObj);    

3、stringify()序列化方法————将json数据转换为json字符串
    var jsonStr = JSON.stringify(jsonObj);
    console.log(jsonStr);
</code></pre><p><strong>早期浏览器不支持JSON，使用第三方插件：json2.js</strong></p>`,10),r=[s];function i(u,j){return o(),e("div",null,r)}const d=n(a,[["render",i],["__file","26-JSON基础.html.vue"]]);export{d as default};
