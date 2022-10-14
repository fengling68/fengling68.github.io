import{_ as n,o,c as e,f as t}from"./app.8c2947ab.js";const a={},s=t(`<h1 id="json\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#json\u57FA\u7840" aria-hidden="true">#</a> JSON\u57FA\u7840</h1><h2 id="json-javascript-object-notation" tabindex="-1"><a class="header-anchor" href="#json-javascript-object-notation" aria-hidden="true">#</a> JSON(JavaScript Object Notation)</h2><pre><code>\u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u6570\u636E\u4EA4\u6362\u683C\u5F0F\uFF0C\u5E7F\u6CDB\u7684\u7528\u4E8E\u4E92\u8054\u7F51\u6570\u636E\u7684\u4F20\u8F93\u3002
\u4FDD\u5B58\u6570\u636E\u7684\u5A92\u4ECB\uFF0C\u662FJavaScript\u4E2D\u7684\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u3002
\u503C\uFF1A\u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u3001\u7279\u6B8A\u3001\u6570\u7EC4\u3001\u5BF9\u8C61
</code></pre><h2 id="json\u7684\u6784\u6210-\u540D\u503C\u5BF9" tabindex="-1"><a class="header-anchor" href="#json\u7684\u6784\u6210-\u540D\u503C\u5BF9" aria-hidden="true">#</a> JSON\u7684\u6784\u6210 (\u540D\u503C\u5BF9)</h2><pre><code>1\u3001\u7B80\u5355\u503C\uFF1A\u6570\u5B57\uFF0C\u5B57\u7B26\u4E32\uFF0C\u5E03\u5C14\u7C7B\u578B\uFF0C\u7279\u6B8A\u7C7B\u578B
2\u3001\u5BF9\u8C61\uFF1A{\u540D\u503C\u5BF9\u6216\u6570\u7EC4}
3\u3001\u6570\u7EC4\uFF1A[]

/*********** JSON\u683C\u5F0F \u5BF9\u8C61\u952E\u540D\u5FC5\u987B\u6709\u5F15\u53F7 **************/
var person = {
    &quot;name&quot; : &quot;\u59EC\u5982\u5343\u6CF7&quot;,
    &quot;age&quot; : 23,
    &quot;sex&quot; : &quot;\u5973&quot;,
    &quot;family&quot; : [&quot;\u7238\u7238&quot;,&quot;\u5988\u5988&quot;]
};

\u83B7\u53D6\u548C\u8BBE\u7F6EJSON\u7684\u5C5E\u6027\u503C
var perName = person.name;

\u6539\u53D8\u5C5E\u6027\u503C
person.age = 18;

\u5B9A\u4E49json\u6570\u7EC4\uFF1A\u8DDFjs\u7684\u6570\u7EC4\u4F7F\u7528\u65B9\u5F0F\u76F8\u540C\u3002
/******* \u4E00\u822Cjson\u7684\u6570\u7EC4\u4E2D\uFF0C\u5B58\u653Ejson\u5BF9\u8C61,\u7528\u6765\u5B58\u653E\u591A\u4E2A\u6570\u636E ******/
var meeting = [
    {
        &quot;name&quot;: &quot;\u8346\u5929\u660E&quot;,
        &quot;age&quot;: 18
    },
    {
        &quot;name&quot;: &quot;\u59EC\u5982\u5343\u6CF7&quot;,
        &quot;age&quot;: 18
    },
];

\u904D\u5386\u6570\u7EC4\u5E76\u8F93\u51FA\u5230\u9875\u9762    
window.onload = function(){
    for(var i = 0 ; i &lt; meeting.length ; i++){
        var per = meeting[i];
        h1.innerHTML += &quot;\u59D3\u540D:&quot; + per.name + &quot;\u5E74\u9F84:&quot; + per.age;
    }
}
</code></pre><h2 id="\u7528json\u53EF\u505A" tabindex="-1"><a class="header-anchor" href="#\u7528json\u53EF\u505A" aria-hidden="true">#</a> \u7528json\u53EF\u505A</h2><pre><code>1\u3001\u4F1A\u5B9A\u4E49\u5404\u79CDjson\uFF08\u666E\u901A\u5BF9\u8C61 \uFF0C \u6570\u7EC4\u63CF\u8FF0\u591A\u4E2A\u4E8B\u7269\uFF09
    \u4F8B\uFF1A\u65B0\u95FB\u6784\u6210(title,time,content,author,class)
2\u3001\u4F7F\u7528json\uFF0C\u83B7\u53D6json\u4E2D\u4FDD\u5B58\u7684\u6570\u636E\u3002
</code></pre><h2 id="json\u89E3\u6790\u548C\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#json\u89E3\u6790\u548C\u5E8F\u5217\u5316" aria-hidden="true">#</a> json\u89E3\u6790\u548C\u5E8F\u5217\u5316</h2><pre><code>json\u89E3\u6790\uFF1A\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210json\u6570\u636E\u3002
json\u5E8F\u5217\u5316\uFF1A\u5C06json\u6570\u636E\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002

\u5168\u5C40\u5BF9\u8C61JSON\u5BF9json\u8FDB\u884C\u89E3\u6790\u4EE5\u53CA\u5E8F\u5217\u5316
var json = &#39;{&quot;name&quot;:&quot;zhangsan&quot;}&#39;;

1\u3001eval()\u65B9\u6CD5
    var jsonObj = eval( &quot; ( &quot; + json + &quot; ) &quot; );
    ()\u544A\u8BC9eval\u65B9\u6CD5\uFF0C\u4F20\u9012\u7ED9\u65B9\u6CD5\u7684\u53C2\u6570\u662Fjson\u5B57\u7B26\u4E32\uFF0C\u8981\u5C06\u5176\u89E3\u6790\u4E3Ajson\u6570\u636E

2\u3001parse()\u89E3\u6790\u65B9\u6CD5\u2014\u2014\u2014\u2014\u5C06json\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Ajson\u6570\u636E
    var jsonObj = JSON.parse(json);
    console.log(jsonObj);    

3\u3001stringify()\u5E8F\u5217\u5316\u65B9\u6CD5\u2014\u2014\u2014\u2014\u5C06json\u6570\u636E\u8F6C\u6362\u4E3Ajson\u5B57\u7B26\u4E32
    var jsonStr = JSON.stringify(jsonObj);
    console.log(jsonStr);
</code></pre><p><strong>\u65E9\u671F\u6D4F\u89C8\u5668\u4E0D\u652F\u6301JSON\uFF0C\u4F7F\u7528\u7B2C\u4E09\u65B9\u63D2\u4EF6\uFF1Ajson2.js</strong></p>`,10),r=[s];function i(u,j){return o(),e("div",null,r)}const d=n(a,[["render",i],["__file","26-JSON\u57FA\u7840.html.vue"]]);export{d as default};
