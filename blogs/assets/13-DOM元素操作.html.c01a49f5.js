import{_ as n,o as t,c as o,a as e,b as a}from"./app.79208424.js";const l={},c=e("h1",{id:"dom元素操作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dom元素操作","aria-hidden":"true"},"#"),a(" DOM元素操作")],-1),d=e("p",null,"元素节点的操作：创建、添加、插入、删除、替换、复制",-1),r=e("pre",null,[e("code",null,`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <input type="button"  value="createElement" onclick="createElementFn()"/>
        <input type="button"  value="createTextNode" onclick="createTextNodeFn()"/>
        <input type="button"  value="appendChild" onclick="appendChildFn()"/>
        <input type="button"  value="insertBefore" onclick="insertBeforeFn()"/>
        <input type="button"  value="removeChild" onclick="removeChildFn()"/>
        <input type="button"  value="replaceChild" onclick="replaceChildFn()"/>
        <input type="button"  value="cloneNode" onclick="cloneNodeFn()"/>
        SSS
    </body>
</html>
<script type="text/javascript">

    //元素节点的操作：创建、添加、插入、删除、替换、复制

    //1、创建元素节点createElement()
    function createElementFn(){
        var div = document.createElement("div");
        console.log(div);
    }

    //2、创建文本节点createTextNode()
    function createTextNodeFn(){
        var divText = document.createTextNode("我是新来的");
        console.log(divText);
    }

    //3、添加子节点       父节点.appendChild(子节点);
    function appendChildFn(){
        //1、创建P标签
        var p = document.createElement("p");
        //2、创建文本：我是P标签
        var pText = document.createTextNode("我是P标签");
        //3、给P标签添加文本节点
        p.appendChild(pText);
        //4、将p标签显示在页面父节点body
        //添加到body的最后，类似push
        document.body.appendChild(p);
    }

    //4、插入子节点       父节点.insertBefore(new，old);
    //参数1：new-要插入的节点    参数2：old-参照节点
    function insertBeforeFn(){
        //1、创建P标签
        var p = document.createElement("p");
        //2、创建文本：我是P标签
        var pText = document.createTextNode("我是P标签");
        //3、给P标签添加文本节点
        p.appendChild(pText);
        //4、将p标签插入到第一个按钮前
        var btn1 = document.getElementsByTagName("input")[0];
        document.body.insertBefore(p,btn1);
    }

    //5、删除子节点     父节点.removeChild(子节点);
    function removeChildFn(){
        var btn3 = document.getElementsByTagName("input")[2];
        document.body.removeChild(btn3);
    }

    //6、替换子节点      父节点.replaceChild(替换成new，被替换old );
    function replaceChildFn(){
        //1、创建a标签
        var aEle = document.createElement("a");
        //2、设置href属性
        aEle.href = "01非表单元素内容.html";
        //3、创建文本节点
        var aTxt = document.createTextNode("点我跳转");
        //4、把文本添加到标签
        aEle.appendChild(aTxt);
        //5、替换掉第一个按钮
        var btn1 = document.getElementsByTagName("input")[0];
        document.body.replaceChild(aEle,btn1);
    }

    //7、复制节点       元素节点.cloneNode();
    //false : 复制标签自身   浅复制    默认
    //true  : 复制标签+内容  深复制
    function cloneNodeFn(){
        var aEle = document.createElement("a");
        aEle.href = "01非表单元素内容.html";
        var aTxt = document.createTextNode("点我跳转");
        aEle.appendChild(aTxt);
        console.log(aEle);                   //有文本内容
        console.log(aEle.cloneNode(false));  //没有文本
        console.log(aEle.cloneNode(true));   //有文本内容
    }
<\/script>
`)],-1),i=[c,d,r];function p(u,m){return t(),o("div",null,i)}const s=n(l,[["render",p],["__file","13-DOM元素操作.html.vue"]]);export{s as default};
