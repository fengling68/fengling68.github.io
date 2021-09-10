(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{448:function(n,t,e){"use strict";e.r(t);var a=e(1),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"mvc和mvvm设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvc和mvvm设计模式"}},[n._v("#")]),n._v(" MVC和MVVM设计模式")]),n._v(" "),e("h2",{attrs:{id:"一、mvc设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、mvc设计模式"}},[n._v("#")]),n._v(" 一、MVC设计模式")]),n._v(" "),e("pre",[e("code",[n._v("Models模型主要关注的是业务数据，即管理一个业务应用的数据，它们既与用户界面无关也与表现层无关。\n\nJavaScript 的视图是关于构建和操作DOM元素，视图是对我们的数据的一种可视化展现。\n\n控制器是模型和视图之间的中介，典型的职责是当用户操作视图的时候同步更新模型。\n\nM = Model    模型,数据模型\n    Person = {\n        name\n        age\n        sex\n        ...\n    }\n    \nV = View     视图,(html+css)显示数据的界面                \n    div p span\n    \nC = Controller  控制器 \n    1、拿出数据显示到界面\n    2、界面有变化的时候，修改数据\n")])]),n._v(" "),e("ul",[e("li",[e("p",[n._v("JavaScript 模板解决方案（例如Handlebars.js 和 Mustache）通常用于为视图定义模板作为标记，标记中包含有模板变量。标记要么存储在外部，要么存储在脚本标签里面，使用自定义的类型例如text/template。")])]),n._v(" "),e("li",[e("p",[n._v("将模板存储在外部的时候，这样在构建大型引应用的时候可以是模板按照需要动态加载。")])])]),n._v(" "),e("h2",{attrs:{id:"二、mvp设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、mvp设计模式"}},[n._v("#")]),n._v(" 二、MVP设计模式")]),n._v(" "),e("pre",[e("code",[n._v("模型-视图-展示器(MVP)是MVC设计模式的一个衍生模式,它专注于提升展现逻辑。\n")])]),n._v(" "),e("h2",{attrs:{id:"三、mvvm设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、mvvm设计模式"}},[n._v("#")]),n._v(" 三、MVVM设计模式")]),n._v(" "),e("pre",[e("code",[n._v("MVVM是一种基于MVC和MVP的架构模式，它试图将用户界面（UI）从业务逻辑和行为中更加清晰地分离出来。\n\nM = Model       数据模型\nV = View        视图\nVM = ViewModel  数据绑定\n\n先写好数据，再写view界面，后写viewModel绑定\n核心：数据变化后，界面自动变化\n")])]),n._v(" "),e("h2",{attrs:{id:"四、三种设计模式的比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、三种设计模式的比较"}},[n._v("#")]),n._v(" 四、三种设计模式的比较")]),n._v(" "),e("pre",[e("code",[n._v("MVP和MVVM都是MVC的衍生物。它和它的衍生物之间关键的不同之处在于每一层对于其它层的依赖，以及它们相互之间是如何紧密结合在一起的。\n\n在MVC中，视图位于我们架构的顶部，其背后是控制器。模型在控制器后面，而因此我们的视图了解得到我们的控制器，而控制器了解得到模型。这里，我们的视图有对模型的直接访问。然而将整个模型完全暴露给视图可能会有安全和性能损失，这取决于我们应用程序的复杂性。MVVM则尝试去避免这些问题。\n\n在MVP中，控制器的角色被代理器所取代，代理器和视图处于同样的地位，视图和模型的事件都被它侦听着并且接受它的调解。不同于MVVM，没有一个将视图绑定到视图模型的机制，因此我们转而依赖于每一个视图都实现一个允许代理器同视图去交互的接口。\n\nMVVM进一步允许我们创建一个模型的特定视图子集，包含了状态和逻辑信息，避免了将模型完全暴露给视图的必要。不同于MVP的代理器，视图模型并不需要去引用一个视图。视图可以绑定到视图模型的属性上面，视图模型则去将包含在模型中的数据暴露给视图。像我们所提到过的，对视图的抽象意味着其背后的代码需要较少的逻辑。\n\n对此的副作用之一就是视图模型和视图层之间新增的的用于翻译解释的一层会有性能损失。这种解释层的复杂度根据情况也会有所差异——它可能像复制数据一样简单，也可能会像我们希望用视图理解的一种形式去操作它们，那样复杂。由于整个模型是现成可用的，从而这种操作可以被避免掉，所以MVC没有这种问题。\n")])])])}),[],!1,null,null,null);t.default=r.exports}}]);