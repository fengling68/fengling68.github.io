import{_ as t,o as e,c as o,f as a}from"./app.e6f6af52.js";const n={},u=a(`<h1 id="\u4E0A\u4F20\u5934\u50CF\u7684\u4E09\u79CD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u5934\u50CF\u7684\u4E09\u79CD\u65B9\u6CD5" aria-hidden="true">#</a> \u4E0A\u4F20\u5934\u50CF\u7684\u4E09\u79CD\u65B9\u6CD5</h1><h2 id="\u4E00\u3001form\u8868\u5355\u4E0A\u4F20\u6587\u4EF6-\u539F\u751Fjs" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001form\u8868\u5355\u4E0A\u4F20\u6587\u4EF6-\u539F\u751Fjs" aria-hidden="true">#</a> \u4E00\u3001form\u8868\u5355\u4E0A\u4F20\u6587\u4EF6(\u539F\u751FJS)</h2><h3 id="_1\u3001html\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_1\u3001html\u90E8\u5206" aria-hidden="true">#</a> 1\u3001HTML\u90E8\u5206</h3><pre><code>&lt;img id=&quot;img-box&quot; style=&quot;border: 1px solid gray; width: 100px; height: 100px;&quot; src=&quot;&quot;/&gt;

&lt;form action=&quot;http://192.168.0.3/project/artist-v2/api/index.php&quot; method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;m&quot; id=&quot;m&quot; value=&quot;user&quot; /&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;a&quot; id=&quot;a&quot; value=&quot;changeHeadImage&quot; /&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;userId&quot; id=&quot;userId&quot; value=&quot;1&quot; /&gt;
    &lt;input type=&quot;file&quot; name=&quot;newHeadImage&quot; id=&quot;newHeadImage&quot; value=&quot;&quot; /&gt;
    &lt;input type=&quot;submit&quot; value=&quot;\u63D0\u4EA4&quot;/&gt;
&lt;/form&gt;
</code></pre><h3 id="_2\u3001js\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_2\u3001js\u90E8\u5206" aria-hidden="true">#</a> 2\u3001JS\u90E8\u5206</h3><pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
    var tag = document.querySelector(&quot;#newHeadImage&quot;);
    tag.addEventListener(&quot;change&quot;,function(){
        //1\u3001input file\u7C7B\u578B\u7684\u6807\u7B7E\u4E2D, \u6240\u6709\u7684\u6587\u4EF6\u653E\u5728files\u5C5E\u6027\u4E2D, \u8FD9\u4E2A\u5C5E\u6027\u662F\u4E2A\u6570\u7EC4
        if(tag.files.length == 0){
            alert(&quot;\u6CA1\u6709\u9009\u62E9\u56FE\u7247&quot;)
            return
        }
        var uploadFile = tag.files[0];
        
        //2\u3001\u4ECE\u6587\u4EF6\u5BF9\u8C61\u83B7\u53D6\u672C\u5730\u8DEF\u5F84src
        var src = window.URL.createObjectURL(uploadFile)
        
        //3\u3001\u663E\u793A\u56FE\u7247
        var imgBox = document.getElementById(&quot;img-box&quot;)
        imgBox.src = src;
    })
&lt;/script&gt;
</code></pre><h2 id="\u4E8C\u3001jquery-post\u4E0A\u4F20\u5934\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001jquery-post\u4E0A\u4F20\u5934\u50CF" aria-hidden="true">#</a> \u4E8C\u3001jQuery+post\u4E0A\u4F20\u5934\u50CF</h2><h3 id="_1\u3001html\u90E8\u5206-1" tabindex="-1"><a class="header-anchor" href="#_1\u3001html\u90E8\u5206-1" aria-hidden="true">#</a> 1\u3001HTML\u90E8\u5206</h3><pre><code>&lt;div&gt;
    &lt;img id=&quot;img-box&quot; style=&quot;border: 1px solid gray; width: 100px; height: 100px;&quot; src=&quot;&quot;/&gt;

    &lt;input type=&quot;file&quot; name=&quot;newHeadImage&quot; id=&quot;newHeadImage&quot; value=&quot;&quot; /&gt;

    &lt;input class=&quot;upload-file&quot; type=&quot;button&quot; value=&quot;\u4E0A\u4F20\u5934\u50CF&quot;/&gt;
&lt;/div&gt;
</code></pre><h3 id="_2\u3001jquery\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2\u3001jquery\u5B9E\u73B0" aria-hidden="true">#</a> 2\u3001jQuery\u5B9E\u73B0</h3><pre><code>&lt;!--  \u5F15\u5165jQuery\u6587\u4EF6  --&gt;
&lt;script src=&quot;jquery-1.9.1.min.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;!--  \u5F15\u5165\u63A5\u53E3\u6587\u4EF6  --&gt;
&lt;script src=&quot;interface.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    
    
    //\u9009\u62E9\u56FE\u7247\u7684\u5904\u7406
    var tag = document.querySelector(&quot;#newHeadImage&quot;);
    tag.addEventListener(&quot;change&quot;,function(){
        //1\u3001\u83B7\u53D6\u9009\u62E9\u7684\u6587\u4EF6,\u56FE\u7247
        if(tag.files.length == 0){
            alert(&quot;\u6CA1\u6709\u9009\u62E9\u56FE\u7247&quot;)
            return
        }
        var uploadFile = tag.files[0];
        
        //2\u3001\u4ECE\u6587\u4EF6\u5BF9\u8C61\u83B7\u53D6\u672C\u5730\u8DEF\u5F84src
        var src = window.URL.createObjectURL(uploadFile);
        
        //3\u3001\u663E\u793A\u56FE\u7247
        var imgBox = document.getElementById(&quot;img-box&quot;)
        imgBox.src = src;
    })
    
    //\u786E\u8BA4\u66F4\u6362\u5934\u50CF\u7684\u4E8B\u4EF6\u5904\u7406
    $(&quot;.upload-file&quot;).click(function () {                
        //1\u3001\u83B7\u53D6\u56FE\u7247\u8F93\u5165\u6846
        var tag = document.getElementById(&quot;newHeadImage&quot;);                        
                
        //2\u3001\u83B7\u53D6\u9009\u62E9\u7684\u6587\u4EF6,\u56FE\u7247
        //input file\u7C7B\u578B\u7684\u6807\u7B7E\u4E2D, \u6240\u6709\u7684\u6587\u4EF6\u653E\u5728files\u5C5E\u6027\u4E2D, \u8FD9\u4E2A\u5C5E\u6027\u662F\u4E2A\u6570\u7EC4
        if(tag.files.length == 0){
            alert(&quot;\u6CA1\u6709\u9009\u62E9\u56FE\u7247&quot;)
            return
        }
        var uploadFile = tag.files[0];
        
        //C.\u751F\u6210FormData. \u751F\u6210\u4E86form\u8868\u5355
        var formData = new FormData();
        formData.append(&quot;m&quot;,&quot;user&quot;)
        formData.append(&quot;a&quot;,&quot;changeHeadImage&quot;)
        formData.append(&quot;userId&quot;,&quot;1&quot;)
        formData.append(&quot;newHeadImage&quot;,uploadFile);
        
        //D.\u53D1\u8D77post\u8BF7\u6C42   vue: this.$http.post()                
        $.ajax({
            type:&quot;post&quot;,
            url:changeHeadImageUrl,
            async:true,
            data:formData,
            //processData\u4E3A\u771F, \u6570\u636E\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\u4F20\u9012  \u4E0A\u4F20\u6587\u4EF6, \u8BBE\u7F6E\u4E3Afalse
            processData:false,
            contentType:false
        }).done(function (r) {
            alert(r)
        });
        
    })
                
&lt;/script&gt;
</code></pre><h2 id="\u4E09\u3001vue-post\u4E0A\u4F20\u5934\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001vue-post\u4E0A\u4F20\u5934\u50CF" aria-hidden="true">#</a> \u4E09\u3001vue+post\u4E0A\u4F20\u5934\u50CF</h2><h3 id="_1\u3001html\u90E8\u5206-2" tabindex="-1"><a class="header-anchor" href="#_1\u3001html\u90E8\u5206-2" aria-hidden="true">#</a> 1\u3001HTML\u90E8\u5206</h3><pre><code>&lt;!--view--&gt;
&lt;div id=&quot;app&quot;&gt;
    &lt;div&gt;
        &lt;img class=&quot;head-image&quot; v-bind:src=&quot;src&quot;/&gt;&lt;br&gt;
        &lt;input id=&quot;headImageTag&quot; type=&quot;file&quot; v-on:change=&quot;dealChange&quot; multiple=&quot;multiple&quot;/&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;button v-on:click=&quot;dealUploadImage&quot;&gt;\u4FEE\u6539\u5934\u50CF&lt;/button&gt;
    &lt;/div&gt;                
&lt;/div&gt;
</code></pre><h3 id="_2\u3001vue\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_2\u3001vue\u90E8\u5206" aria-hidden="true">#</a> 2\u3001Vue\u90E8\u5206</h3><pre><code>&lt;!--  \u5F15\u5165vue\u6587\u4EF6  --&gt;
&lt;script src=&quot;vue/vue.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;vue/vue-resource.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;vue/vue-router.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;!--  \u5F15\u5165\u63A5\u53E3\u6587\u4EF6  --&gt;
&lt;script src=&quot;interface.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;

&lt;script type=&quot;text/javascript&quot;&gt;            
    //model
    var data = {
        src:&quot;&quot;
    }
    
    //ViewModel
    var app = new Vue({
        el:&quot;#app&quot;,
        data:data,
        methods:{
            dealUploadImage:function(){                        
                //1\u3001\u83B7\u53D6\u56FE\u7247\u8F93\u5165\u6846
                var tag = document.getElementById(&quot;headImageTag&quot;);                        
                
                //2\u3001\u83B7\u53D6\u9009\u62E9\u7684\u6587\u4EF6,\u56FE\u7247
                if(tag.files.length == 0){
                    alert(&quot;\u6CA1\u6709\u9009\u62E9\u56FE\u7247&quot;)
                    return
                }
                var uploadFile = tag.files[0];                        
                
                //3\u3001\u751F\u6210FormData. \u751F\u6210\u4E86form\u8868\u5355
                var formData = new FormData();
                formData.append(&quot;m&quot;,&quot;user&quot;)
                formData.append(&quot;a&quot;,&quot;changeHeadImage&quot;)
                formData.append(&quot;userId&quot;,&quot;1&quot;)
                formData.append(&quot;newHeadImage&quot;,uploadFile);                        
                
                //D.\u53D1\u8D77post\u8BF7\u6C42
                var url = changeHeadImageUrl;
                this.$http.post(url,formData,function () {
                    
                }).then(function (r) {                            
                    var jsonObject = r.data;                            
                })                        
            },
            dealChange:function(){
                //1\u3001\u83B7\u53D6\u56FE\u7247\u8F93\u5165\u6846
                var tag = document.getElementById(&quot;headImageTag&quot;);
                
                //2\u3001\u83B7\u53D6\u9009\u62E9\u7684\u6587\u4EF6,\u56FE\u7247
                if(tag.files.length == 0){
                    alert(&quot;\u6CA1\u6709\u9009\u62E9\u56FE\u7247&quot;)
                    return
                }
                var uploadFile = tag.files[0];
                
                //3\u3001\u4ECE\u6587\u4EF6\u5BF9\u8C61\u83B7\u53D6\u672C\u5730\u8DEF\u5F84src
                var src = window.URL.createObjectURL(uploadFile)
            
                //4\u3001\u663E\u793A\u56FE\u7247
                this.src = src
            }
        }
    });

&lt;/script&gt;
</code></pre>`,16),r=[u];function q(i,d){return e(),o("div",null,r)}const s=t(n,[["render",q],["__file","\u4E0A\u4F20\u5934\u50CF\u7684\u4E09\u79CD\u65B9\u6CD5.html.vue"]]);export{s as default};
