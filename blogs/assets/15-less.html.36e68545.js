import{_ as n,o as e,c as r,f as a}from"./app.7092ccdd.js";const o={},s=a(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h1><h2 id="三种使用方式" tabindex="-1"><a class="header-anchor" href="#三种使用方式" aria-hidden="true">#</a> 三种使用方式</h2><pre><code>1、引入less文件，将写好的less文件，编译为CSS文件 ———— 基本不用
2、在本地进行编译, 使用 koala
3、在本地进行编译,使用npm安装less
    install less -p
</code></pre><h2 id="koala使用方法" tabindex="-1"><a class="header-anchor" href="#koala使用方法" aria-hidden="true">#</a> koala使用方法</h2><p>目标：把less文件，编译成css文件</p><p>自动编译功能：修改less文件（koala 必须开启）</p><pre><code>1、把包含less文件的文件夹，拖放到koala目录下
2、把需要编译的文件，进行编译
3、在对应的目录中，即可输出需要的CSS文件
4、引入css文件
</code></pre><h2 id="less变量" tabindex="-1"><a class="header-anchor" href="#less变量" aria-hidden="true">#</a> less变量</h2><pre><code>//定义变量
@bgy: greenyellow;
@w: 400px;

.box{
    width: @w;
    height: @h;
    background-color: @bgy;
    font-size: @fs;
}
</code></pre><p><strong>如果 类名 要作为变量使用，前后要加 { }</strong></p><pre><code>@b: .box2;

@{b} {
    width: @w;
    height: @h;
    background-color: @bgp;
    font-size: @fs;
}
</code></pre><h2 id="内置函数-数学函数" tabindex="-1"><a class="header-anchor" href="#内置函数-数学函数" aria-hidden="true">#</a> 内置函数（数学函数）</h2><pre><code>.box{
    background-color: #00BFFF;
    //abs 绝对值
    width: abs(-100px);
    //sqrt 开方
    width: sqrt(10000px);
    //ceil 向上取整
    height: ceil(99.6px);
    //pow 次幂
    font-size: pow(5px , 2);
    //min 最小值     max 最大值
    font-size: min(100px , 200px , 20px);
    //随机数
}
</code></pre><h2 id="less嵌套" tabindex="-1"><a class="header-anchor" href="#less嵌套" aria-hidden="true">#</a> less嵌套</h2><pre><code>.wrap{
    width: 100%;
    margin: 0px auto;
    .top,.bottom{
        width: 100%;
        height: 200px;
        text-align: center;
        background-color: #00BFFF;
    }
    .center{
        width: 100%;
        height: 600px;
        .left{
           ...
        }
        .right{
           ...
        }
        .middle{
            h3{
                color: red;
            }
        }
    }
}
</code></pre><h2 id="父元素" tabindex="-1"><a class="header-anchor" href="#父元素" aria-hidden="true">#</a> 父元素（&amp;）</h2><pre><code>a{
    font-size:40px; 
    &amp;:hover{
        color: greenyellow;
    }
}

.box{
    width: 200px;
    height: 200px;
    background-color: #00BFFF;
    cursor:pointer;

    &amp;:hover{
        background-color: #FFC0CB;
    }

    &amp;{
        color: red;
        font-size: 28px;
    }
}
</code></pre><h2 id="less混合" tabindex="-1"><a class="header-anchor" href="#less混合" aria-hidden="true">#</a> less混合</h2><p>像操作函数一样操作 CSS 样式</p><pre><code>.style{
    width: 100%;
    height: 250px;
    background-color: darkviolet;
}

.box{
    .style();
    font-size: 30px;
}
</code></pre><p>可以传参</p><pre><code>@bgb: #00BFFF;

.style2(@bgb){
    width: 100%;
    height: 250px;
    background-color: @bgb;
    margin-top: 20px;
}

.box2{
    font-size: 40px;
    .style2( @bgb );
}
</code></pre><h2 id="less继承" tabindex="-1"><a class="header-anchor" href="#less继承" aria-hidden="true">#</a> less继承</h2><pre><code>.grandFather{
    width: 100%;
    height: 100px;
    background-color: gainsboro;
    font-size: 20px;
    text-align: center;
}

.father:extend(.grandFather){
    background-color: deepskyblue;
}

.son:extend(.father){
    font-size: 50px;
    background-color: #FFC0CB;
}
</code></pre>`,24),d=[s];function t(h,c){return e(),r("div",null,d)}const l=n(o,[["render",t],["__file","15-less.html.vue"]]);export{l as default};
