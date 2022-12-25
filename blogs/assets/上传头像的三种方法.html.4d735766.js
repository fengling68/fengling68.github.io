import{_ as t,o as e,c as o,f as a}from"./app.8609dc96.js";const n={},u=a(`<h1 id="上传头像的三种方法" tabindex="-1"><a class="header-anchor" href="#上传头像的三种方法" aria-hidden="true">#</a> 上传头像的三种方法</h1><h2 id="一、form表单上传文件-原生js" tabindex="-1"><a class="header-anchor" href="#一、form表单上传文件-原生js" aria-hidden="true">#</a> 一、form表单上传文件(原生JS)</h2><h3 id="_1、html部分" tabindex="-1"><a class="header-anchor" href="#_1、html部分" aria-hidden="true">#</a> 1、HTML部分</h3><pre><code>&lt;img id=&quot;img-box&quot; style=&quot;border: 1px solid gray; width: 100px; height: 100px;&quot; src=&quot;&quot;/&gt;

&lt;form action=&quot;http://192.168.0.3/project/artist-v2/api/index.php&quot; method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;m&quot; id=&quot;m&quot; value=&quot;user&quot; /&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;a&quot; id=&quot;a&quot; value=&quot;changeHeadImage&quot; /&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;userId&quot; id=&quot;userId&quot; value=&quot;1&quot; /&gt;
    &lt;input type=&quot;file&quot; name=&quot;newHeadImage&quot; id=&quot;newHeadImage&quot; value=&quot;&quot; /&gt;
    &lt;input type=&quot;submit&quot; value=&quot;提交&quot;/&gt;
&lt;/form&gt;
</code></pre><h3 id="_2、js部分" tabindex="-1"><a class="header-anchor" href="#_2、js部分" aria-hidden="true">#</a> 2、JS部分</h3><pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
    var tag = document.querySelector(&quot;#newHeadImage&quot;);
    tag.addEventListener(&quot;change&quot;,function(){
        //1、input file类型的标签中, 所有的文件放在files属性中, 这个属性是个数组
        if(tag.files.length == 0){
            alert(&quot;没有选择图片&quot;)
            return
        }
        var uploadFile = tag.files[0];
        
        //2、从文件对象获取本地路径src
        var src = window.URL.createObjectURL(uploadFile)
        
        //3、显示图片
        var imgBox = document.getElementById(&quot;img-box&quot;)
        imgBox.src = src;
    })
&lt;/script&gt;
</code></pre><h2 id="二、jquery-post上传头像" tabindex="-1"><a class="header-anchor" href="#二、jquery-post上传头像" aria-hidden="true">#</a> 二、jQuery+post上传头像</h2><h3 id="_1、html部分-1" tabindex="-1"><a class="header-anchor" href="#_1、html部分-1" aria-hidden="true">#</a> 1、HTML部分</h3><pre><code>&lt;div&gt;
    &lt;img id=&quot;img-box&quot; style=&quot;border: 1px solid gray; width: 100px; height: 100px;&quot; src=&quot;&quot;/&gt;

    &lt;input type=&quot;file&quot; name=&quot;newHeadImage&quot; id=&quot;newHeadImage&quot; value=&quot;&quot; /&gt;

    &lt;input class=&quot;upload-file&quot; type=&quot;button&quot; value=&quot;上传头像&quot;/&gt;
&lt;/div&gt;
</code></pre><h3 id="_2、jquery实现" tabindex="-1"><a class="header-anchor" href="#_2、jquery实现" aria-hidden="true">#</a> 2、jQuery实现</h3><pre><code>&lt;!--  引入jQuery文件  --&gt;
&lt;script src=&quot;jquery-1.9.1.min.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;!--  引入接口文件  --&gt;
&lt;script src=&quot;interface.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    
    
    //选择图片的处理
    var tag = document.querySelector(&quot;#newHeadImage&quot;);
    tag.addEventListener(&quot;change&quot;,function(){
        //1、获取选择的文件,图片
        if(tag.files.length == 0){
            alert(&quot;没有选择图片&quot;)
            return
        }
        var uploadFile = tag.files[0];
        
        //2、从文件对象获取本地路径src
        var src = window.URL.createObjectURL(uploadFile);
        
        //3、显示图片
        var imgBox = document.getElementById(&quot;img-box&quot;)
        imgBox.src = src;
    })
    
    //确认更换头像的事件处理
    $(&quot;.upload-file&quot;).click(function () {                
        //1、获取图片输入框
        var tag = document.getElementById(&quot;newHeadImage&quot;);                        
                
        //2、获取选择的文件,图片
        //input file类型的标签中, 所有的文件放在files属性中, 这个属性是个数组
        if(tag.files.length == 0){
            alert(&quot;没有选择图片&quot;)
            return
        }
        var uploadFile = tag.files[0];
        
        //C.生成FormData. 生成了form表单
        var formData = new FormData();
        formData.append(&quot;m&quot;,&quot;user&quot;)
        formData.append(&quot;a&quot;,&quot;changeHeadImage&quot;)
        formData.append(&quot;userId&quot;,&quot;1&quot;)
        formData.append(&quot;newHeadImage&quot;,uploadFile);
        
        //D.发起post请求   vue: this.$http.post()                
        $.ajax({
            type:&quot;post&quot;,
            url:changeHeadImageUrl,
            async:true,
            data:formData,
            //processData为真, 数据转化为字符串传递  上传文件, 设置为false
            processData:false,
            contentType:false
        }).done(function (r) {
            alert(r)
        });
        
    })
                
&lt;/script&gt;
</code></pre><h2 id="三、vue-post上传头像" tabindex="-1"><a class="header-anchor" href="#三、vue-post上传头像" aria-hidden="true">#</a> 三、vue+post上传头像</h2><h3 id="_1、html部分-2" tabindex="-1"><a class="header-anchor" href="#_1、html部分-2" aria-hidden="true">#</a> 1、HTML部分</h3><pre><code>&lt;!--view--&gt;
&lt;div id=&quot;app&quot;&gt;
    &lt;div&gt;
        &lt;img class=&quot;head-image&quot; v-bind:src=&quot;src&quot;/&gt;&lt;br&gt;
        &lt;input id=&quot;headImageTag&quot; type=&quot;file&quot; v-on:change=&quot;dealChange&quot; multiple=&quot;multiple&quot;/&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;button v-on:click=&quot;dealUploadImage&quot;&gt;修改头像&lt;/button&gt;
    &lt;/div&gt;                
&lt;/div&gt;
</code></pre><h3 id="_2、vue部分" tabindex="-1"><a class="header-anchor" href="#_2、vue部分" aria-hidden="true">#</a> 2、Vue部分</h3><pre><code>&lt;!--  引入vue文件  --&gt;
&lt;script src=&quot;vue/vue.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;vue/vue-resource.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;vue/vue-router.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;!--  引入接口文件  --&gt;
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
                //1、获取图片输入框
                var tag = document.getElementById(&quot;headImageTag&quot;);                        
                
                //2、获取选择的文件,图片
                if(tag.files.length == 0){
                    alert(&quot;没有选择图片&quot;)
                    return
                }
                var uploadFile = tag.files[0];                        
                
                //3、生成FormData. 生成了form表单
                var formData = new FormData();
                formData.append(&quot;m&quot;,&quot;user&quot;)
                formData.append(&quot;a&quot;,&quot;changeHeadImage&quot;)
                formData.append(&quot;userId&quot;,&quot;1&quot;)
                formData.append(&quot;newHeadImage&quot;,uploadFile);                        
                
                //D.发起post请求
                var url = changeHeadImageUrl;
                this.$http.post(url,formData,function () {
                    
                }).then(function (r) {                            
                    var jsonObject = r.data;                            
                })                        
            },
            dealChange:function(){
                //1、获取图片输入框
                var tag = document.getElementById(&quot;headImageTag&quot;);
                
                //2、获取选择的文件,图片
                if(tag.files.length == 0){
                    alert(&quot;没有选择图片&quot;)
                    return
                }
                var uploadFile = tag.files[0];
                
                //3、从文件对象获取本地路径src
                var src = window.URL.createObjectURL(uploadFile)
            
                //4、显示图片
                this.src = src
            }
        }
    });

&lt;/script&gt;
</code></pre>`,16),r=[u];function q(i,d){return e(),o("div",null,r)}const s=t(n,[["render",q],["__file","上传头像的三种方法.html.vue"]]);export{s as default};
