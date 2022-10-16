import{_ as n,o as e,c as r,f as a}from"./app.097c626c.js";const o={},s=a(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h1><h2 id="\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F</h2><pre><code>1\u3001\u5F15\u5165less\u6587\u4EF6\uFF0C\u5C06\u5199\u597D\u7684less\u6587\u4EF6\uFF0C\u7F16\u8BD1\u4E3ACSS\u6587\u4EF6 \u2014\u2014\u2014\u2014 \u57FA\u672C\u4E0D\u7528
2\u3001\u5728\u672C\u5730\u8FDB\u884C\u7F16\u8BD1, \u4F7F\u7528 koala
3\u3001\u5728\u672C\u5730\u8FDB\u884C\u7F16\u8BD1,\u4F7F\u7528npm\u5B89\u88C5less
    install less -p
</code></pre><h2 id="koala\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#koala\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> koala\u4F7F\u7528\u65B9\u6CD5</h2><p>\u76EE\u6807\uFF1A\u628Aless\u6587\u4EF6\uFF0C\u7F16\u8BD1\u6210css\u6587\u4EF6</p><p>\u81EA\u52A8\u7F16\u8BD1\u529F\u80FD\uFF1A\u4FEE\u6539less\u6587\u4EF6\uFF08koala \u5FC5\u987B\u5F00\u542F\uFF09</p><pre><code>1\u3001\u628A\u5305\u542Bless\u6587\u4EF6\u7684\u6587\u4EF6\u5939\uFF0C\u62D6\u653E\u5230koala\u76EE\u5F55\u4E0B
2\u3001\u628A\u9700\u8981\u7F16\u8BD1\u7684\u6587\u4EF6\uFF0C\u8FDB\u884C\u7F16\u8BD1
3\u3001\u5728\u5BF9\u5E94\u7684\u76EE\u5F55\u4E2D\uFF0C\u5373\u53EF\u8F93\u51FA\u9700\u8981\u7684CSS\u6587\u4EF6
4\u3001\u5F15\u5165css\u6587\u4EF6
</code></pre><h2 id="less\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#less\u53D8\u91CF" aria-hidden="true">#</a> less\u53D8\u91CF</h2><pre><code>//\u5B9A\u4E49\u53D8\u91CF
@bgy: greenyellow;
@w: 400px;

.box{
    width: @w;
    height: @h;
    background-color: @bgy;
    font-size: @fs;
}
</code></pre><p><strong>\u5982\u679C \u7C7B\u540D \u8981\u4F5C\u4E3A\u53D8\u91CF\u4F7F\u7528\uFF0C\u524D\u540E\u8981\u52A0 { }</strong></p><pre><code>@b: .box2;

@{b} {
    width: @w;
    height: @h;
    background-color: @bgp;
    font-size: @fs;
}
</code></pre><h2 id="\u5185\u7F6E\u51FD\u6570-\u6570\u5B66\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u51FD\u6570-\u6570\u5B66\u51FD\u6570" aria-hidden="true">#</a> \u5185\u7F6E\u51FD\u6570\uFF08\u6570\u5B66\u51FD\u6570\uFF09</h2><pre><code>.box{
    background-color: #00BFFF;
    //abs \u7EDD\u5BF9\u503C
    width: abs(-100px);
    //sqrt \u5F00\u65B9
    width: sqrt(10000px);
    //ceil \u5411\u4E0A\u53D6\u6574
    height: ceil(99.6px);
    //pow \u6B21\u5E42
    font-size: pow(5px , 2);
    //min \u6700\u5C0F\u503C     max \u6700\u5927\u503C
    font-size: min(100px , 200px , 20px);
    //\u968F\u673A\u6570
}
</code></pre><h2 id="less\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#less\u5D4C\u5957" aria-hidden="true">#</a> less\u5D4C\u5957</h2><pre><code>.wrap{
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
</code></pre><h2 id="\u7236\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u7236\u5143\u7D20" aria-hidden="true">#</a> \u7236\u5143\u7D20\uFF08&amp;\uFF09</h2><pre><code>a{
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
</code></pre><h2 id="less\u6DF7\u5408" tabindex="-1"><a class="header-anchor" href="#less\u6DF7\u5408" aria-hidden="true">#</a> less\u6DF7\u5408</h2><p>\u50CF\u64CD\u4F5C\u51FD\u6570\u4E00\u6837\u64CD\u4F5C CSS \u6837\u5F0F</p><pre><code>.style{
    width: 100%;
    height: 250px;
    background-color: darkviolet;
}

.box{
    .style();
    font-size: 30px;
}
</code></pre><p>\u53EF\u4EE5\u4F20\u53C2</p><pre><code>@bgb: #00BFFF;

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
</code></pre><h2 id="less\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#less\u7EE7\u627F" aria-hidden="true">#</a> less\u7EE7\u627F</h2><pre><code>.grandFather{
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
