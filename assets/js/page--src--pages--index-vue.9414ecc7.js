(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{WyJV:function(t,a,e){},fsbD:function(t,a,e){"use strict";e("WyJV")},iyQ6:function(t,a,e){"use strict";e.r(a);e("Kw5r");var s=e("DOVJ"),n=(e("Y6W1"),e("fVfk")),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:(t,{props:a,data:e,parent:i})=>{const{info:l,showLinks:o,showNavigation:u,ariaLabel:c}=a,{current:d,total:g,pages:p,start:f,end:b}=function({currentPage:t=1,totalPages:a=1},e){const s=Math.ceil(e/2);let n=Math.floor(t-s),i=Math.floor(t+s);a<=e?(n=0,i=a):t<=s?(n=0,i=e):t+s>=a&&(n=a-e,i=a);const r=[];for(let t=n+1;t<=i;t++)r.push(t);return{current:t,total:a,start:n,end:i,pages:r}}(l,a.range),v=Object(n.d)(i.$route),y=(e,n=e,i=n,l="")=>{e===d&&(i=a.ariaCurrentLabel);const o={to:r(v,e),exact:!0};return a.activeLinkClass&&(o.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(o.exactActiveClass=a.exactActiveLinkClass),t(s.a,{class:[a.linkClass,l],attrs:{...o,"aria-label":i.replace("%n",e),"aria-current":d===e}},[n])},C=o?p.map(t=>y(t,t,a.ariaLinkLabel)):[];if(u){const{firstLabel:t,prevLabel:e,nextLabel:s,lastLabel:n}=a,{ariaFirstLabel:i,ariaPrevLabel:r,ariaNextLabel:l,ariaLastLabel:o}=a,{firstClass:u,prevClass:c,nextClass:p,lastClass:v,navClass:L}=a;d>1&&C.unshift(y(d-1,e,r,[c,L])),f>0&&C.unshift(y(1,t,i,[u,L])),d<g&&C.push(y(d+1,s,l,[p,L])),b<g&&C.push(y(g,n,o,[v,L]))}return C.length<2?null:t("nav",{...e,attrs:{role:"navigation","aria-label":c}},C)}};function r(t,a){const e=/\/$/.test(t)?"/":"";return a>1?Object(n.g)(t)+`/${a}${e}`:t}e("6NbQ");var l=e("jjZW"),o={components:{Pager:i},metaInfo:{title:"Hello, world!"},methods:{mdInline:t=>l.a.renderInline(t)}},u=(e("fsbD"),e("KHd+")),c=null,d=Object(u.a)(o,(function(){var t=this,a=t._self._c;return a("Layout",[a("header",{staticClass:"masthead",style:{"background-image":`url('${t.GRIDSOME_API_URL}${t.$page.general.edges[0].node.data.attributes.cover.data&&t.$page.general.edges[0].node.data.attributes.cover.data.attributes.url}')`}},[a("div",{staticClass:"container position-relative px-4 px-lg-5"},[a("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[a("div",{staticClass:"col-md-10 col-lg-8 col-xl-7"},[a("div",{staticClass:"site-heading"},[a("h1",[t._v(t._s(t.$page.general.edges[0].node.data.attributes.title))]),a("span",{staticClass:"subheading"},[t._v(t._s(t.$page.general.edges[0].node.data.attributes.subtitle))])])])])])]),a("div",{staticClass:"container px-4 px-lg-5"},[a("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[a("div",{staticClass:"col-md-10 col-lg-8 col-xl-7"},[t._l(t.$page.posts.edges,(function({node:e}){return[a("div",{key:"posts-"+e.id,staticClass:"post-preview"},[a("g-link",{attrs:{to:"/post/"+e.id}},[a("h2",{staticClass:"post-title"},[t._v("\n                "+t._s(e.attributes.title||e.attributes.content.slice(0,8))+"\n              ")]),a("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-subtitle",domProps:{innerHTML:t._s(t.mdInline(e.attributes.content))}})]),a("p",{staticClass:"post-meta"},[t._v("\n              Posted by\n              "),a("a",{attrs:{href:"#!"}},[t._v(t._s(e.attributes.createdBy.data?`${e.attributes.createdBy.data.attributes.firstname} ${e.attributes.createdBy.data.attributes.lastname}`:"System API"))]),t._v("\n              on "+t._s(e.attributes.createdAt)+"\n            ")]),t._l(e.attributes.tags.data,(function(e){return a("span",{key:"tags-"+e.id},[a("g-link",{attrs:{to:"/tag/"+e.id}},[t._v(t._s(e.attributes.title))]),t._v("\n                \n            ")],1)}))],2),a("hr",{key:e.id,staticClass:"my-4"})]})),a("Pager",{staticClass:"pagination",attrs:{info:t.$page.posts.pageInfo}}),a("div",{staticClass:"d-flex justify-content-end mb-4"},[a("a",{staticClass:"btn btn-primary text-uppercase",attrs:{href:"#!"}},[t._v("Older Posts →")])])],2)])])])}),[],!1,null,null,null);"function"==typeof c&&c(d);a.default=d.exports},jjZW:function(t,a,e){"use strict";e.d(a,"b",(function(){return i}));var s=e("1M3H");const n=new(e.n(s).a);function i(t){return n.render(t)}a.a=n}}]);