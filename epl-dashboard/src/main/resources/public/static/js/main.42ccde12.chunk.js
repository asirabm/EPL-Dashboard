(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(16),r=a.n(s),o=(a(24),a(25),a(6)),i=a.n(o),j=a(8),h=a(7),l=a(3),m=a(9),u=a(0);var d=function(e){var t=e.match,a="/teams/".concat(t.homeTeam),c="/teams/".concat(t.awayTeam),n="",s=Object(m.useParams)().teamName;return s===t.homeTeam?n=t.fthg>t.ftag?"green":t.ftag===t.fthg?"yellow":"red":s===t.awayTeam&&(n=t.fthg>t.ftag?"red":t.ftag===t.fthg?"yellow":"green"),Object(u.jsxs)("div",{className:n,children:[Object(u.jsxs)("h5",{children:[Object(u.jsx)(l.b,{to:a,children:t.homeTeam}),"(",t.fthg,")",Object(u.jsx)("span",{className:"vs",children:"vs"}),Object(u.jsx)(l.b,{to:c,children:t.awayTeam}),"(",t.ftag,")"]}),Object(u.jsx)("h6",{children:t.dateTime})]})},b=a(2),f=(a(36),a(19));var O=function(){var e=Object(b.useParams)().teamName,t=Object(c.useState)({matches:[]}),a=Object(h.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),o=Object(h.a)(r,2),m=o[0],O=o[1],x=n.totalMatches,v=n.totalWin,g=n.totalDraws,p=x-(g+v);return Object(c.useEffect)((function(){var t=function(){var t=Object(j.a)(i.a.mark((function t(){var a,c,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://localhost:8081","/team/").concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:return c=t.sent,t.next=8,fetch("".concat("http://localhost:8081","/team/seasons/").concat(e));case 8:return n=t.sent,t.next=11,n.json();case 11:r=t.sent,s(c),O(r);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(u.jsxs)("div",{className:"TeamPages",children:[Object(u.jsxs)("div",{className:"team-name",children:[Object(u.jsx)("h1",{className:"t-name",children:n.name}),Object(u.jsxs)("h4",{children:["Latest Matches (",m[m.length-1],")"]})]}),Object(u.jsxs)("div",{className:"win-losses",children:["Win/losses",Object(u.jsx)(f.PieChart,{data:[{title:"win",value:v,color:"darkgreen"},{title:"Lost",value:p,color:"darkred"},{title:"Draw",value:g,color:"darkgray"}]})]}),n.matches.map((function(e){return Object(u.jsx)(d,{match:e},e.id)})),Object(u.jsx)("div",{className:"more-link",children:Object(u.jsx)(l.b,{to:"".concat(e,"/matches/").concat(m[m.length-1]),children:"more"})})]})};a(37);var x=function(e){var t,a,c=e.match,n="/teams/".concat(c.homeTeam),s="/teams/".concat(c.awayTeam),r="",o=Object(m.useParams)().teamName;return c?(console.log(t=(a=o).charAt(0).toUpperCase()+a.slice(1)),t===c.homeTeam?(console.log("Hello from home"),c.fthg>c.ftag?r="green":c.ftag===c.fthg?r="yellow":(console.log("knvdknvk"),r="red")):t===c.awayTeam&&(r=c.fthg>c.ftag?"red":c.ftag===c.fthg?"yellow":"green"),Object(u.jsx)("div",{className:"match-detail",children:Object(u.jsxs)("div",{className:r,children:[Object(u.jsxs)("h4",{children:[Object(u.jsx)(l.b,{to:n,children:c.homeTeam}),"(",c.fthg,") vs ",Object(u.jsx)(l.b,{to:s,children:c.awayTeam}),"(",c.ftag,")"]}),Object(u.jsx)("h6",{className:"match-date",children:c.dateTime})]})})):null};a(38);var v=function(e){var t=e.s,a=Object(m.useParams)().teamName;return Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"/teams/".concat(a,"/matches/").concat(t),children:t})})};var g=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(m.useParams)().teamName;return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8081","/team/seasons/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Select Season"}),a.map((function(e){return Object(u.jsx)(v,{s:e})}))]})};var p=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(b.useParams)(),r=s.teamName,o=s.season;Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8081","/team/").concat(r,"/matches?season=").concat(o));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o,r]);var l=!1;return 0===a.length&&(l=!0),Object(u.jsxs)("div",{className:"MatchPage",children:[Object(u.jsxs)("div",{className:"season-selector",children:[Object(u.jsx)(g,{})," "]}),Object(u.jsx)("div",{children:l?Object(u.jsxs)("h1",{children:[r," did not played in ",o," season"]}):Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Match Page"}),Object(u.jsx)("h3",{children:undefined}),Object(u.jsx)("h4",{children:o}),a.map((function(e){return Object(u.jsx)(x,{teamName:r,match:e})}))]})})})]})};a(39);var N=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8081","/team/"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"HomePage",children:[Object(u.jsx)("div",{className:"header-section"}),Object(u.jsx)("div",{className:"team-grid",children:a.map((function(e){return Object(u.jsx)("h3",{className:"team",children:Object(u.jsx)(l.b,{to:"teams/".concat(e.name),children:e.name})})}))})]})};a(40).config();var w=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"header-section"}),Object(u.jsxs)(l.a,{children:[Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("h2",{children:"English Premier League Dashboard"})}),Object(u.jsxs)(b.Switch,{children:[Object(u.jsx)(b.Route,{path:"/teams/:teamName/matches/:season",children:Object(u.jsx)(p,{})}),Object(u.jsx)(b.Route,{path:"/teams/:teamName",children:Object(u.jsx)(O,{})}),Object(u.jsx)(b.Route,{path:"/",children:Object(u.jsx)(N,{})})]})]})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.42ccde12.chunk.js.map