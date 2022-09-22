import{_ as n,o as t,c as o,b as e,d as l}from"./app.ef351b53.js";const a={},c=e("h1",{id:"dom\u5143\u7D20\u64CD\u4F5C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dom\u5143\u7D20\u64CD\u4F5C","aria-hidden":"true"},"#"),l(" DOM\u5143\u7D20\u64CD\u4F5C")],-1),d=e("p",null,"\u5143\u7D20\u8282\u70B9\u7684\u64CD\u4F5C\uFF1A\u521B\u5EFA\u3001\u6DFB\u52A0\u3001\u63D2\u5165\u3001\u5220\u9664\u3001\u66FF\u6362\u3001\u590D\u5236",-1),r=e("pre",null,[e("code",null,`<!DOCTYPE html>
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

    //\u5143\u7D20\u8282\u70B9\u7684\u64CD\u4F5C\uFF1A\u521B\u5EFA\u3001\u6DFB\u52A0\u3001\u63D2\u5165\u3001\u5220\u9664\u3001\u66FF\u6362\u3001\u590D\u5236

    //1\u3001\u521B\u5EFA\u5143\u7D20\u8282\u70B9createElement()
    function createElementFn(){
        var div = document.createElement("div");
        console.log(div);
    }

    //2\u3001\u521B\u5EFA\u6587\u672C\u8282\u70B9createTextNode()
    function createTextNodeFn(){
        var divText = document.createTextNode("\u6211\u662F\u65B0\u6765\u7684");
        console.log(divText);
    }

    //3\u3001\u6DFB\u52A0\u5B50\u8282\u70B9       \u7236\u8282\u70B9.appendChild(\u5B50\u8282\u70B9);
    function appendChildFn(){
        //1\u3001\u521B\u5EFAP\u6807\u7B7E
        var p = document.createElement("p");
        //2\u3001\u521B\u5EFA\u6587\u672C\uFF1A\u6211\u662FP\u6807\u7B7E
        var pText = document.createTextNode("\u6211\u662FP\u6807\u7B7E");
        //3\u3001\u7ED9P\u6807\u7B7E\u6DFB\u52A0\u6587\u672C\u8282\u70B9
        p.appendChild(pText);
        //4\u3001\u5C06p\u6807\u7B7E\u663E\u793A\u5728\u9875\u9762\u7236\u8282\u70B9body
        //\u6DFB\u52A0\u5230body\u7684\u6700\u540E\uFF0C\u7C7B\u4F3Cpush
        document.body.appendChild(p);
    }

    //4\u3001\u63D2\u5165\u5B50\u8282\u70B9       \u7236\u8282\u70B9.insertBefore(new\uFF0Cold);
    //\u53C2\u65701\uFF1Anew-\u8981\u63D2\u5165\u7684\u8282\u70B9    \u53C2\u65702\uFF1Aold-\u53C2\u7167\u8282\u70B9
    function insertBeforeFn(){
        //1\u3001\u521B\u5EFAP\u6807\u7B7E
        var p = document.createElement("p");
        //2\u3001\u521B\u5EFA\u6587\u672C\uFF1A\u6211\u662FP\u6807\u7B7E
        var pText = document.createTextNode("\u6211\u662FP\u6807\u7B7E");
        //3\u3001\u7ED9P\u6807\u7B7E\u6DFB\u52A0\u6587\u672C\u8282\u70B9
        p.appendChild(pText);
        //4\u3001\u5C06p\u6807\u7B7E\u63D2\u5165\u5230\u7B2C\u4E00\u4E2A\u6309\u94AE\u524D
        var btn1 = document.getElementsByTagName("input")[0];
        document.body.insertBefore(p,btn1);
    }

    //5\u3001\u5220\u9664\u5B50\u8282\u70B9     \u7236\u8282\u70B9.removeChild(\u5B50\u8282\u70B9);
    function removeChildFn(){
        var btn3 = document.getElementsByTagName("input")[2];
        document.body.removeChild(btn3);
    }

    //6\u3001\u66FF\u6362\u5B50\u8282\u70B9      \u7236\u8282\u70B9.replaceChild(\u66FF\u6362\u6210new\uFF0C\u88AB\u66FF\u6362old );
    function replaceChildFn(){
        //1\u3001\u521B\u5EFAa\u6807\u7B7E
        var aEle = document.createElement("a");
        //2\u3001\u8BBE\u7F6Ehref\u5C5E\u6027
        aEle.href = "01\u975E\u8868\u5355\u5143\u7D20\u5185\u5BB9.html";
        //3\u3001\u521B\u5EFA\u6587\u672C\u8282\u70B9
        var aTxt = document.createTextNode("\u70B9\u6211\u8DF3\u8F6C");
        //4\u3001\u628A\u6587\u672C\u6DFB\u52A0\u5230\u6807\u7B7E
        aEle.appendChild(aTxt);
        //5\u3001\u66FF\u6362\u6389\u7B2C\u4E00\u4E2A\u6309\u94AE
        var btn1 = document.getElementsByTagName("input")[0];
        document.body.replaceChild(aEle,btn1);
    }

    //7\u3001\u590D\u5236\u8282\u70B9       \u5143\u7D20\u8282\u70B9.cloneNode();
    //false : \u590D\u5236\u6807\u7B7E\u81EA\u8EAB   \u6D45\u590D\u5236    \u9ED8\u8BA4
    //true  : \u590D\u5236\u6807\u7B7E+\u5185\u5BB9  \u6DF1\u590D\u5236
    function cloneNodeFn(){
        var aEle = document.createElement("a");
        aEle.href = "01\u975E\u8868\u5355\u5143\u7D20\u5185\u5BB9.html";
        var aTxt = document.createTextNode("\u70B9\u6211\u8DF3\u8F6C");
        aEle.appendChild(aTxt);
        console.log(aEle);                   //\u6709\u6587\u672C\u5185\u5BB9
        console.log(aEle.cloneNode(false));  //\u6CA1\u6709\u6587\u672C
        console.log(aEle.cloneNode(true));   //\u6709\u6587\u672C\u5185\u5BB9
    }
<\/script>
`)],-1),i=[c,d,r];function p(u,m){return t(),o("div",null,i)}const s=n(a,[["render",p],["__file","13-DOM\u5143\u7D20\u64CD\u4F5C.html.vue"]]);export{s as default};
