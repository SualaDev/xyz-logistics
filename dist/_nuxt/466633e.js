(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{400:function(t,n,e){var content=e(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("aecfb588",content,!0,{sourceMap:!1})},437:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNS44Nzk5IDIwLjUxM0wyMS44NzcgMi45MjE2NEMyMi40NzY3IDEuMjIyNDcgMjAuNzc3NSAtMC40NzY2OTMgMTkuMDc4NCAwLjEyMzAxMUwxLjQ4NyA2LjEyMDA3Qy0wLjUxMjAyIDYuODE5NzIgLTAuNTEyMDIgOS42MTgzIDEuNTg2OTUgMTAuMjE4MUw3LjQ4NDA1IDExLjgxNzNDOC43ODM0MiAxMi4yMTcxIDkuODgyOSAxMy4yMTY2IDEwLjE4MjcgMTQuNTE1OUwxMS43ODE5IDIwLjQxM0MxMi4zODE3IDIyLjUxMiAxNS4xODAzIDIyLjUxMiAxNS44Nzk5IDIwLjUxM1oiIGZpbGw9IiNEOUI2MDgiLz4NCjwvc3ZnPg0K"},438:function(t,n,e){"use strict";e(400)},439:function(t,n,e){var o=e(38)(!1);o.push([t.i,'main[data-v-04676ae8]{font-family:"Rubik Regular";font-style:normal}main .container[data-v-04676ae8]{width:100%;background:#fff}main .container .history[data-v-04676ae8]{justify-content:space-between;padding:0 32px;margin-bottom:48px}main .container .history[data-v-04676ae8],main .container .history .details[data-v-04676ae8]{display:flex;align-items:center}main .container .history .name[data-v-04676ae8]{font-weight:400;font-size:14px;line-height:24px;margin-left:27px}main .container .history .amount[data-v-04676ae8]{font-weight:400;font-size:12px;line-height:16px;color:#777}',""]),t.exports=o},577:function(t,n,e){"use strict";e.r(n);var o=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"details"},[o("img",{attrs:{src:e(437),alt:""}}),t._v(" "),o("p",{staticClass:"name"},[t._v("\n          Send Local\n        ")])])}],r=e(9),c=(e(40),{name:"Transactions",data:function(){return{title:"Save",transactions:[],name:"",index:[]}},created:function(){this.getTransactions()},methods:{getTransactions:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("https://xyz-logistics-api.herokuapp.com/api/v1/wallet/paystak/transactions");case 3:(e=n.sent)&&(t.transactions=[],t.transactions=e.data.data.transactionHistory),console.log(t.transactions),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}}),l=(e(438),e(12)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("div",{staticClass:"container"},t._l(t.transactions,(function(n,o){return e("div",{key:o,staticClass:"history"},[t._m(0,!0),t._v(" "),e("p",{staticClass:"amount"},[t._v("\n       - "+t._s(n.amount)+"\n      ")])])})),0)])}),o,!1,null,"04676ae8",null);n.default=component.exports}}]);