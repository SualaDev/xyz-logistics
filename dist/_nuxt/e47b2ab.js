(window.webpackJsonp=window.webpackJsonp||[]).push([[79,6,26,32,33,34,35],{346:function(t,e,r){"use strict";r.r(e);var o={name:"Button",props:{name:String},data:function(){return{}}},n=(r(348),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",[t._v(t._s(t.name))])}),[],!1,null,"21ad3dc4",null);e.default=component.exports;installComponents(component,{Button:r(346).default})},347:function(t,e,r){var content=r(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("3a644bda",content,!0,{sourceMap:!1})},348:function(t,e,r){"use strict";r(347)},349:function(t,e,r){var o=r(38)(!1);o.push([t.i,"button[data-v-21ad3dc4]{background:#ffd60a;border-radius:8px;width:364px;height:56px;margin:0 auto;border-style:none;font-weight:400;font-size:18px;line-height:24px;cursor:pointer}",""]),t.exports=o},352:function(t,e,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("0b769138",content,!0,{sourceMap:!1})},355:function(t,e,r){"use strict";r.r(e);var o={name:"emptyContainer",props:{emptyCaption:{type:String,default:"Oops, this place is empty"},styles:{type:Object}}},n=(r(368),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"empty",style:[].concat(t.styles)},[r("div",{staticClass:"img"},[r("font-awesome-icon",{attrs:{icon:"folder-open"}})],1),t._v(" "),r("div",{staticClass:"caption"},[r("h2",[t._v(t._s(t.emptyCaption))])])])}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,r){var content=r(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("6c605c52",content,!0,{sourceMap:!1})},368:function(t,e,r){"use strict";r(352)},369:function(t,e,r){var o=r(38)(!1);o.push([t.i,".empty{display:flex;justify-content:center;align-items:center;flex-direction:column;grid-gap:50px;gap:50px;height:80vh;color:grey}.empty .img svg{width:50px;height:50px}.empty h2{font-size:1.5rem;text-align:center}",""]),t.exports=o},381:function(t,e,r){t.exports=r.p+"img/rider-img.e0c714c.png"},392:function(t,e,r){"use strict";r(364)},393:function(t,e,r){var o=r(38)(!1);o.push([t.i,'.modal-container[data-v-43a7edc4]{justify-content:center;align-items:center;display:flex;flex-direction:column;background-color:#fff;border-radius:8px 8px 0 0;z-index:1}.modal-container .dash[data-v-43a7edc4]{width:20%;height:4px;border-radius:5px;margin:2rem 0;background:#ffd60a}.modal-container .info[data-v-43a7edc4]{width:100%;padding:1rem 2rem}.modal-container .info h1[data-v-43a7edc4]{font-size:16px;font-family:"Rubik Medium";margin-bottom:10px}.modal-container .line[data-v-43a7edc4]{height:1px;background-color:#ccc;width:100%}',""]),t.exports=o},394:function(t,e,r){"use strict";r.r(e);var o={computed:{modalDetails:function(){return this.$store.state.orderDetails}}},n=(r(392),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-container"},[r("div",{staticClass:"dash"}),t._v(" "),r("div",{staticClass:"info"},[r("h1",[t._v("From")]),t._v(" "),r("p",[t._v(t._s(t.modalDetails.pickup_address))])]),t._v(" "),r("div",{staticClass:"line"}),t._v(" "),r("div",{staticClass:"info"},[r("h1",[t._v("To")]),t._v(" "),r("p",[t._v(t._s(t.modalDetails.delivery_address))])]),t._v(" "),r("div",{staticClass:"line"}),t._v(" "),r("div",{staticClass:"info"},[r("h1",[t._v("Reciever’s name")]),t._v(" "),r("p",[t._v(t._s(t.modalDetails.receiver))])]),t._v(" "),r("div",{staticClass:"line"}),t._v(" "),r("div",{staticClass:"info"},[r("h1",[t._v("Number")]),t._v(" "),r("p",[t._v("+"+t._s(t.modalDetails.receiver_phone))])]),t._v(" "),r("div",{staticClass:"line"}),t._v(" "),r("div",{staticClass:"info"},[r("h1",[t._v("Package Type")]),t._v(" "),r("p",[t._v(t._s(t.modalDetails.package_type))])])])}),[],!1,null,"43a7edc4",null);e.default=component.exports},396:function(t,e,r){t.exports=r.p+"img/track-rider.fc88cc3.png"},429:function(t,e,r){var content=r(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("13b46a90",content,!0,{sourceMap:!1})},430:function(t,e,r){var content=r(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("682345a7",content,!0,{sourceMap:!1})},431:function(t,e,r){var content=r(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("19975b04",content,!0,{sourceMap:!1})},489:function(t,e,r){"use strict";r(429)},490:function(t,e,r){var o=r(38)(!1);o.push([t.i,'.track-active-container .back[data-v-0e09e8d4]{padding:2rem}.track-active-container .rider[data-v-0e09e8d4]{flex-direction:column;display:flex;justify-content:center;align-items:center;margin-top:35px;padding:2rem;text-decoration:none}.track-active-container .rider .track-order-img[data-v-0e09e8d4]{width:100%}.track-active-container .rider .rider-chat[data-v-0e09e8d4]{display:flex;justify-content:center;align-items:center;justify-content:space-between;width:70%;height:65px;border-radius:8px;background-color:#fff;padding-right:33px;margin-top:45px}.track-active-container .rider .rider-chat .left[data-v-0e09e8d4]{display:flex;flex-direction:row;grid-gap:22px;gap:22px}.track-active-container .rider .rider-chat .left .name[data-v-0e09e8d4]{font-family:"Rubik Regular";color:#000;z-index:0}.track-active-container .rider .rider-chat .left .tag[data-v-0e09e8d4]{font-size:12px;color:#777;margin-top:10px}.track-active-container .rider .rider-img[data-v-0e09e8d4]{border-radius:5px;margin-right:10px}.track-active-container svg[data-v-0e09e8d4]{color:#d9b608}.track-active-container .journey[data-v-0e09e8d4]{display:flex;flex-direction:column;align-items:flex-start;padding:2rem;grid-gap:2rem;gap:2rem}.track-active-container .journey .stop[data-v-0e09e8d4]{display:flex;flex-direction:row;grid-gap:1rem;gap:1rem}.track-active-container .journey .stop .delivered[data-v-0e09e8d4]{border-radius:30px;border:5px solid #ffd60a;z-index:0}.track-active-container .journey .line[data-v-0e09e8d4]{position:absolute;height:60px;width:3px;background-color:#d9b608;margin-left:6px}.track-active-container .more-info[data-v-0e09e8d4]{background-color:#fff;border-top:1px solid #e9e9e9;padding:2rem;width:100%}.track-active-container .more-info .text[data-v-0e09e8d4]{display:flex;flex-direction:row;justify-content:space-between}.track-active-container .more-info .text .arrival p[data-v-0e09e8d4]{color:#777}.track-active-container .more-info .text .arrival h1[data-v-0e09e8d4]{font-family:"Rubik Medium"}.track-active-container .more-info .text .info[data-v-0e09e8d4]{display:flex;flex-direction:column;grid-gap:10px;gap:10px;text-align:right}.track-active-container .more-info .text .info .title[data-v-0e09e8d4]{font-size:16px;color:#777}.track-active-container .more-info .text .info .num[data-v-0e09e8d4]{font-size:12px}.track-active-container .more-info .text .info .det[data-v-0e09e8d4]{color:#d9b608;font-size:12px;cursor:pointer}.track-active-container .more-info .button[data-v-0e09e8d4]{display:flex;justify-content:center;align-items:center;grid-gap:10px;gap:10px;background-color:#ffd60a;height:56px;width:100%;border-radius:8px;margin:20px 0;transition:all .3s ease-in-out}.track-active-container .more-info .button svg[data-v-0e09e8d4]{color:#000}.track-active-container .more-info .button[data-v-0e09e8d4]:hover{border:1px solid #000;background:#fff;color:#000;cursor:pointer;transform:scale(1.03)}.track-active-container .more-info .button:hover svg[data-v-0e09e8d4]{color:#000;transform:scale(1.03)}.track-active-container .track-modal-container[data-v-0e09e8d4]{position:fixed;left:0;bottom:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4);-webkit-animation-name:slideIn-data-v-0e09e8d4;-webkit-animation-duration:.4s;animation-name:slideIn-data-v-0e09e8d4;animation-duration:.4s}.track-active-container .track-modal-container .x[data-v-0e09e8d4]{position:fixed;right:2rem;bottom:480px;margin-bottom:32px;cursor:pointer}.track-active-container .track-modal-container .x svg[data-v-0e09e8d4]{color:#d9b608;font-size:24px;background-color:#000;border-radius:20px}.track-active-container .track-modal-container .content[data-v-0e09e8d4]{position:fixed;bottom:0;width:100%}@-webkit-keyframes slideIn-data-v-0e09e8d4{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}@keyframes slideIn-data-v-0e09e8d4{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}@-webkit-keyframes fadeIn-data-v-0e09e8d4{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-0e09e8d4{0%{opacity:0}to{opacity:1}}',""]),t.exports=o},491:function(t,e,r){"use strict";r(430)},492:function(t,e,r){var o=r(38)(!1);o.push([t.i,".track-active-container[data-v-329d0b64]{height:100vh}.track-active-container .back[data-v-329d0b64]{padding:2rem}.track-active-container .back a[data-v-329d0b64]{display:flex;flex-direction:row;grid-gap:51px;gap:51px;text-decoration:none;color:#000}.track-active-container .back a svg[data-v-329d0b64]{color:#d9b608}.track-active-container .cancelled[data-v-329d0b64]{display:flex;justify-content:center;align-items:center;margin:239px}.track-active-container .cancelled .text[data-v-329d0b64]{flex-direction:column;display:flex;justify-content:center;align-items:center;grid-gap:32px;gap:32px}.track-active-container .cancelled .text p[data-v-329d0b64]{color:#000;text-align:center}.track-active-container .cancelled .text a[data-v-329d0b64]{display:flex;justify-content:center;align-items:center;text-decoration:none;width:261px;height:56px;color:#000;background:#ffd60a;border-radius:8px;transition:all .3s ease-in-out}.track-active-container .cancelled .text a[data-v-329d0b64]:hover{border:1px solid #000;background:#fff;color:#000;cursor:pointer;transform:scale(1.03)}.track-active-container .cancelled .text a:hover svg[data-v-329d0b64]{color:#000;transform:scale(1.03)}",""]),t.exports=o},493:function(t,e,r){"use strict";r(431)},494:function(t,e,r){var o=r(38)(!1);o.push([t.i,'.track-active-container .back[data-v-18c6e29c]{padding:2rem}.track-active-container .rider[data-v-18c6e29c]{flex-direction:column;display:flex;justify-content:center;align-items:center;margin-top:35px;padding:2rem;text-decoration:none}.track-active-container .rider .track-order-img[data-v-18c6e29c]{width:100%}.track-active-container .rider .rider-chat[data-v-18c6e29c]{display:flex;justify-content:center;align-items:center;justify-content:space-between;width:70%;height:65px;border-radius:8px;background-color:#fff;padding-right:33px;margin-top:45px}.track-active-container .rider .rider-chat .left[data-v-18c6e29c]{display:flex;flex-direction:row;grid-gap:22px;gap:22px}.track-active-container .rider .rider-chat .left .name[data-v-18c6e29c]{font-family:"Rubik Regular";color:#000}.track-active-container .rider .rider-chat .left .tag[data-v-18c6e29c]{font-size:12px;color:#777;margin-top:10px}.track-active-container .rider .rider-img[data-v-18c6e29c]{z-index:0;border-radius:5px;margin-right:10px}.track-active-container svg[data-v-18c6e29c]{color:#d9b608}.track-active-container .journey[data-v-18c6e29c]{display:flex;flex-direction:column;align-items:flex-start;padding:2rem;grid-gap:2rem;gap:2rem}.track-active-container .journey .stop[data-v-18c6e29c]{display:flex;flex-direction:row;grid-gap:1rem;gap:1rem}.track-active-container .journey .stop .delivered[data-v-18c6e29c]{color:#06d6a0;font-size:20px;z-index:0}.track-active-container .journey .line[data-v-18c6e29c]{position:absolute;height:60px;width:3px;background-color:#d9b608;margin-left:6px}.track-active-container .more-info[data-v-18c6e29c]{background-color:#fff;border-top:1px solid #e9e9e9;padding:2rem;width:100%}.track-active-container .more-info .text[data-v-18c6e29c]{display:flex;flex-direction:row;justify-content:space-between}.track-active-container .more-info .text .arrival p[data-v-18c6e29c]{color:#777}.track-active-container .more-info .text .arrival h1[data-v-18c6e29c]{font-family:"Rubik Medium"}.track-active-container .more-info .text .arrival h1 span[data-v-18c6e29c]{font-size:12px;font-family:"Rubik Regular"}.track-active-container .more-info .text .info[data-v-18c6e29c]{display:flex;flex-direction:column;grid-gap:10px;gap:10px;text-align:right}.track-active-container .more-info .text .info .title[data-v-18c6e29c]{font-size:16px;color:#777}.track-active-container .more-info .text .info .num[data-v-18c6e29c]{font-size:12px}.track-active-container .more-info .text .info .det[data-v-18c6e29c]{color:#d9b608;font-size:12px;cursor:pointer}.track-active-container .more-info .help-btns[data-v-18c6e29c]{display:flex;justify-content:center;align-items:center;grid-gap:16px;gap:16px}.track-active-container .more-info .help-btns button[data-v-18c6e29c]{border:1px solid #c50;border-radius:8px;padding:16px 35px;color:red;background:transparent}.track-active-container .more-info .help-btns .loading[data-v-18c6e29c]{border:1px solid grey;color:grey}.track-active-container .more-info .help-btns .button[data-v-18c6e29c]{display:flex;justify-content:center;align-items:center;grid-gap:10px;gap:10px;background-color:#ffd60a;height:56px;width:100%;border-radius:8px;margin:20px 0;transition:all .3s ease-in-out}.track-active-container .more-info .help-btns .button svg[data-v-18c6e29c]{color:#000}.track-active-container .more-info .help-btns .button[data-v-18c6e29c]:hover{border:1px solid #000;background:#fff;cursor:pointer;transform:scale(1.03)}.track-active-container .more-info .help-btns .button:hover svg[data-v-18c6e29c]{transform:scale(1.03)}.track-active-container .track-modal-container[data-v-18c6e29c]{position:fixed;left:0;bottom:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4);-webkit-animation-name:slideIn-data-v-18c6e29c;-webkit-animation-duration:.4s;animation-name:slideIn-data-v-18c6e29c;animation-duration:.4s}.track-active-container .track-modal-container .x[data-v-18c6e29c]{position:fixed;right:2rem;bottom:480px;margin-bottom:32px;cursor:pointer}.track-active-container .track-modal-container .x svg[data-v-18c6e29c]{color:#d9b608;font-size:24px;background-color:#000;border-radius:20px}.track-active-container .track-modal-container .content[data-v-18c6e29c]{position:fixed;bottom:0;width:100%}@-webkit-keyframes slideIn-data-v-18c6e29c{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}@keyframes slideIn-data-v-18c6e29c{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}@-webkit-keyframes fadeIn-data-v-18c6e29c{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-18c6e29c{0%{opacity:0}to{opacity:1}}',""]),t.exports=o},570:function(t,e,r){var content=r(716);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("5cbf7a31",content,!0,{sourceMap:!1})},586:function(t,e,r){"use strict";r.r(e);var o={components:{TheTrackModal:r(394).default},data:function(){return{modalOpen:!1}},methods:{toggleModal:function(){this.modalOpen=!this.modalOpen},goToPrev:function(){this.$router.go(-1)}}},n=(r(489),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"track-active-container"},[o("div",{staticClass:"back"},[o("div",{on:{click:t.goToPrev}},[o("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)]),t._v(" "),o("div",{staticClass:"rider"},[o("img",{staticClass:"track-order-img",attrs:{src:r(396),alt:""}}),t._v(" "),o("nuxt-link",{staticClass:"rider-chat",attrs:{to:"/orders/rider-chat"}},[o("div",{staticClass:"left"},[o("img",{staticClass:"rider-img",attrs:{src:r(381),alt:""}}),t._v(" "),o("div",[o("p",{staticClass:"name"},[t._v("Yusuf Aina")]),t._v(" "),o("p",{staticClass:"tag"},[t._v("Your Rider")])])]),t._v(" "),o("div",{staticClass:"right"},[o("font-awesome-icon",{attrs:{icon:"message"}})],1)])],1),t._v(" "),o("div",{staticClass:"journey"},[o("div",{staticClass:"stop"},[o("div",{staticClass:"line"}),t._v(" "),o("font-awesome-icon",{attrs:{icon:"circle"}}),t._v(" "),o("p",[t._v("Rider Assigned")])],1),t._v(" "),o("div",{staticClass:"stop"},[o("div",{staticClass:"line"}),t._v(" "),o("font-awesome-icon",{attrs:{icon:"circle"}}),t._v(" "),o("p",[t._v("Rider is on the way")])],1),t._v(" "),o("div",{staticClass:"stop"},[o("div",{staticClass:"line"}),t._v(" "),o("font-awesome-icon",{attrs:{icon:"circle"}}),t._v(" "),o("p",[t._v("Rider is 30 mins away")])],1),t._v(" "),o("div",{staticClass:"stop"},[o("div",{staticClass:"line"}),t._v(" "),o("font-awesome-icon",{attrs:{icon:"circle"}}),t._v(" "),o("p",[t._v("Rider is 10 mins away")])],1),t._v(" "),o("div",{staticClass:"stop"},[o("font-awesome-icon",{staticClass:"delivered",attrs:{icon:"circle"}}),t._v(" "),o("p",[t._v("Rider is at your door")])],1)]),t._v(" "),o("div",{staticClass:"more-info"},[o("div",{staticClass:"text"},[t._m(0),t._v(" "),o("div",{staticClass:"info"},[o("p",{staticClass:"title"},[t._v("Order Number")]),t._v(" "),o("p",{staticClass:"num"},[t._v("{Nywj-879}")]),t._v(" "),o("p",{staticClass:"det",on:{click:t.toggleModal}},[t._v("\n          More Details "),o("font-awesome-icon",{attrs:{icon:"angle-down"}})],1)])]),t._v(" "),o("div",{staticClass:"button"},[o("font-awesome-icon",{attrs:{icon:"phone"}}),t._v(" Call")],1)]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.modalOpen,expression:"modalOpen"}],staticClass:"track-modal-container",on:{click:t.toggleModal}},[o("div",{staticClass:"x",on:{click:t.toggleModal}},[o("font-awesome-icon",{attrs:{icon:"circle-xmark"},on:{click:t.toggleModal}})],1),t._v(" "),o("div",{staticClass:"content"},[o("TheTrackModal")],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arrival"},[r("p",[t._v("Estimated Arrival")]),t._v(" "),r("h1",[t._v("2 days")])])}],!1,null,"0e09e8d4",null);e.default=component.exports},587:function(t,e,r){"use strict";r.r(e);var o={},n=(r(491),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"track-active-container"},[r("div",{staticClass:"back"},[r("nuxt-link",{attrs:{to:"/orders"}},[r("font-awesome-icon",{attrs:{icon:"arrow-left"}}),t._v(" "),r("p",[t._v("Your Shipment was cancelled")])],1)],1),t._v(" "),r("div",{staticClass:"cancelled"},[r("div",{staticClass:"text"},[t._m(0),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[t._v(" Send or Receive ")])],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n        Your shipment was cancelled "),r("br"),t._v("\n        ship an item to track progress\n      ")])}],!1,null,"329d0b64",null);e.default=component.exports},588:function(t,e,r){"use strict";r.r(e);var o=r(9),n=(r(40),r(394)),c=r(355),d={components:{TheTrackModal:n.default,TheEmptyContent:c.default},data:function(){return{modalOpen:!1}},methods:{toggleModal:function(){this.modalOpen=!this.modalOpen},goToPrev:function(){this.$router.go(-1)},cancelOrder:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.patch("/api/v1/request/".concat(t.orderDetailsHandler._id,"/cancel"));case 3:r=e.sent,t.$emit("track-cancelled"),t.$router.go(-1),t.$toasted.show(r.data.message,{position:"top-center",duration:2500,type:"success"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t.$toasted.show(e.t0,{position:"top-center",duration:3500,type:"danger"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},computed:{orderDetailsHandler:function(){return this.$store.state.orderDetails},loading:function(){return this.$store.state.loading},orderCancelled:function(){return"cancelled"===this.orderDetailsHandler.status}}},l=(r(493),r(12)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"track-active-container"},[o("div",{staticClass:"back"},[o("div",{on:{click:t.goToPrev}},[o("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1)]),t._v(" "),o("nuxt-link",{staticClass:"rider",attrs:{to:"/orders/rider-chat"}},[o("img",{staticClass:"track-order-img",attrs:{src:r(396),alt:""}}),t._v(" "),o("div",{staticClass:"rider-chat"},[o("div",{staticClass:"left"},[o("img",{staticClass:"rider-img",attrs:{src:r(381),alt:""}}),t._v(" "),o("div",[o("p",{staticClass:"name"},[t._v("Yusuf Aina")]),t._v(" "),o("p",{staticClass:"tag"},[t._v("Your Rider")])])]),t._v(" "),o("div",{staticClass:"right"},[o("font-awesome-icon",{attrs:{icon:"message"}})],1)])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.orderCancelled,expression:"!orderCancelled"}],staticClass:"journey"},[o("div",{staticClass:"stop"},[o("div",{staticClass:"line"}),t._v(" "),o("font-awesome-icon",{attrs:{icon:"circle"}}),t._v(" "),o("p",[t._v("Rider Assigned")])],1),t._v(" "),o("div",{staticClass:"stop"},[o("div",{staticClass:"line"}),t._v(" "),o("font-awesome-icon",{attrs:{icon:"circle"}}),t._v(" "),o("p",[t._v("Rider is on the way")])],1),t._v(" "),o("div",{staticClass:"stop"},[o("div",{staticClass:"line"}),t._v(" "),o("font-awesome-icon",{attrs:{icon:"circle"}}),t._v(" "),o("p",[t._v("Rider is 30 mins away")])],1),t._v(" "),o("div",{staticClass:"stop"},[o("div",{staticClass:"line"}),t._v(" "),o("font-awesome-icon",{attrs:{icon:"circle"}}),t._v(" "),o("p",[t._v("Rider is 10 mins away")])],1),t._v(" "),o("div",{staticClass:"stop"},[o("font-awesome-icon",{staticClass:"delivered",attrs:{icon:"circle-check"}}),t._v(" "),o("p",[t._v("Rider is at your door")])],1)]),t._v(" "),o("div",{staticClass:"cancelled-order"},[o("the-empty-content",{directives:[{name:"show",rawName:"v-show",value:t.orderCancelled,expression:"orderCancelled"}],attrs:{emptyCaption:"This order was cancelled",styles:{height:"22vh","justify-content":"flex-start"}}})],1),t._v(" "),o("div",{staticClass:"more-info"},[o("div",{staticClass:"text"},[t._m(0),t._v(" "),o("div",{staticClass:"info"},[o("p",{staticClass:"title"},[t._v("Order Number")]),t._v(" "),o("p",{staticClass:"num"},[t._v(t._s(t.orderDetailsHandler.package_id))]),t._v(" "),o("p",{staticClass:"det",on:{click:t.toggleModal}},[t._v("\n          More Details "),o("font-awesome-icon",{attrs:{icon:"angle-down"}})],1)])]),t._v(" "),o("div",{staticClass:"help-btns"},[o("div",{staticClass:"button"},[o("font-awesome-icon",{attrs:{icon:"phone"}}),t._v(" Call\n      ")],1),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:!t.orderCancelled,expression:"!orderCancelled"}],staticClass:"cancel-btn",class:{loading:t.loading},on:{click:t.cancelOrder}},[t._v("Cancel")])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.modalOpen,expression:"modalOpen"}],staticClass:"track-modal-container",on:{click:t.toggleModal}},[o("div",{staticClass:"x",on:{click:t.toggleModal}},[o("font-awesome-icon",{attrs:{icon:"circle-xmark"},on:{click:t.toggleModal}})],1),t._v(" "),o("div",{staticClass:"content"},[o("TheTrackModal")],1)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arrival"},[r("p",[t._v("Arrived")]),t._v(" "),r("h1",[t._v("2 days "),r("span",[t._v("Ago")])])])}],!1,null,"18c6e29c",null);e.default=component.exports;installComponents(component,{TheEmptyContent:r(355).default,Button:r(346).default})},715:function(t,e,r){"use strict";r(570)},716:function(t,e,r){var o=r(38)(!1);o.push([t.i,'.track-order-container[data-v-64a24904]{font-family:"Rubik Regular";background:#fafafa}',""]),t.exports=o},780:function(t,e,r){"use strict";r.r(e);var o=r(9),n=(r(40),r(586)),c=r(587),d=r(588),l={components:{TheTrackActive:n.default,TheTrackCancelled:c.default,TheTrackDelivered:d.default},data:function(){return{orderId:this.$route.params.index,orderDetailsReq:[],trackCancelled:!1}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/api/v1/request/".concat(t.orderId));case 3:r=e.sent,t.orderDetailsReq=r.data.data,t.$store.commit("setOrderDetails",r.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.$toasted.show("there was an error fetching the order details",{position:"top-center",type:"danger",duration:3500});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{cancelTrack:function(){this.trackCancelled=!0,console.log("track cancelled")}}},v=(r(715),r(12)),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"track-order-container"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.trackCancelled,expression:"!trackCancelled"}],staticClass:"delivered"},[r("the-track-delivered")],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.trackCancelled,expression:"trackCancelled"}],staticClass:"cancelled"},[r("the-track-cancelled",{on:{"track-cancelled":t.cancelTrack}})],1)])}),[],!1,null,"64a24904",null);e.default=component.exports}}]);