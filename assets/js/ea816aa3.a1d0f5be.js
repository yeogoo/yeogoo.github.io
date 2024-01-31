"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9829],{2950:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>x,contentTitle:()=>i,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var n=l(5893),s=l(1151);const d={slug:"\ub204\uc801\ub9e4\ucd9c \uad6c\ud558\uae30",title:"\ub204\uc801\ub9e4\ucd9c \uad6c\ud558\uae30",authors:"junyeong",tags:["sql","sqld"],hide_table_of_contents:!1},i=void 0,r={permalink:"/blog/\ub204\uc801\ub9e4\ucd9c \uad6c\ud558\uae30",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-05-\ub204\uc801\ub9e4\ucd9c\uad6c\ud558\uae30.md",source:"@site/blog/2024-01-05-\ub204\uc801\ub9e4\ucd9c\uad6c\ud558\uae30.md",title:"\ub204\uc801\ub9e4\ucd9c \uad6c\ud558\uae30",description:"\uc544\ub798\uc640 \uac19\uc740 \uc8fc\ubb38 \ud14c\uc774\ube14\uc774 \uc788\ub2e4\uace0 \ud558\uc790.",date:"2024-01-05T00:00:00.000Z",formattedDate:"2024\ub144 1\uc6d4 5\uc77c",tags:[{label:"sql",permalink:"/blog/tags/sql"},{label:"sqld",permalink:"/blog/tags/sqld"}],readingTime:3.835,hasTruncateMarker:!0,authors:[{name:"yeogoo",title:"\ube14\ub85c\uadf8 \uc8fc\uc778\uc7a5",url:"https://yeegoo.github.io",imageURL:"https://avatars.githubusercontent.com/u/48542008?v=4",key:"junyeong"}],frontMatter:{slug:"\ub204\uc801\ub9e4\ucd9c \uad6c\ud558\uae30",title:"\ub204\uc801\ub9e4\ucd9c \uad6c\ud558\uae30",authors:"junyeong",tags:["sql","sqld"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"kubernetes-the-hard-way (1)",permalink:"/blog/kubernetes-the-hard-way-1"},nextItem:{title:"giscus \ud56d\uc0c1 \ubcf4\uc774\uac8c \ud558\uae30",permalink:"/blog/giscus \ud56d\uc0c1 \ubcf4\uc774\uac8c \ud558\uae30"}},x={authorsImageUrls:[void 0]},c=[];function h(t){const e={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"\uc544\ub798\uc640 \uac19\uc740 \uc8fc\ubb38 \ud14c\uc774\ube14\uc774 \uc788\ub2e4\uace0 \ud558\uc790."}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\uc8fc\ubb38\ubc88\ud638"}),(0,n.jsx)(e.th,{children:"\uace0\uac1d\ubc88\ud638"}),(0,n.jsx)(e.th,{children:"\uc8fc\ubb38\uc77c\uc790"}),(0,n.jsx)(e.th,{children:"\uc8fc\ubb38\uae08\uc561"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"501"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"20190501"}),(0,n.jsx)(e.td,{children:"20000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"612"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"20190523"}),(0,n.jsx)(e.td,{children:"5000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"728"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"20200311"}),(0,n.jsx)(e.td,{children:"25000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"904"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"20200715"}),(0,n.jsx)(e.td,{children:"10000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"404"}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"20191208"}),(0,n.jsx)(e.td,{children:"7000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"603"}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"20200428"}),(0,n.jsx)(e.td,{children:"6000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"807"}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"20200527"}),(0,n.jsx)(e.td,{children:"17000"})]})]})]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"SELECT A.\uace0\uac1d\ubc88\ud638, A.\uc8fc\ubb38\uc77c\uc790, SUM(B.\uc8fc\ubb38\uae08\uc561) AS \uc8fc\ubb38\ud569\uacc4\uae08\uc561\n  FROM \uc8fc\ubb38 A, \uc8fc\ubb38 B\n WHERE B.\uace0\uac1d\ubc88\ud638 = A.\uace0\uac1d\ubc88\ud638\n   AND B.\uc8fc\ubb38\uc77c\uc790 <= A.\uc8fc\ubb38\uc77c\uc790\n GROUP BY A.\uace0\uac1d\ubc88\ud638, A.\uc8fc\ubb38\uc77c\uc790\n ORDER BY A.\uace0\uac1d\ubc88\ud638, A.\uc8fc\ubb38\uc77c\uc790;\n"})}),"\n",(0,n.jsx)(e.p,{children:"\uc704\uc640 \uac19\uc774 \uc778\ub77c\uc778\ubdf0\ub97c \ud1b5\ud574\uc11c \ub204\uc801 \ub9e4\ucd9c\uc744 \uad6c\ud558\ub294 \ubc29\ubc95\uc774 \uc788\ub2e4. \uac19\uc740 \ud14c\uc774\ube14 \uac04\uc5d0 \uc870\uc778\uc744 \uc218\ud589\ud558\ub294 \uac83\uc744 \uc140\ud504 \uc870\uc778\uc774\ub77c\uace0 \ud558\ub294\ub370,\n\uc704\uc758 \uacbd\uc6b0\ub294 2\uac1c\uc758 \uc870\uac74\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4. \ub2e8\uc21c\ud788 \uace0\uac1d\ubc88\ud638\ub85c\ub9cc \uc870\uc778\uc744 \ud558\uac8c \ub418\uba74 \uac19\uc740 \uace0\uac1d\ubc88\ud638 \ub0b4\uc5d0\uc11c \uc591\ucabd \uc9d1\ud569\uac04\uc5d0 \uce74\ud2f0\uc158 \uacf1\uc774 \ub9cc\ub4e4\uc5b4\uc9c0\uac8c \ub41c\ub2e4.\n\uc774\ub54c A\ucabd\uc758 \uac01 \uc8fc\ubb38 \ub370\uc774\ud130 \uae30\uc900\uc73c\ub85c \uc8fc\ubb38\uc77c\uc790\uac00 \uc791\uac70\ub098 \uac19\uc740 B\ucabd \uc8fc\ubb38\uc744 \ubaa8\ub450 \uc120\ud0dd\ud558\ub3c4\ub85d \ud55c \uac83\uc774\ub2e4. \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcf4\uc790."}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\uace0\uac1d\ubc88\ud638"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\uc8fc\ubb38\uc77c\uc790"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\uc8fc\ubb38\ud569\uacc4\uae08\uc561"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20190501"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20190523"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"25000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20200311"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"50000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20200715"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"60000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20191208"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"7000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20200428"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"13000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20200527"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"30000"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:"\uc704\uc758 \ucffc\ub9ac\ub9cc\uc73c\ub85c\ub294 \uc8fc\ubb38\ud569\uacc4\uae08\uc561\uc774 \uc5b4\ub5a4\uc2dd\uc73c\ub85c \ub3c4\ucd9c\ub41c\uc9c0 \uc9c1\uad00\uc801\uc73c\ub85c \ud655\uc778\ud558\uae30 \uc5b4\ub835\ub2e4.\nA\ud14c\uc774\ube14 (\uae30\uc900 \ud14c\uc774\ube14)\uc758 \uc8fc\ubb38\uae08\uc561\uc744 \ucd94\uac00\ud574\uc11c \ud655\uc778\ud574\ubcf4\ub3c4\ub85d \ud558\uc790."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"SELECT A.\uace0\uac1d\ubc88\ud638, A.\uc8fc\ubb38\uc77c\uc790, MIN(A.\uc8fc\ubb38\uae08\uc561) \uc8fc\ubb38\uae08\uc561, SUM(B.\uc8fc\ubb38\uae08\uc561) AS \uc8fc\ubb38\ud569\uacc4\uae08\uc561\n  FROM \uc8fc\ubb38 A, \uc8fc\ubb38 B\n WHERE B.\uace0\uac1d\ubc88\ud638 = A.\uace0\uac1d\ubc88\ud638\n   AND B.\uc8fc\ubb38\uc77c\uc790 <= A.\uc8fc\ubb38\uc77c\uc790\n GROUP BY A.\uace0\uac1d\ubc88\ud638, A.\uc8fc\ubb38\uc77c\uc790\n ORDER BY A.\uace0\uac1d\ubc88\ud638, A.\uc8fc\ubb38\uc77c\uc790;\n"})}),"\n",(0,n.jsx)(e.p,{children:"\uc704 \ucffc\ub9ac\uc758 \uc2e4\ud589\uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\uace0\uac1d\ubc88\ud638"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\uc8fc\ubb38\uc77c\uc790"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\uc8fc\ubb38\uae08\uc561"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\uc8fc\ubb38\ud569\uacc4\uae08\uc561"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20190501"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20190523"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"5000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"25000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20200311"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"25000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"50000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"1"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20200715"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"10000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"60000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20191208"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"7000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"7000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20200428"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"6000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"13000"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"2"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"20200527"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"17000"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"30000"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:["\uc704\uc758 \ud45c\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub4ef\uc774 \ub450\ubc88\uc9f8 \ud589\uc778 \uc8fc\ubb38\uc77c\uc790 ",(0,n.jsx)(e.code,{children:"20190523"}),"\ud589\uc5d0\uc11c\ub294 ",(0,n.jsx)(e.code,{children:"20,000 + 5,000 = 25,000"})," \uc73c\ub85c \uc8fc\ubb38\ud569\uacc4\uae08\uc561\uc774 \uc9d1\uacc4\ub418\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4.\n\uadf8 \uc544\ub798\uc758 \ud589\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\uc774\ub2e4.\n\uc774\ud574\ub294 \uac00\uc9c0\ub9cc \uad73\uc774 \uc774\ub807\uac8c \uc140\ud504\uc870\uc778\uae4c\uc9c0 \uc0ac\uc6a9\ud558\uba74\uc11c \ub204\uc801\uac12\uc744 \uad6c\ud574\uc57c \ud558\ub294 \uac78\uae4c? \uc870\uae08 \ub354 \uadf8\ub7f4\ub4ef\ud558\uac8c \uc791\uc131\ud560 \uc218\ub294 \uc5c6\uc744\uae4c?\n\ub2f5\uc740 ",(0,n.jsx)(e.code,{children:"\uc708\ub3c4\uc6b0 \ud568\uc218"}),"\uc5d0 \uc788\ub2e4."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"SELECT\n    \uace0\uac1d\ubc88\ud638, \uc8fc\ubb38\uc77c\uc790,\n    SUM(\uc8fc\ubb38\uae08\uc561) OVER (PARTITION BY \uace0\uac1d\ubc88\ud638 ORDER BY \uace0\uac1d\ubc88\ud638, \uc8fc\ubb38\uc77c\uc790\n        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW ) AS \uc8fc\ubb38\ud569\uacc4\uae08\uc561\nFROM \uc8fc\ubb38;\n"})}),"\n",(0,n.jsx)(e.p,{children:"\uc5f0\uc2b5\ud558\uc790."}),"\n",(0,n.jsx)(e.p,{children:"(SQLD \ud575\uc2ec\ub178\ud2b8, \ub514\ube44\uc548, p74~75)"})]})}function j(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},1151:(t,e,l)=>{l.d(e,{Z:()=>r,a:()=>i});var n=l(7294);const s={},d=n.createContext(s);function i(t){const e=n.useContext(d);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),n.createElement(d.Provider,{value:e},t.children)}}}]);