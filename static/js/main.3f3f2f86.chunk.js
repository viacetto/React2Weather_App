(this.webpackJsonpreact2weather=this.webpackJsonpreact2weather||[]).push([[0],{15:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(10),s=n.n(r),i=(n(15),n(6)),o=n(5),j=n.n(o),u=n(4),l=n(3),d=n(0);var h=function(e){switch(e.desc){case"clear sky":return Object(d.jsx)(l.a,{icon:u.i});case"few clouds":return Object(d.jsx)(l.a,{icon:u.c});case"scattered clouds":case"broken clouds":return Object(d.jsx)(l.a,{icon:u.a});case"shower rain":return Object(d.jsx)(l.a,{icon:u.b});case"rain":return Object(d.jsx)(l.a,{icon:u.d});case"thunderstorm":return Object(d.jsx)(l.a,{icon:u.e});case"snow":return Object(d.jsx)(l.a,{icon:u.h});case"mist":return Object(d.jsx)(l.a,{icon:u.g});default:return Object(d.jsx)(l.a,{icon:u.a})}};var f=function(e){var t=e.elData,n=e.titleClass,a="undefined"!==typeof t.main?t.main.temp:t.temp.day,c="hours_title"===n?j.a.unix(t.dt).format("HH"):j.a.unix(t.dt).format("ddd");return Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:c}),Object(d.jsx)(h,{desc:t.weather[0].description}),Object(d.jsx)("h5",{children:Object(d.jsx)("span",{className:"tempXs",children:Math.floor(a)})})]})};var p=function(e){var t=e.titleClass,n=e.containerClass,a=e.wrapperClass,c=e.viewName,r=(e.currentQuery,e.currrentData),s=r.length,i=r.slice(s-5);return Object(d.jsxs)("div",{className:n,children:[Object(d.jsx)("span",{className:t,children:c}),Object(d.jsx)("span",{className:a,children:i.map((function(e){return Object(d.jsx)(f,{titleClass:t,elData:e},e.dt)}))})]})},b="8c1df0f9fe108f87ff658f63fc03d78a";var m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],h=s[1],f=Object(a.useState)(),m=Object(i.a)(f,2),O=m[0],x=m[1],w=Object(a.useState)(),v=Object(i.a)(w,2),y=v[0],g=v[1],C=function(){var e;return e="undefined"===typeof o.main?j()():j()().utcOffset(o.timezone/60),"".concat(e.format("HH:mm:ss"))},N=function(){var e=j()();return"".concat(e.format("dddd")," ").concat(e.format("MMMM")," ").concat(e.format("d"))},_=Object(a.useState)(),k=Object(i.a)(_,2),M=k[0],D=k[1],S=Object(a.useState)(N()),I=Object(i.a)(S,2),P=I[0],H=(I[1],setInterval((function(){D(C(),N()),clearInterval(H)}),1e3));return Object(d.jsx)("div",{className:"undefined"!=typeof o.main&&o.main.temp>15?"app warm":"app",children:Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"search_wrapper",children:[Object(d.jsx)("input",{onKeyUp:function(e){"Enter"===e.key&&(fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&APPID=").concat(b)).then((function(e){return e.json()})).then((function(e){c(""),h(e),D(C(),N())})),fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(n,"&units=metric&APPID=").concat(b)).then((function(e){return e.json()})).then((function(e){g(e.list)})),fetch("http://nominatim.openstreetmap.org/search?q=".concat(n,"&format=json&polygon=1&addressdetails=1")).then((function(e){return e.json()})).then((function(e){return{lat:e[0].lat,lon:e[0].lon}})).then((function(e){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.lat,"&lon=").concat(e.lon,"&units=metric&appid=").concat(b)).then((function(e){return e.json()})).then((function(e){x(e.daily)}))})))},value:n,onChange:function(e){return c(e.target.value)}}),Object(d.jsx)(l.a,{icon:u.f})]})}),"undefined"!==typeof o.main?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:o.name}),Object(d.jsx)("h1",{children:Object(d.jsx)("span",{className:"temp",children:Math.floor(o.main.temp)})}),Object(d.jsx)("h5",{children:o.weather[0].main}),Object(d.jsx)("h4",{children:M}),Object(d.jsx)("h4",{children:P}),Object(d.jsxs)("h5",{children:["H: ",Math.floor(o.main.temp_max)," L: ",Math.floor(o.main.temp_min)]})]})}):Object(d.jsx)("h2",{children:"search for location"}),"undefined"!==typeof y?Object(d.jsx)(p,{currrentData:y,containerClass:"hours_container",titleClass:"hours_title",wrapperClass:"hours_wrapper",viewName:"h o u r"}):Object(d.jsx)("span",{}),"undefined"!==typeof O?Object(d.jsx)(p,{containerClass:"weekdays_container",titleClass:"weekdays_title",wrapperClass:"weekdays_wrapper",viewName:"w e e k",currrentData:O}):Object(d.jsx)("span",{})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.3f3f2f86.chunk.js.map