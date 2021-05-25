(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(5),s=a.n(c),r=a(2),i=a.p+"static/media/weather.581dd7df.gif",d=a(0),l=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("span",{className:"navbar-brand",style:{width:"100%",textAlign:"center"},children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:i,alt:"content",style:{maxWidth:"50px",maxHeight:"50px"}})}),"Weather App"]})})}),Object(d.jsx)("nav",{className:"navbar fixed-bottom navbar-light bg-light",children:Object(d.jsx)("div",{style:{width:"100%",textAlign:"center"},children:Object(d.jsx)("small",{className:"text-muted",children:"\xa9 Copyright 2021, Ramnish Chuadhary"})})})]})},o=a(4),h=a.n(o),m=a(6),j=function(e){var t=e.icon,a=e.desc,n="";return t.includes("d")?"clear sky"===a?n="".concat("/weatherApp","/animated/day.svg"):"few clouds"===a?n="".concat("/weatherApp","/animated/cloudy-day-2.svg"):"scattered clouds"===a?n="".concat("/weatherApp","/animated/cloudy-day-1.svg"):a.includes("clouds")?n="".concat("/weatherApp","/animated/cloudy.svg"):"shower rain"===a?n="".concat("/weatherApp","/animated/rainy-1.svg"):"rain"===a?n="".concat("/weatherApp","/animated/rainy-6.svg"):a.includes("rain")?n="".concat("/weatherApp","/animated/rainy-7.svg"):a.includes("thunderstorm")?n="".concat("/weatherApp","/animated/thunder.svg"):a.includes("snow")?n="".concat("/weatherApp","/animated/snowy-6.svg"):"mist"===a&&(n="http://openweathermap.org/img/wn/".concat(t,"@2x.png")):"clear sky"===a?n="".concat("/weatherApp","/animated/night.svg"):"few clouds"===a?n="".concat("/weatherApp","/animated/cloudy-night-2.svg"):"scattered clouds"===a?n="".concat("/weatherApp","/animated/cloudy-night-1.svg"):a.includes("clouds")?n="".concat("/weatherApp","/animated/cloudy.svg"):a.includes("rain")?n="".concat("/weatherApp","/animated/rainy-7.svg"):a.includes("thunderstorm")?n="".concat("/weatherApp","/animated/thunder.svg"):a.includes("snow")?n="".concat("/weatherApp","/animated/snowy-6.svg"):"mist"===a&&(n="http://openweathermap.org/img/wn/".concat(t,"@2x.png")),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("img",{src:n,className:"icon",alt:"Content"})})},p=function(){var e=Object(n.useState)("Amritsar"),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),i=Object(r.a)(s,2),l=i[0],o=i[1],p=function(){var e=Object(m.a)(h.a.mark((function e(){var t,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=3a01a344d25d44853cc11dfccbe4ddcd"),e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,o(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error while Fetching");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){p()}),[]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"card",style:{width:"20rem"},children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("form",{className:"row g-3",onSubmit:function(e){e.preventDefault(),p()},children:[Object(d.jsx)("div",{className:"col-auto",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter City Name",value:a,onChange:function(e){c(e.target.value)},onFocus:function(){document.getElementsByClassName("fixed-bottom")[0].style.display="None"},onBlur:function(){document.getElementsByClassName("fixed-bottom")[0].style.display="block"}})}),Object(d.jsx)("div",{className:"col-auto",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"Submit"})})]}),l?"404"===l.cod||"400"===l.cod?Object(d.jsx)("h5",{className:"card-title",style:{textAlign:"center",padding:"50px"},children:"City Not Found"}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{textAlign:"center",marginTop:"10px"},children:[Object(d.jsxs)("h5",{className:"card-title",children:[l.name," (",l.sys.country,")"]}),Object(d.jsx)(j,{icon:l.weather[0].icon,desc:l.weather[0].description}),Object(d.jsxs)("p",{className:"card-text",children:["Current Temp :: ",Object(d.jsxs)("b",{children:[(Math.round(100*(parseFloat(l.main.temp)-273.15))/100).toFixed(2),"\xb0C"]})]}),Object(d.jsxs)("p",{className:"card-text",style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(d.jsxs)("span",{children:["Min :: ",Object(d.jsxs)("b",{children:[(Math.round(100*(parseFloat(l.main.temp_min)-273.15))/100).toFixed(2),"\xb0C"]})]}),Object(d.jsxs)("span",{style:{textAlign:"right"},children:["Max :: ",Object(d.jsxs)("b",{children:[(Math.round(100*(parseFloat(l.main.temp_max)-273.15))/100).toFixed(2),"\xb0C"]})]})]}),Object(d.jsxs)("p",{className:"card-text",children:["Humidity :: ",Object(d.jsx)("b",{children:l.main.humidity})]}),Object(d.jsxs)("span",{children:["(  ",l.weather[0].description,"  )"]}),Object(d.jsx)("p",{className:"card-text",children:Object(d.jsxs)("small",{className:"text-muted",children:["Updated at ",new Date(1e3*l.dt).toLocaleTimeString()]})})]})}):null]})})})};var u=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)})),Object(d.jsx)(d.Fragment,{children:a?null:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{}),Object(d.jsx)("div",{className:"container1",children:Object(d.jsx)("div",{className:"flex-column justify-content-center",children:Object(d.jsx)(p,{})})})]})})};a(13),a(14);s.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9074f4e7.chunk.js.map