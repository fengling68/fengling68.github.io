import{_ as n,o as e,c as t,a as r}from"./app.ae676a5c.js";const i={},a=r(`<h1 id="\u5C45\u4E2D\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5C45\u4E2D\u95EE\u9898" aria-hidden="true">#</a> \u5C45\u4E2D\u95EE\u9898</h1><h2 id="\u6587\u5B57\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u6587\u5B57\u6C34\u5E73\u5C45\u4E2D</h2><pre><code>//\u9002\u7528\u4E8E\u6587\u5B57\u3001\u94FE\u63A5\u3001inline\u3001inline-block\u3001inline-table\u548Cinline-flex\u7684\u5143\u7D20\u3002
#outer{
    text-align:center;
}
</code></pre><h2 id="\u5757\u7EA7\u5143\u7D20\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u5143\u7D20\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u5757\u7EA7\u5143\u7D20\u6C34\u5E73\u5C45\u4E2D</h2><pre><code>#inner{
    margin: 0px auto;
}
</code></pre><h2 id="\u591A\u4E2A\u5757\u7EA7\u5143\u7D20\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u5757\u7EA7\u5143\u7D20\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u591A\u4E2A\u5757\u7EA7\u5143\u7D20\u6C34\u5E73\u5C45\u4E2D</h2><pre><code>1\u3001text-align \u548C display

    #outer{
        text-align:center;
    }
    #inner{
        display:inline-block;
    }

2\u3001flexbox\u5B9E\u73B0\uFF08\u9ED8\u8BA4\u5757\u7EA7\u5143\u7D20\uFF09

    #outer{
        display:flex;
        /* \u6309\u7167\u4E3B\u8F74\u4E2D\u5FC3\u7684\u4F4D\u7F6E\u5BF9\u9F50 */
        justify-content:center;
    }
</code></pre><h2 id="\u672A\u77E5\u5BBD\u9AD8\u884C\u5185\u5757\u5143\u7D20-input-img-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u672A\u77E5\u5BBD\u9AD8\u884C\u5185\u5757\u5143\u7D20-input-img-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u672A\u77E5\u5BBD\u9AD8\u884C\u5185\u5757\u5143\u7D20\uFF08input , img\uFF09\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D</h2><pre><code>.outerBox{
    float: left;
    width: 300px;
    height: 300px;
    background-color: black;
    
    /*\u6838\u5FC3*/
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.innerImg{
    width: 100px;
    height: 80px;
    background-color: white;
}
</code></pre><h2 id="div-\u5757\u7EA7\u5143\u7D20-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#div-\u5757\u7EA7\u5143\u7D20-\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> div(\u5757\u7EA7\u5143\u7D20)\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D</h2><pre><code>1\u3001\u9700\u8981\u77E5\u9053\u5BBD\u9AD8\uFF0Ctop,left\u8BBE\u4E3A 50%  \u5728\u7528margin\u62C9\u56DE\u5BBD\u9AD8\u7684\u4E00\u534A\u3002

    .outer1{
        float: left;
        width: 300px;
        height: 300px;
        background-color: greenyellow;

        /*\u6838\u5FC3*/
        position: relative;
    }
    .inner1{
        width: 100px;
        height: 80px;
        background-color: palevioletred;
        
        /*\u6838\u5FC3*/    
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -40px 0 0 -50px;
    }

2\u3001\u672A\u77E5\u5BBD\u9AD8\uFF0C\u7EDD\u5BF9\u5B9A\u4F4D+margin\uFF08\u597D\u7528\uFF09

    .outer2{
        float: left;
        width: 300px;
        height: 300px;
        background-color: plum;    
            
        /*\u6838\u5FC3*/
        position: relative;
    }
    .inner2{
        width: 100px;
        height: 80px;
        background-color: cornflowerblue;
        
        /*\u6838\u5FC3*/    
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

3\u3001\u672A\u77E5\u5BBD\u9AD8\uFF0Ctransform\u5B9E\u73B0

    .outer3{
        float: left;
        width: 300px;
        height: 300px;
        background-color: purple;
            
        /*\u6838\u5FC3*/
        position: relative;
    }
    .inner3{
        width: 100px;
        height: 80px;
        background-color: cornflowerblue;
        
        /*\u6838\u5FC3*/
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
    }

4\u3001flex\u5E03\u5C40\u5B9E\u73B0

    #container{
        display:flex;
        /* \u6309\u7167\u4E3B\u8F74\u4E2D\u5FC3\u7684\u4F4D\u7F6E\u5BF9\u9F50 */
        justify-content:center;
        /* \u4EA4\u53C9\u8F74\u6C34\u5E73\u4F4D\u7F6E\u5BF9\u9F50 */
        align-items: center;
    }
</code></pre><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><pre><code>transform\u548Cflexbox\u9700\u8981\u8003\u8651\u517C\u5BB9\u95EE\u9898
</code></pre>`,13),o=[a];function l(d,c){return e(),t("div",null,o)}const p=n(i,[["render",l],["__file","14-\u5C45\u4E2D\u95EE\u9898.html.vue"]]);export{p as default};
