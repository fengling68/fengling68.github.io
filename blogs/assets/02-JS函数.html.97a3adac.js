import{_ as n,o as e,c as a,f as r}from"./app.40d45622.js";const o={},d=r(`<h1 id="js函数" tabindex="-1"><a class="header-anchor" href="#js函数" aria-hidden="true">#</a> JS函数</h1><h2 id="函数是一等公民" tabindex="-1"><a class="header-anchor" href="#函数是一等公民" aria-hidden="true">#</a> 函数是一等公民</h2><pre><code>函数命名规则标识符 命名规则 驼峰命名  语义化  可以$开头命名
函数名称不要大写, 大写的是构造函数。
</code></pre><h2 id="什么是函数" tabindex="-1"><a class="header-anchor" href="#什么是函数" aria-hidden="true">#</a> 什么是函数</h2><pre><code>函数：具有特定功能的代码块
功能：根据实际需要，声明对应功能函数
优势：减少代码量，复用性高
规则：函数不调用不执行
</code></pre><h2 id="函数分类" tabindex="-1"><a class="header-anchor" href="#函数分类" aria-hidden="true">#</a> 函数分类</h2><pre><code>系统函数：alert()  parseInt()  prompt()
自定义函数：
</code></pre><h2 id="自定义函数声明和调用" tabindex="-1"><a class="header-anchor" href="#自定义函数声明和调用" aria-hidden="true">#</a> 自定义函数声明和调用</h2><pre><code>function 函数名(){}           //定义函数
函数名();                     //调用函数
</code></pre><h2 id="参数分类-形参、实参" tabindex="-1"><a class="header-anchor" href="#参数分类-形参、实参" aria-hidden="true">#</a> 参数分类：形参、实参</h2><pre><code>形参：函数声明时，函数后面括号里的参数―变量名称。
实参：函数调用时，函数后面括号里的参数

\`实参的实质：调用时实参对形参赋值\`

实参与形参个数一一匹配（个数、顺序）
实参少于形参：不匹配的结果为undefined
实参多于形参：结果为无
有实参无形参：报错    
</code></pre><h2 id="记录监听实参的-arguments" tabindex="-1"><a class="header-anchor" href="#记录监听实参的-arguments" aria-hidden="true">#</a> 记录监听实参的 arguments</h2><pre><code>function fn(){
    console.log( arguments[0] );      //第一个实参实参
    console.log( arguments.length );  //实参的个数
    console.log( fn.length );         //形参的个数
    console.log( fn.callee.length );         //形参的个数
}
fn(a,b,c);
</code></pre><h2 id="函数关键字return" tabindex="-1"><a class="header-anchor" href="#函数关键字return" aria-hidden="true">#</a> 函数关键字return</h2><pre><code>终止、结束程序
返回值：字符串，数值，布尔值，变量，函数等
无return关键字，但默认最后会执行return;结束函数，结果为undefined
</code></pre><h2 id="函数重载-js中没有重载的概念" tabindex="-1"><a class="header-anchor" href="#函数重载-js中没有重载的概念" aria-hidden="true">#</a> 函数重载（JS中没有重载的概念）</h2><pre><code>1. 同一个脚本中，出现了同名函数，后者会覆盖掉前者。
2. 声明函数和调用函数顺序可以不同，一个函数内可以调用另一个函数。
</code></pre><h2 id="匿名函数-没有名字的函数" tabindex="-1"><a class="header-anchor" href="#匿名函数-没有名字的函数" aria-hidden="true">#</a> 匿名函数：没有名字的函数</h2><pre><code>//JS高阶里面最常用
var fn = function(){
    console.log(123);
}
fn();
</code></pre><h2 id="作用域-变量和函数起作用的区域或范围。" tabindex="-1"><a class="header-anchor" href="#作用域-变量和函数起作用的区域或范围。" aria-hidden="true">#</a> 作用域：变量和函数起作用的区域或范围。</h2><pre><code>全局作用域：当前整个JS脚本   全局变量
局部作用域(函数作用域)：函数内部，函数能限制作用域   局部变量
\`局部作用域下可以访问全局变量；全局作用域下不能访问局部变量。\`

作用域链规则：从本作用域链查找，没有向上一级作用域查找，最后找到全局作用域。还未查找到，not define报错。

var a = 10;
function fn1(){
    var b = 20;
    console.log(b);
    function fn2(){
        var c = 30;
        console.log(a);    //可以调用 a , b ,c  
        console.log(b);
        console.log(c);
    }
    console.log(a);        //可以调用 a , b ，不能调用c
    console.log(b);
}
console.log(a);            //可以调用 a   ，不能调用 b , c
fn1();                     //只能调用fn1,通过fn1调用fn2
</code></pre><h2 id="js执行解析代码" tabindex="-1"><a class="header-anchor" href="#js执行解析代码" aria-hidden="true">#</a> JS执行解析代码</h2><pre><code>顺序结构：从上到下逐行解析
选择结构：选择分支，有选择性的解析执行
循环结构：for,while,do-while

1. JS解析：默认情况下，顺序执行。
2. 预编译模式：优先抓取关键字var，把变量声明提前到逻辑最顶层，（不包括赋值）
3. 块级作用域：{} ，for if 都不能起到限制作用域的作用

    for(var i = 1 ; i &lt;= 10 ; i++ ){   //i 是全局变量
        console.log(i);        //打印结果1~10
    }
    console.log(i);            //结果为 11

4. 在函数内部，声明变量时，没有var,该变量隐式的成为了全局变量

    function fn(){
        d = 10;
        console.log(d);    //结果为10
    }
    console.log(d);        //结果为10
</code></pre><h2 id="函数作用域问题" tabindex="-1"><a class="header-anchor" href="#函数作用域问题" aria-hidden="true">#</a> 函数作用域问题</h2><p>1、例题1</p><pre><code>var aa = 10;
function test () {
    var aa = 20;
}
test();
console.log(aa);     //结果为10     在全局作用域下找到 aa = 10
</code></pre><p>2、例题2</p><pre><code>var num = 2;
function fn1() {
    var num = 5;
    console.log(num);
}

fn1();               //结果为5      在函数作用域下找到 num = 5
</code></pre><p>3、例题3</p><pre><code>var num = 2;
function fn2() {
    //var num;              //预编译先把var num;提到函数作用域最上方
    console.log(num);       //结果为 undefined
    var num = 5;  
    console.log(num);       //结果为 5
}
fn2();
</code></pre><p>4、例题4</p><pre><code>var num = 2;
fn3();               //结果为undefined     声明函数和调用函数顺序可以不同
function fn3()
{
    var num;
    console.log(num);
    num = 5;
}
fn3();               //结果为undefined
</code></pre><p>5、例题5</p><pre><code>var a = 10;
function fn4 () {
    var b = 9;
    console.log(a);        //结果 a = undefind
    console.log(b);        //结果 b = 9 
    var a = 30;
}
fn4();
</code></pre><h2 id="递归函数" tabindex="-1"><a class="header-anchor" href="#递归函数" aria-hidden="true">#</a> 递归函数</h2><pre><code>函数内调用函数-调用自身，类似循环
慎用递归，易死循环
</code></pre><p>1、用户任意输入数字，控制台一次递减1输出，输出到1结束</p><pre><code>function printNum(num){
    if(num == 0){   //临界断点
       return;
    }
    alert(num);
    num--;
    printNum(sum);
}
printNum(5);
</code></pre><p>2、打印5的阶乘</p><pre><code>function fn(num){
    if(num == 1){
        return 1;
    }
    return num*fn(num-1)
}
console.log(fn(5));
</code></pre><h2 id="函数扩充" tabindex="-1"><a class="header-anchor" href="#函数扩充" aria-hidden="true">#</a> 函数扩充</h2><p>1、直接打印函数名，输出的结果是函数名</p><pre><code>var fn = function(){
    console.log(123);
};
fn();
console.log(fn);    //fn是变量名称

function fn1(){
    console.log(456);
}
console.log(fn1);
</code></pre>`,43),c=[d];function i(h,t){return e(),a("div",null,c)}const s=n(o,[["render",i],["__file","02-JS函数.html.vue"]]);export{s as default};
