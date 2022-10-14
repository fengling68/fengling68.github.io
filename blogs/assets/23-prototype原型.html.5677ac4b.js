import{_ as e,o as n,c as o,f as a}from"./app.29c262e3.js";const t={},r=a(`<h1 id="prototype\u539F\u578B" tabindex="-1"><a class="header-anchor" href="#prototype\u539F\u578B" aria-hidden="true">#</a> prototype\u539F\u578B</h1><h2 id="\u539F\u578B\u7684\u57FA\u672C\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u7684\u57FA\u672C\u77E5\u8BC6" aria-hidden="true">#</a> \u539F\u578B\u7684\u57FA\u672C\u77E5\u8BC6</h2><h3 id="_1\u3001\u521B\u5EFA\u6784\u9020\u51FD\u6570-\u90FD\u6709\u4E00\u4E2A-\u5C5E\u6027-prototype-\u5C5E\u6027\u503C-\u662F\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u521B\u5EFA\u6784\u9020\u51FD\u6570-\u90FD\u6709\u4E00\u4E2A-\u5C5E\u6027-prototype-\u5C5E\u6027\u503C-\u662F\u5BF9\u8C61" aria-hidden="true">#</a> 1\u3001\u521B\u5EFA\u6784\u9020\u51FD\u6570(\u90FD\u6709\u4E00\u4E2A \u5C5E\u6027\uFF1Aprototype ; \u5C5E\u6027\u503C : \u662F\u5BF9\u8C61)</h3><pre><code>function Person (name,age) {
    this.name = name;
    this.age = age;
}
console.log(Person.prototype);   //\u539F\u578B\u5BF9\u8C61   Object {constructor: function}
</code></pre><h3 id="_2\u3001\u53EF\u4EE5\u7ED9\u539F\u578B\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u53EF\u4EE5\u7ED9\u539F\u578B\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027" aria-hidden="true">#</a> 2\u3001\u53EF\u4EE5\u7ED9\u539F\u578B\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027</h3><pre><code>Person.prototype.name = &quot;\u59EC\u5982\u5343\u6CF7&quot;;
Person.prototype.sex = &quot;\u5973&quot;;
Person.prototype.say = function () {
    console.log(&quot;\u6211\u662F\u539F\u578B\u5BF9\u8C61\u4E2D\u7684say\u51FD\u6570&quot;);
}

console.log(Person);
console.log(Person.prototype);
</code></pre><h3 id="_3\u3001\u5B9E\u4F8B\u4E00\u4E2A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u5B9E\u4F8B\u4E00\u4E2A\u5BF9\u8C61" aria-hidden="true">#</a> 3\u3001\u5B9E\u4F8B\u4E00\u4E2A\u5BF9\u8C61</h3><pre><code>var person1 = new Person(&quot;\u8346\u5929\u660E&quot;,29);    //\u7ED3\u679C\uFF1A\u8346\u5929\u660E   \u4F18\u5148\u8BBF\u95EE\u6784\u9020\u51FD\u6570
console.log(person1.name);
</code></pre><h3 id="_4\u3001\u539F\u578B\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027-\u53EF\u4EE5\u4E3A-\u901A\u8FC7\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684-\u5B9E\u4F8B\u5BF9\u8C61\u6240\u4F7F\u7528-\u5171\u7528" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u539F\u578B\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027-\u53EF\u4EE5\u4E3A-\u901A\u8FC7\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684-\u5B9E\u4F8B\u5BF9\u8C61\u6240\u4F7F\u7528-\u5171\u7528" aria-hidden="true">#</a> 4\u3001\u539F\u578B\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4E3A(\u901A\u8FC7\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684)\u5B9E\u4F8B\u5BF9\u8C61\u6240\u4F7F\u7528(\u5171\u7528);</h3><pre><code>\u5B9E\u4F8B\u5BF9\u8C61\u80FD\u591F\u8BBF\u95EE\u539F\u578B\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\uFF0C\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u5E76\u6CA1\u6709\u8BE5\u5C5E\u6027\uFF0C\u4F46\u53EF\u4EE5\u4F7F\u7528\u3002\u8282\u7701\u4E86\u7A7A\u95F4\u3002

console.log(person1.sex);
person1.say();
</code></pre><h3 id="_5\u3001\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u5176\u4ED6" aria-hidden="true">#</a> 5\u3001\u5176\u4ED6</h3><pre><code>\u7EA6\u5B9A\u4FD7\u6210\uFF1A\u6784\u9020\u51FD\u6570\u8BBE\u7F6E\u9759\u6001\u5C5E\u6027\uFF0C\u539F\u578B\u5BF9\u8C61\u8BBE\u7F6E\u5171\u7528\u7684\u52A8\u6001\u5C5E\u6027\u3002
\u5C5E\u6027\u8BBF\u95EE\u65F6\u4F18\u5148\u7EA7\uFF1A\u5148\u8BBF\u95EE\u6784\u9020\u51FD\u6570\u4E2D(\u81EA\u8EAB)\u62E5\u6709\u7684 \uFF0C\u6CA1\u6709 \u540E\u5728\u539F\u578B\u5BF9\u8C61\u4E2D\u67E5\u627E\u3002
</code></pre><h2 id="\u9A8C\u8BC1\u5C5E\u6027\u662F\u6784\u9020\u51FD\u6570-\u81EA\u8EAB-\u7684-\u8FD8\u662F\u539F\u578B\u5BF9\u8C61\u7684\u3002" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u5C5E\u6027\u662F\u6784\u9020\u51FD\u6570-\u81EA\u8EAB-\u7684-\u8FD8\u662F\u539F\u578B\u5BF9\u8C61\u7684\u3002" aria-hidden="true">#</a> \u9A8C\u8BC1\u5C5E\u6027\u662F\u6784\u9020\u51FD\u6570(\u81EA\u8EAB)\u7684\uFF0C\u8FD8\u662F\u539F\u578B\u5BF9\u8C61\u7684\u3002</h2><h3 id="_1\u3001hasownproperty-\u68C0\u6D4B\u5C5E\u6027\u662F\u4E0D\u662F\u81EA\u8EAB\u7684-\u662F-true-\u5426-false" tabindex="-1"><a class="header-anchor" href="#_1\u3001hasownproperty-\u68C0\u6D4B\u5C5E\u6027\u662F\u4E0D\u662F\u81EA\u8EAB\u7684-\u662F-true-\u5426-false" aria-hidden="true">#</a> 1\u3001hasOwnProperty() \u68C0\u6D4B\u5C5E\u6027\u662F\u4E0D\u662F\u81EA\u8EAB\u7684\uFF1A\u662F, true; \u5426, false</h3><pre><code>console.log(per1.hasOwnProperty(&quot;name&quot;));
</code></pre><h3 id="_2\u3001in-\u68C0\u6D4B\u67D0\u4E2A\u5BF9\u8C61\u80FD\u5426\u8BBF\u95EE\u67D0\u4E2A\u5C5E\u6027\u3002\u4E0D\u533A\u5206\u662F\u5426\u4E3A\u81EA\u8EAB\u7684\u3002true\u6216false" tabindex="-1"><a class="header-anchor" href="#_2\u3001in-\u68C0\u6D4B\u67D0\u4E2A\u5BF9\u8C61\u80FD\u5426\u8BBF\u95EE\u67D0\u4E2A\u5C5E\u6027\u3002\u4E0D\u533A\u5206\u662F\u5426\u4E3A\u81EA\u8EAB\u7684\u3002true\u6216false" aria-hidden="true">#</a> 2\u3001in \u68C0\u6D4B\u67D0\u4E2A\u5BF9\u8C61\u80FD\u5426\u8BBF\u95EE\u67D0\u4E2A\u5C5E\u6027\u3002\u4E0D\u533A\u5206\u662F\u5426\u4E3A\u81EA\u8EAB\u7684\u3002true\u6216false</h3><pre><code>console.log(&quot;name&quot; in person1);
</code></pre><p><br><br><br></p><h2 id="\u4E09\u79CD\u7EE7\u627F\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u79CD\u7EE7\u627F\u65B9\u5F0F" aria-hidden="true">#</a> \u4E09\u79CD\u7EE7\u627F\u65B9\u5F0F</h2><ul><li>\u62BD\u8C61 \u9762\u5411\u5BF9\u8C61 \u4E09\u4E2A\u7279\u5F81: \u7EE7\u627F \u5C01\u88C5 \u591A\u6001(\u91CD\u8F7D)</li><li>\u5BF9\u8C61\u6BD4\u51FD\u6570\u7684\u5C01\u88C5\u66F4\u9AD8\u4E00\u7EA7</li></ul><h3 id="_1\u3001\u539F\u578B\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u539F\u578B\u7EE7\u627F" aria-hidden="true">#</a> 1\u3001\u539F\u578B\u7EE7\u627F</h3><p>\u7EE7\u627F\uFF1A\u539F\u578B\u7EE7\u627F(\u53EA\u80FD\u7EE7\u627F\u4E00\u6B21)</p><p>\u539F\u578B\u7EE7\u627F\u5B9E\u73B0: \u5C06\u4E0A\u7EA7\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u5BF9\u8C61\u8D4B\u503C\u7ED9\u4E0B\u7EA7\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u3002</p><pre><code>**********************\u4EE3\u7801\u793A\u4F8B*********************************
function Father(name){
    this.name = name;
}
function Son(age){
    this.age = age;
}

var father = new Father(&quot;\u5C0F\u5934\u7238\u7238&quot;);
var son = new Son(10);

Son.prototype = father;  //\u5C06\u7236\u7684\u5B9E\u4F8B\u5BF9\u8C61\u8D4B\u503C\u7ED9\u5B50\u6784\u9020\u51FD\u6570\u7684\u539F\u578B    
son.name = &quot;\u5927\u5934\u513F\u5B50&quot;;   

console.log(son);        //Son {age: 10, name: &quot;\u5927\u5934\u513F\u5B50&quot;}
</code></pre><p>\u539F\u578B\u94FE( \u6307\u9488 <em>proto</em> )</p><pre><code>var obj = new Object();    
Son.prototype = father;

son.__proto__     ==  Son.prototype;           //true
father.__proto__  ==  Father.prototype;     //true
obj.__proto__     ==  Object.prototype;        //true
</code></pre><p>\u539F\u578B\u94FE</p><pre><code>son.__proto__     \u6307\u5411 Father {name: &quot;\u5C0F\u5934\u7238\u7238&quot;}
father.__proto__  \u6307\u5411 Object {constructor: function}
obj.__proto__
</code></pre><h3 id="_2\u3001\u6784\u9020\u51FD\u6570\u65B9\u5F0F\u7EE7\u627Fcall-apply" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6784\u9020\u51FD\u6570\u65B9\u5F0F\u7EE7\u627Fcall-apply" aria-hidden="true">#</a> 2\u3001\u6784\u9020\u51FD\u6570\u65B9\u5F0F\u7EE7\u627Fcall(),apply()</h3><p>\u53EF\u4EE5\u7EE7\u627F\u591A\u4E2A, \u4F46\u4E0D\u80FD\u8BBF\u95EE\u539F\u578B\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027</p><pre><code>**************************** \u4EE3\u7801\u793A\u4F8B *****************************
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
    Father.call(this,name);               // this \u6307\u5411 \u521B\u5EFA\u51FA\u7684\u5B9E\u4F8B\u5BF9\u8C61
    GrandaFather.apply(this,[city,sex]);

    /*************\u8FD9\u91CC\u6709\u95EE\u9898**************
    Father.call(this,arguments[0]);
    GrandaFather.apply(this,arguments);    */
}

var son = new Son(18,&quot;\u77F3\u5170&quot;,&quot;\u8700\u56FD&quot;,&quot;\u5973&quot;);
console.log(son);

//Son {age: 18, name: &quot;\u77F3\u5170&quot;, city: &quot;\u8700\u56FD&quot;, sex: &quot;\u5973&quot;, getName: function}
</code></pre><h3 id="_3\u3001\u7EC4\u5408\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u7EC4\u5408\u7EE7\u627F" aria-hidden="true">#</a> 3\u3001\u7EC4\u5408\u7EE7\u627F</h3>`,32),h=[r];function s(c,i){return n(),o("div",null,h)}const p=e(t,[["render",s],["__file","23-prototype\u539F\u578B.html.vue"]]);export{p as default};
