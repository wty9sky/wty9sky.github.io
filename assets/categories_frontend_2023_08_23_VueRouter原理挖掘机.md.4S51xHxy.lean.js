import{_ as r}from"./chunks/ArticleMetadata.iqJwhQxk.js";import{_ as d,p as g,a as t,v as A,C as y,e as s,y as i,f as a,o as n,q as o,s as D}from"./chunks/framework.x10tvMrD.js";import"./chunks/theme.oJp2QlCq.js";import"./chunks/index.DkoCfqcs.js";const _s=JSON.parse('{"title":"VueRouter原理挖掘机","description":"","frontmatter":{"title":"VueRouter原理挖掘机","aside":true,"editLink":false,"lastUpdated":false,"showComment":false,"showSidebar":true},"headers":[],"relativePath":"categories/frontend/2023/08/23/VueRouter原理挖掘机.md","filePath":"categories/frontend/2023/08/23/VueRouter原理挖掘机.md","lastUpdated":1713844960000}'),C={name:"categories/frontend/2023/08/23/VueRouter原理挖掘机.md"},c=s("h1",{id:"模拟-vue-router",tabindex:"-1"},[i("模拟 Vue Router "),s("a",{class:"header-anchor",href:"#模拟-vue-router","aria-label":'Permalink to "模拟 Vue Router"'},"​")],-1),F=a("",251),B={id:"router-创建",tabindex:"-1"},u={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.414ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2835 1000","aria-hidden":"true"},m=a("",1),T=[m],Q=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"t"),s("mi",null,"e"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mo",null,"/")])])],-1),v=s("a",{class:"header-anchor",href:"#router-创建","aria-label":'Permalink to "$route/$router 创建"'},"​",-1),b={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.545ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 3335 950","aria-hidden":"true"},f=a("",1),V=[f],x=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"t"),s("mi",null,"e"),s("mi",{mathvariant:"normal"},"与")])],-1),q=s("p",null,"$route 是路由规则对象，包含了 path,component 等内容",-1),w=s("p",null,"$router 为路由对象（ViewRouter 对象）。",-1),j={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},R={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.566ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 3786 950","aria-hidden":"true"},M=a("",1),H=[M],L=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"t"),s("mi",null,"e"),s("mi",null,"r"),s("mi",{mathvariant:"normal"},"与")])],-1),P=a("",2),$={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.545ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 3335 950","aria-hidden":"true"},Z=a("",1),I=[Z],U=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"t"),s("mi",null,"e"),s("mi",{mathvariant:"normal"},"与")])],-1),N=a("",41),z={id:"router-创建-1",tabindex:"-1"},O={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},G={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.414ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2835 1000","aria-hidden":"true"},J=a("",1),X=[J],K=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"t"),s("mi",null,"e"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mo",null,"/")])])],-1),W=s("a",{class:"header-anchor",href:"#router-创建-1","aria-label":'Permalink to "$route/$router 创建"'},"​",-1),Y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},ss={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.545ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 3335 950","aria-hidden":"true"},is=a("",1),as=[is],ns=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"t"),s("mi",null,"e"),s("mi",{mathvariant:"normal"},"与")])],-1),ts=s("p",null,"$route 是路由规则对象，包含了 path,component 等内容",-1),hs=s("p",null,"$router 为路由对象（ViewRouter 对象）。",-1),ps={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},ls={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.566ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 3786 950","aria-hidden":"true"},ks=a("",1),es=[ks],rs=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"t"),s("mi",null,"e"),s("mi",null,"r"),s("mi",{mathvariant:"normal"},"与")])],-1),ds=a("",2),gs={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},As={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.545ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 3335 950","aria-hidden":"true"},ys=a("",1),os=[ys],Ds=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"r"),s("mi",null,"o"),s("mi",null,"u"),s("mi",null,"t"),s("mi",null,"e"),s("mi",{mathvariant:"normal"},"与")])],-1),Cs=a("",22);function cs(h,Fs,Bs,us,Es,ms){const k=r,e=g("ClientOnly");return n(),t("div",null,[c,A(e,null,{default:y(()=>{var p,l;return[(((p=h.$frontmatter)==null?void 0:p.aside)??!0)&&(((l=h.$frontmatter)==null?void 0:l.showArticleMetadata)??!0)?(n(),o(k,{key:0,article:h.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),F,s("h3",B,[s("mjx-container",u,[(n(),t("svg",E,T)),Q]),i("router 创建 "),v]),s("p",null,[i("创建"),s("mjx-container",b,[(n(),t("svg",_,V)),x]),i("router 的目的是能够在所有的 Vue 实例(组件)中，可以获取到。")]),q,w,s("p",null,[i("通过查看源码(install.js)可以发现，其实就是将"),s("mjx-container",j,[(n(),t("svg",R,H)),L]),i("route 挂载到了 Vue 的原型上。")]),P,s("p",null,[i("通过上面的代码，可以看到"),s("mjx-container",$,[(n(),t("svg",S,I)),U]),i("router 都是只读的，因为对应的值，在前面已经设置完毕，这里只是获取。")]),N,s("h3",z,[s("mjx-container",O,[(n(),t("svg",G,X)),K]),i("router 创建 "),W]),s("p",null,[i("创建"),s("mjx-container",Y,[(n(),t("svg",ss,as)),ns]),i("router 的目的是能够在所有的 Vue 实例(组件)中，可以获取到。")]),ts,hs,s("p",null,[i("通过查看源码(install.js)可以发现，其实就是将"),s("mjx-container",ps,[(n(),t("svg",ls,es)),rs]),i("route 挂载到了 Vue 的原型上。")]),ds,s("p",null,[i("通过上面的代码，可以看到"),s("mjx-container",gs,[(n(),t("svg",As,os)),Ds]),i("router 都是只读的，因为对应的值，在前面已经设置完毕，这里只是获取。")]),Cs])}const fs=d(C,[["render",cs]]);export{_s as __pageData,fs as default};
