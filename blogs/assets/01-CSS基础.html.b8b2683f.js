import{_ as e,o as n,c as t,f as r}from"./app.79208424.js";const d={},o=r(`<h1 id="css基础" tabindex="-1"><a class="header-anchor" href="#css基础" aria-hidden="true">#</a> CSS基础</h1><h2 id="什么是css" tabindex="-1"><a class="header-anchor" href="#什么是css" aria-hidden="true">#</a> 什么是CSS？</h2><pre><code>CSS：Cascading Style Sheet   层叠样式表、级联样式表、样式表

1、作用
修改页面中元素的显示样式，实现内容与表现分离，提高代码的可重用性和可维护性。

2、三种引入方式
    (1)内联样式  (在元素中声明，只对该元素有效)
        &lt;h1 style=&quot;background-color:red;&quot;&gt;&lt;/h1&gt;

    (2)内部样式表 样式规则由选择器和样式声明组成。(定义在head中，只对当前页面有效，可以实现代码重用)
        &lt;stytle&gt;
              p{                      选择器：当前样式规则名；哪些元素可以使用当前规则
                width: 60px;        样式声明：{}，多个属性值
                heidht:60px;
                position:absolute;
              }
        &lt;/stytle&gt;

    (3)外部样式表  (将样式定义在一个外部CSS文件中，在head中引入外部样式表)
        &lt;head&gt;         rel:规定当前文件与被链接文档之间的关系。
          &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;url&quot;/&gt;
        &lt;/head&gt;
</code></pre><h2 id="css样式表的特征" tabindex="-1"><a class="header-anchor" href="#css样式表的特征" aria-hidden="true">#</a> CSS样式表的特征</h2><pre><code>1、继承性

    子元素可以继承父元素的样式，在CSS中以text-,font-,line-开头的属性都是可以继承的。
    特例1：a标签颜色不能继承（默认蓝色），必须对a标签本身进行设置。
    特例2：h标签的字体大小不能修改，必须对h标签本身进行设置。

2、层叠性

    层叠性是浏览器处理冲突的一个能力，一个选择器可以被重复定义，在多个不同的定义中，不同的属性可以层叠到一起，如果属性重复，以后定义的为准

    div{color:red;}  div{width:60px;}   层叠
    div{color:red;} div{color:green;}   层叠，颜色绿色

3、优先级(很重要)：样式冲突时，按优先级使用

    优先1：浏览器缺省设置(最低，浏览器默认样式)
    优先2：外部样式表或内部样式表——就近原则(link和style的前后顺序)
    优先3：内联样式(高于内部样式表和外部样式表)
    优先4：！important可以手动调整样式属性的优先级（最高）
           div{color:red !important;}
</code></pre><h2 id="css基础选择器" tabindex="-1"><a class="header-anchor" href="#css基础选择器" aria-hidden="true">#</a> CSS基础选择器</h2><p>1、通用选择器</p><pre><code>匹配页面中所有的元素，定义当前网页中最基本的显示样式，如字体、大小
*{属性:值;}
</code></pre><p>2、元素选择器</p><pre><code>更改某个元素的默认显示样式
div{属性:值;}
</code></pre><p>3、类选择器</p><pre><code>通过标签的class属性来引用定义好的类名，可以将多个类选择器应用于同一个元素。多个类名用空格隔开，不能以数字开头。

.red{color:red;}   p.red{color:red;}      div.red{color:red;}
.green{background-color:green;}
&lt;div class=&quot;red&quot;&gt;倩女幽魂&lt;/div&gt;
&lt;p class=&quot;red green&quot;&gt;张国荣&lt;p&gt;     //可以给同一个标签设多个类名
</code></pre><p>4、id选择器</p><pre><code>t通过标签的ID属性值进行引用。一个元素只能有一个ID，同一个ID只能出现一次。
\`#red{color:red;}\` \`&lt;div id=&quot;red&quot;&gt;倩女幽魂&lt;/div&gt;\`
</code></pre><p>5、选择器分组</p><pre><code>可以选择多个元素。
div,#red,.green{属性:值;}
</code></pre><p>6、后代选择器</p><pre><code>通过元素的位置关系来匹配到元素并用空格隔开。
div p{属性:值；}     div里的所有p元素
</code></pre><p>7、子代选择器</p><pre><code>两元素之间只能是父子关系。
选择器1&gt;选择器2
div&gt;p&gt;span{属性:值;}
</code></pre><p>8、相邻兄弟选择器</p><pre><code>可选择紧接在另一元素后的元素，且二者有相同的父元素。
选择器1+选择器2
div+p{属性:值;}
</code></pre><p>9、属性选择器</p><pre><code>根据元素的属性及属性值来选择元素的。
元素[属性]{属性:值;}
\`input[type]{属性:值;}  拥有type属性的input元素\` 

[attribute] 用于选取带有指定属性的元素。
[attribute=value] 用于选取带有指定属性和值的元素。
[attribute~=value] 用于选取属性值中包含指定词汇的元素。
[attribute|=value] 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。
[attribute^=value] 匹配属性值以指定值开头的每个元素。
[attribute$=value] 匹配属性值以指定值结尾的每个元素。
[attribute*=value] 匹配属性值中包含指定值的每个元素。
</code></pre><p>10、伪类选择器</p><pre><code>(1)链接伪类

    :link,适用于尚未访问的链接
    :visited,访问过后的链接

链接伪类a标签访问状态

    未被访问    a:link{color:red;}
    鼠标悬停    a:visited{color:green;}
    激活状态    a:hover{color:purple;}
    访问后状态  a:active{color:black;}

(2)动态伪类

    :hover,适用于鼠标悬停在元素时
    :active,元素被激活时（按下还没释放）
    :focus,元素获取焦点时（多数用于文本框，密码框等表单元素）

(3)目标伪类

    :target

(4)元素状态伪类

(5)结构伪类(常用)

    :first-child: 选择第一个子元素
    :last-child : 选择最后一个子元素

    (.div:first-child)与(.div :first-child)中间有无空格结果不同

(6)伪元素选择器

    ：first-line:为某个元素的第一行文字使用样式
    ：first-letter:为某个元素中的文字的首字母或第一个字使用样式  div:first-letter{color:red;}
    ：before:在某个元素之前插入一些内容  div:before{content:&quot;小明&quot;;}
    ：after: 在某个元素之后插入一些内容  p:after{content:&quot;小红&quot;;}

(7)否定伪类
</code></pre><p>11、交集选择器</p><pre><code>ul li.first{}     li标签里面类名为first的元素
div.first{}
</code></pre><h2 id="权值" tabindex="-1"><a class="header-anchor" href="#权值" aria-hidden="true">#</a> 权值</h2><pre><code>!important(1000) &gt; id选择器优先级(100) &gt; 类选择器优先级(10) &gt; 元素选择器优先级(1)
#red .green&gt;p&gt;span   权值：100+10+1+1=112

权值相同，就近原则；权值不同，谁权值大谁优先。
对同一个元素定义样式时，以权值高的为准。
</code></pre>`,30),i=[o];function a(c,p){return n(),t("div",null,i)}const s=e(d,[["render",a],["__file","01-CSS基础.html.vue"]]);export{s as default};
