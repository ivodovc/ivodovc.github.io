(window["webpackJsonphangouter-on-web"]=window["webpackJsonphangouter-on-web"]||[]).push([[0],{226:function(e,t,n){e.exports=n.p+"static/media/logores.9c61d68a.png"},264:function(e,t,n){e.exports=n(419)},269:function(e,t,n){},419:function(e,t,n){"use strict";n.r(t);var a,i=n(0),r=n.n(i),o=n(53),c=n.n(o),s=(n(269),n(6)),l=n(5),u=n(8),h=n(7),m=n(9),d=n(2),p=n(38),f=n(44),g=n(4),y=n(73),b=n(74),v=n(152),E=n(32),k=n(48),w=n(174),j=n(195),C=[{id:"8",title:"Dobr\xfd festival",backgroundImage:"https://s3.eu-central-1.amazonaws.com/festivall-bucket/festivals/hero_images/000/002/851/large/36471254_10156081645529064_4092331361744977920_n.jpg?1536171638",description:"This is a brief description of the event",thumbnail:"https://i.pinimg.com/originals/31/ce/7c/31ce7cebc126af789446837e201ddb87.jpg",category:"music",date:"Friday, Mar 29",time:"18:00",place:"Pre\u0161ov"},{id:"9",title:"UNIPO Fest",backgroundImage:"https://www.folklorfest.sk/obrazky-podujatia/9028-1.jpg",description:"This is a brief description of the event",thumbnail:"https://i.pinimg.com/originals/31/ce/7c/31ce7cebc126af789446837e201ddb87.jpg",category:"music",date:"Friday, Mar 29",time:"18:00",place:"Pre\u0161ov"},{id:"10",title:"UNIPO Fest 2",backgroundImage:"https://www.folklorfest.sk/obrazky-podujatia/9028-1.jpg",description:"This is a brief description of the event",thumbnail:"https://i.pinimg.com/originals/31/ce/7c/31ce7cebc126af789446837e201ddb87.jpg",category:"music",date:"Friday, Mar 29",time:"18:00",place:"Pre\u0161ov"},{id:"11",title:"UNIPO Fest 3",backgroundImage:"https://www.folklorfest.sk/obrazky-podujatia/9028-1.jpg",description:"This is a brief description of the event",thumbnail:"https://i.pinimg.com/originals/31/ce/7c/31ce7cebc126af789446837e201ddb87.jpg",category:"music",date:"Friday, Mar 29",time:"18:00",place:"Pre\u0161ov"}],x=[{id:"1",title:"Nirvana",description:"This is a brief description of the event",thumbnail:"https://i.pinimg.com/originals/31/ce/7c/31ce7cebc126af789446837e201ddb87.jpg",category:"music",date:"Friday, Mar 29",time:"18:00",place:"Pre\u0161ov"},{id:"2",title:"Red Hot Chilli Peppers",description:"This is a brief description of the event",category:"music",thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/RHCP_logo.svg/1024px-RHCP_logo.svg.png",date:"Friday, Mar 29",time:"18:00",place:"Pre\u0161ov"},{id:"3",title:"Nirvana",description:"This is a brief description of the event",thumbnail:"https://i.pinimg.com/originals/31/ce/7c/31ce7cebc126af789446837e201ddb87.jpg",category:"music",date:"Friday, Mar 29",time:"18:00",place:"Pre\u0161ov"},{id:"4",title:"King Shaolin",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet augue ultricies, tempor lectus non, accumsan mauris. Sed porta, neque nec imperdiet tempus, lectus augue consectetur massa, ac auctor orci lectus eget enim. Nullam eu congue turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed euismod.",thumbnail:"http://kingshaolin.com/images/kingshaolin_logo.png",category:"music",date:"Friday, Mar 29",time:"18:00",place:"Pre\u0161ov"},{id:"5",title:"Wave Jam Session",description:"Wave has decided to support local music scene. Everybody is welcome to participate.Just let your imagination sail free on waters of music. I am desperate as I don't know what elseTo write, but I need long enough text to implement this app, this text should be reasonably sized.",thumbnail:"https://cdn.dribbble.com/users/31725/screenshots/2415303/this_is_my_jam_logo.jpg",category:"music",date:"Friday, Mar 29",time:"18:00",place:"Pre\u0161ov"}],O=n(37),F=n(33),D=d.a.create({maincontainer:{flexDirection:"row",backgroundColor:"#FFF",height:130,paddingLeft:10,paddingTop:10,paddingBottom:10,marginRight:10,marginLeft:10,marginBottom:10,borderRadius:13,shadowOffset:{width:0,height:5},shadowColor:"#CCC",shadowOpacity:.5,shadowRadius:15,elevation:22},itemcontainer:{flex:5,flexDirection:"row",justifyContent:"flex-end"},thumbnail:{flex:1.1,height:void 0,width:void 0,justifyContent:"center",alignItems:"center",borderRadius:12},textcontainer:{flex:4,marginLeft:15,justifyContent:"space-between"},title:{fontSize:20},place:{marginTop:2.5},date:{marginTop:2.5},time:{marginTop:2.5},icon:{width:23,height:23,tintColor:"#777"},texticon:{height:14,width:20,tintColor:"#777",resizeMode:"contain"},category:{marginRight:5,paddingRight:15},placedatetime:{justifyContent:"flex-end"}}),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={favourite:!1},n.toggleFavourite=n.toggleFavourite.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleFavourite",value:function(){this.setState({favourite:!this.state.favourite});var e={_id:this.props.item._id,title:this.props.item.title,description:this.props.item.description,thumbnail:this.props.item.thumbnail,category:this.props.item.category,date:this.props.item.date,time:this.props.item.time,place:this.props.item.place};JSON.stringify(e);this.state.favourite}},{key:"render",value:function(){return r.a.createElement(g.a,{style:[D.maincontainer,{backgroundColor:this.props.active?"#FFF":"#AAA"}]},r.a.createElement(g.a,{style:D.itemcontainer},r.a.createElement(y.a,{source:{uri:this.props.item.thumbnail},style:D.thumbnail,resizeMode:"contain"}),r.a.createElement(g.a,{style:D.textcontainer},r.a.createElement(k.a,{style:D.title},t.renderCategoryIcon(this.props.item.category),""+this.props.item.title),r.a.createElement(g.a,{style:D.placedatetime},r.a.createElement(k.a,{style:D.place},r.a.createElement(F.a,{name:"map-marker",size:18}),r.a.createElement(k.a,null,"  ",this.props.item.place," ")),r.a.createElement(k.a,{style:D.date},r.a.createElement(F.a,{name:"calendar-o",size:18}),r.a.createElement(k.a,null,"  ",t.getDateString(this.props.item.starttime,this.props.item.endtime)," ")),r.a.createElement(k.a,{style:D.time},r.a.createElement(F.a,{name:"clock-o",size:18}),r.a.createElement(k.a,null,"  ",t.getTimeString(this.props.item.starttime,this.props.item.endtime)))))),r.a.createElement(g.a,{style:{flex:1,justifyContent:"center",alignItems:"stretch"}},r.a.createElement(b.a,{style:{flex:1,justifyContent:"center",alignItems:"stretch"},onPress:this.toggleFavourite.bind(this)},r.a.createElement(O.a,{name:"ios-heart",type:"ionicon",size:37,color:this.state.favourite?"#F00":"#AAA"}))))}}],[{key:"getDateString",value:function(e,n){var a=["Ne","Pon","Ut","Str","\u0160t","Pia","So"][(e=new Date(e)).getDay()],i=["Jan","Feb","Mar","Apr","M\xe1j","J\xfan","J\xfal","Aug","Sep","Okt","Nov","Dec"][e.getMonth()];return a+", "+e.getDate().toString()+". "+i+"  "+t.getTimeString(e,n)}},{key:"getTimeString",value:function(e,t){var n=(e=new Date(e)).getMinutes();return e.getHours()+":"+(n<10?"0":"")+n}},{key:"renderCategoryIcon",value:function(e){var t=new Map([["music","headphones"],["education","book"],["art","paint-brush"],["theater","book"],["movie","film"]]);return r.a.createElement(F.a,{name:t.get(e),style:D.category,size:20})}}]),t}(i.Component),z=d.a.create({maincontainer:{flexDirection:"row",backgroundColor:"#FFF",height:170,marginTop:15,marginBottom:15,paddingVertical:15,shadowOffset:{width:1,height:1},shadowColor:"#CCC",shadowOpacity:1,shadowRadius:1},itemcontainer:{flex:5,flexDirection:"row",justifyContent:"flex-end"},thumbnail:{flex:2,borderWidth:1,aspectRatio:1},textcontainer:{flex:4,marginLeft:10,justifyContent:"center"},title:{fontSize:23,marginBottom:5,fontWeight:"bold",color:"rgba(0,0,0,0.8)"},place:{fontSize:15,marginTop:2.5,color:"rgba(0,0,0,0.8)"},date:{fontSize:15,marginTop:2.5,color:"rgba(0,0,0,0.8)"},time:{fontSize:15,marginTop:2.5,color:"rgba(0,0,0,0.8)"},icon:{width:23,height:23,tintColor:"#555"},texticon:{height:14,width:20,tintColor:"#555",resizeMode:"contain"},category:{marginRight:15,paddingRight:15},placedatetime:{}}),I=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.item;return r.a.createElement(g.a,{style:z.maincontainer},r.a.createElement(y.a,{source:{uri:this.props.item.thumbnail},style:z.thumbnail,resizeMode:"contain"}),r.a.createElement(g.a,{style:z.textcontainer},r.a.createElement(k.a,{style:z.title},S.renderCategoryIcon(this.props.item.category),this.props.item.title),r.a.createElement(g.a,{style:z.placedatetime},r.a.createElement(k.a,{style:z.place},r.a.createElement(F.a,{name:"map-marker",size:18}),r.a.createElement(k.a,null,"  ",this.props.item.place," ")),r.a.createElement(k.a,{style:z.date},r.a.createElement(F.a,{name:"calendar-o",size:18}),r.a.createElement(k.a,null,"  ",S.getDateString(this.props.item.starttime,this.props.item.endtime)," ")),r.a.createElement(k.a,{style:z.time},r.a.createElement(F.a,{name:"clock-o",size:16}),r.a.createElement(k.a,null,"  ",S.getTimeString(this.props.item.starttime,this.props.item.endtime))))))}}]),t}(i.Component),R=n(170),P=d.a.create({maincontainer:{marginLeft:20,marginVertical:15,flex:1,justifyContent:"center",alignItems:"stretch"},eventtitle:{fontSize:25,fontWeight:"bold",color:"#777",backgroundColor:"#DDDD"},flatliststyle:{flex:1},featimagestyle:{justifyContent:"flex-end",flex:1,width:340,height:170,marginRight:15}}),T=(i.Component,n(14)),_=d.a.create({button:(a={flex:1,alignItems:"center",justifyContent:"center"},Object(T.a)(a,"alignItems","center"),Object(T.a)(a,"borderRadius",10),Object(T.a)(a,"backgroundColor","#FAA"),a),buttons:{margin:5,height:30,borderRadius:10,flexDirection:"row",shadowOffset:{width:0,height:5},shadowColor:"#CCC",shadowOpacity:.5,shadowRadius:15,elevation:22},textstyle:{fontSize:14,textAlign:"center",color:"#777"}}),W=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={option:1},n.activec="#FF9A46",n.inactivec="#FFF",n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"changeOption",value:function(e){this.setState({option:e}),this.props.onChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{style:_.buttons},r.a.createElement(b.a,{style:[_.button,{backgroundColor:0===this.state.option?this.activec:this.inactivec}],onPress:function(){e.changeOption(0)}},r.a.createElement(k.a,{style:_.textstyle}," Dnes ")),r.a.createElement(b.a,{style:[_.button,{backgroundColor:1===this.state.option?this.activec:this.inactivec}],onPress:function(){e.changeOption(1)}},r.a.createElement(k.a,{style:_.textstyle}," Tento t\xfd\u017ede\u0148 ")),r.a.createElement(b.a,{style:[_.button,{backgroundColor:2===this.state.option?this.activec:this.inactivec}],onPress:function(){e.changeOption(2)}},r.a.createElement(k.a,{style:_.textstyle}," \u010eal\u0161ie ")),r.a.createElement(b.a,{style:[_.button,{backgroundColor:3===this.state.option?this.activec:this.inactivec}],onPress:function(){e.changeOption(3)}},r.a.createElement(k.a,{style:_.textstyle}," Nestihol si ")))}}]),t}(i.Component),L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={events:null,option:1,eventstorender:[],dividedevents:[],isFetching:!0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"fetchData",value:function(){var e=this;fetch("https://hangouter-backend.herokuapp.com/api/v1/events").then((function(e){return e.json()})).then((function(t){e.setState({events:e.sortEvents(t)}),e.setState({dividedevents:e.processEvents(e.state.events),isFetching:!1})})).catch((function(e){return console.log(e)}))}},{key:"processEvents",value:function(e){if(console.log("PROCESSING"),!e)return[];var n={today:[],thisWeek:[],thisWeekend:[],future:[],past:[]};return e.forEach((function(e,a){var i=new Date(e.starttime),r=2e3!==new Date(e.endtime).getFullYear()?new Date(e.endtime):null;if(r){(o=new Date).setHours(0),o.setMinutes(0),o.setSeconds(0),(c=new Date(o)).setDate(c.getDate()+1),t.intervalsOverlapping(i,r,o,c)&&n.today.push(e)}else{var o,c;if((o=new Date).setHours(0),o.setMinutes(0),o.setSeconds(0),(c=new Date(o)).setDate(c.getDate()+1),i<o)return void n.past.push(e);t.inInterval(o,c,i)&&n.today.push(e);var s=o.getDay(),l=new Date(o);l.setDate(o.getDate()-s+(0==s?-6:1));var u=new Date(l);u.setDate(u.getDate()+7),t.inInterval(l,u,i)&&n.thisWeek.push(e);var h=new Date(l);h.setDate(h.getDate()+5),t.inInterval(h,u,i)&&n.thisWeekend.push(e),i>u&&n.future.push(e)}})),n}},{key:"sortEvents",value:function(e){return e.sort((function(e,t){var n=new Date(e.starttime),a=new Date(t.starttime);return n>a?-1:n==a?0:1}))}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"onRefresh",value:function(){this.setState({isFetching:!0},(function(){this.fetchData()}))}},{key:"_flatListRenderer",value:function(e){var n=e.item,a=Object(E.f)((function(e){var a=e.history;return r.a.createElement(b.a,{onPress:function(){a.push("/details/"+n._id,{item:n})}},r.a.createElement(S,{active:t.notStarted(n),item:n}))}));return r.a.createElement(a,null)}},{key:"_sectionHeaderRenderer",value:function(e){var t=e.section.title;return r.a.createElement(k.a,{style:A.sectionheader},t)}},{key:"_optionChanged",value:function(e){console.log(e),console.log(this.state.dividedevents);var t=null;switch(e){case 0:t=this.state.dividedevents.today;break;case 1:t=this.state.dividedevents.thisWeek;break;case 2:t=this.state.dividedevents.future;break;case 3:t=this.state.dividedevents.past}this.setState({eventstorender:t,option:e})}},{key:"render",value:function(){if(this.state.isFetching)return r.a.createElement(g.a,{style:A.container},r.a.createElement(k.a,{style:A.loadingtext}," Na\u010d\xedtavam va\u0161e ob\u013e\xfabene udalosti "),r.a.createElement(w.a,{size:"large",color:"#f16522"}));if(0!=this.state.eventstorender.length)return r.a.createElement(g.a,{style:A.container},r.a.createElement(W,{onChange:this._optionChanged.bind(this)}),r.a.createElement(j.a,{style:A.flatliststyle,data:this.state.eventstorender,renderItem:this._flatListRenderer.bind(this),keyExtractor:function(e,t){return e._id}}));var e="";switch(this.state.option){case 0:e="Bohu\u017eia\u013e, dnes sa v okol\xed Pre\u0161ova nekonaj\xfa \u017eiadne podujatia o ktor\xfdch vieme.";break;case 1:e="Bohu\u017eia\u013e, tento t\xfd\u017ede\u0148 sa v okol\xed Pre\u0161ova nekonaj\xfa \u017eiadne podujatia o ktor\xfdch vieme.";break;case 2:e="Bohu\u017eia\u013e, nevieme o \u017eiadn\xfdch \u010fal\u0161\xedch udalostiach v bud\xfacnosti.";break;case 3:e="Minul\xe9 eventy sa u\u017e nedaj\xfa u\u017ei\u0165 tak naplno ako tie bud\xface."}return r.a.createElement(g.a,{style:A.container},r.a.createElement(W,{onChange:this._optionChanged.bind(this)}),r.a.createElement(k.a,{style:A.zial},e))}}],[{key:"intervalsOverlapping",value:function(e,t,n,a){return e<a&&t>n}},{key:"inInterval",value:function(e,t,n){return e<n&&n<t}},{key:"notStarted",value:function(e){return new Date<new Date(e.starttime)}}]),t}(i.Component),A=d.a.create({container:{flex:1,justifyContent:"center",alignItems:"stretch",backgroundColor:"#FFF"},zial:{flex:1,fontSize:15,marginTop:10,color:"#777",textAlign:"center"},featured:{height:200},title:{color:"#000",fontSize:30},flatliststyle:{flex:5,marginTop:10},loadingtext:{color:"#777",fontSize:15,textAlign:"center",paddingBottom:20}}),M=n(69),B=[{id:"popular",title:"Popul\xe1rne"},{id:"today",title:"Dnes"},{id:"art",title:"Umenie"},{id:"theatre",title:"Divadlo"},{id:"music",title:"Hudba"},{id:"party",title:"P\xe1rty"},{id:"movie",title:"Kino"},{id:"education",title:"Vzdelanie"}],N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).updateSearch=function(e){n.setState({search:e}),n.forceUpdate()},n.state={search:"",filterList:B},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"_onElementPress",value:function(e,t){"popular"===e.id||"today"===e.id?t.push("/searchresults/?condition="+e.id):t.push("/searchresults/?category="+e.id)}},{key:"_onSearchRequest",value:function(e,t){console.log(e),t.push("/searchresults/?searchterm="+e)}},{key:"_flatListRenderer",value:function(e){var t=this,n=e.item,a=Object(E.f)((function(e){var a=e.history;return r.a.createElement(g.a,{style:H.listelement},r.a.createElement(b.a,{style:H.titleblock,onPress:function(){t._onElementPress(n,a)}},r.a.createElement(k.a,{style:H.title}," ",n.title," ")),r.a.createElement(b.a,{style:H.heartblock},r.a.createElement(M.a,{name:"ios-heart",size:37,color:t.state.favourite?"#F00":"#AAA"})))}));return r.a.createElement(a,null)}},{key:"render",value:function(){var e=this,t=this.state.search;return r.a.createElement(g.a,{style:H.container},r.a.createElement(O.b,{inputStyle:{backgroundColor:"white",fontSize:17},containerStyle:{backgroundColor:"white",padding:10,borderWidth:1.1,borderRadius:10,margin:5,borderColor:"#333"},searchIcon:{name:"md-search",type:"ionicon",size:30},clearIcon:{name:"md-close",type:"ionicon",size:30},cancelIcon:{name:"md-arrow-back",type:"ionicon",size:30},placeholderTextColor:"#FF9A46",placeholder:"",platform:"android",onChangeText:this.updateSearch,value:t,onBlur:function(){e._onSearchRequest(e.state.search,e.props.history)}}),r.a.createElement(j.a,{style:H.flatliststyle,data:this.state.filterList,renderItem:this._flatListRenderer.bind(this),keyExtractor:function(e,t){return e.id}}))}}]),t}(i.Component),H=d.a.create({container:{flex:1,margin:10},title:{fontSize:20},listelement:{flex:1,flexDirection:"row",margin:5,borderColor:"#FFF",borderWidth:5,borderRadius:10,justifyContent:"space-between",alignItems:"center",shadowOffset:{width:0,height:5},shadowColor:"#CCC",shadowOpacity:.5,shadowRadius:15,elevation:22},titleblock:{flex:1,paddingHorizontal:10,paddingVertical:10},heartblock:{paddingHorizontal:20,paddingVertical:10}}),q=n(150),U=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{style:J.maincontainer},r.a.createElement(g.a,{style:J.itemcontainer},r.a.createElement(y.a,{source:{uri:this.props.thumbnail},style:J.thumbnail,resizeMode:"contain"}),r.a.createElement(g.a,{style:J.textcontainer},r.a.createElement(g.a,{style:J.textWithIcon},r.a.createElement(k.a,{style:J.title},r.a.createElement(y.a,{source:{uri:"https://cdn0.iconfinder.com/data/icons/party-human-1/66/33-512.png"},style:J.icon}),"| ",this.props.title)),r.a.createElement(g.a,{style:J.textWithIcon},r.a.createElement(k.a,{style:J.place},r.a.createElement(q.a,{name:"map-marker-alt",size:18}),r.a.createElement(k.a,null,"  ",this.props.place))),r.a.createElement(g.a,{style:J.textWithIcon},r.a.createElement(k.a,{style:J.date},r.a.createElement(q.a,{name:"calendar-alt",size:18}),r.a.createElement(k.a,null,"  ",this.props.date))),r.a.createElement(k.a,{style:J.time},r.a.createElement(q.a,{name:"clock",size:18}),r.a.createElement(k.a,null,"  ",this.props.time)))))}}]),t}(r.a.Component),J=d.a.create({maincontainer:{flexDirection:"row",backgroundColor:"#FFF",height:120,paddingLeft:10,paddingTop:10,paddingBottom:10,marginRight:10,marginLeft:10,marginBottom:10,borderRadius:13,shadowOffset:{width:1,height:1},shadowColor:"#CCC",shadowOpacity:1,shadowRadius:1},itemcontainer:{flex:5,flexDirection:"row"},thumbnail:{flex:1.1,height:void 0,width:void 0,justifyContent:"center",alignItems:"center",borderRadius:12},textcontainer:{flex:4,marginLeft:10,justifyContent:"flex-start"},title:{fontSize:17,fontWeight:"bold",color:"#777"},place:{marginTop:2.5},date:{marginTop:2.5},time:{marginTop:2.5},icon:{width:23,height:23,tintColor:"#777"},texticon:{height:14,width:20,tintColor:"#777",resizeMode:"contain"}}),V=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e)))._renderItem=function(e){var t=e.item;return r.a.createElement(U,{id:t.id,title:t.title,description:t.description,thumbnail:t.thumbnail,category:t.category,date:t.date,time:t.time,place:t.place})},n._keyExtractor=function(e,t){return t.toString()},n.state={isLoading:!0,data:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getData",value:function(){return x}},{key:"list",value:function(){return r.a.createElement(g.a,{style:{flex:1,backgroundColor:"#777"}},r.a.createElement(j.a,{style:{marginTop:20,width:500},data:this.state.data,keyExtractor:this._keyExtractor,renderItem:this._renderItem}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){f.a.get("window").width;return r.a.createElement(g.a,{style:G.container},r.a.createElement(g.a,{style:{justifyContent:"center",alignItems:"center"}},r.a.createElement(k.a,{style:G.title},"Events you're looking forward to")),this.list())}},{key:"componentWillUnmount",value:function(){}}]),t}(i.Component),G=d.a.create({container:{flex:1,alignItems:"stretch"},title:{fontWeight:"bold",color:"#000",fontSize:22,marginBottom:20},sectionHeader:{fontWeight:"bold",fontSize:20,backgroundColor:"#DDD"}}),K=n(263),Q=n.n(K),Y=function(e){function t(e){var n;return Object(s.a)(this,t),n=Object(u.a)(this,Object(h.a)(t).call(this,e)),console.log(n.props),n.query=Q.a.parse(n.props.location.search),n.state={events:null,title:"Search Results:",isFetching:!0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"conditionFetch",value:function(){}},{key:"categoryFetch",value:function(){var e=this;console.log("FETCHING"),fetch("https://hangouter-backend.herokuapp.com/api/v1/events").then((function(e){return e.json()})).then((function(t){var n=t.filter((function(t){return t.category===e.query.category}));e.setState({events:n}),e.setState({isFetching:!1})})).catch((function(e){return console.log(e)}))}},{key:"searchFetch",value:function(e){var t=this;console.log("SEARCHING"),fetch('https://hangouter-backend.herokuapp.com/api/v1/search?s="'+e+'"').then((function(e){return e.json()})).then((function(e){t.setState({events:e}),t.setState({isFetching:!1})})).catch((function(e){return console.log(e)}))}},{key:"fetchData",value:function(){console.log(this.query),"category"in this.query?(this.setState({title:"Events from "+this.query.category+" category."}),this.categoryFetch()):"condition"in this.query?this.setState({title:"Dnes a Popularne som e\u0161te nedokon\u010dil"}):"searchterm"in this.query&&(this.setState({title:'V\xfdsledky h\u013eadania pre "'+this.query.searchterm+'":'}),this.searchFetch(this.query.searchterm))}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"onRefresh",value:function(){this.setState({isFetching:!0},(function(){this.fetchData()}))}},{key:"_flatListRenderer",value:function(e){var t=e.item,n=Object(E.f)((function(e){var n=e.history;return r.a.createElement(b.a,{onPress:function(){n.push("/details/"+t._id,{item:t})}},r.a.createElement(S,{active:!0,item:t}))}));return r.a.createElement(n,null)}},{key:"render",value:function(){return this.state.isFetching?r.a.createElement(g.a,{style:$.container},r.a.createElement(k.a,{style:$.loadingtext}," Na\u010d\xedtavam va\u0161e ob\u013e\xfabene udalosti "),r.a.createElement(w.a,{size:"large",color:"#f16522"})):r.a.createElement(g.a,{style:$.container},r.a.createElement(k.a,{style:$.title}," ",this.state.title," "),r.a.createElement(j.a,{style:$.flatliststyle,data:this.state.events,renderItem:this._flatListRenderer.bind(this),keyExtractor:function(e,t){return e._id}}))}}]),t}(i.Component),$=d.a.create({container:{flex:1,justifyContent:"center",alignItems:"stretch",backgroundColor:"#FFF"},featured:{height:200},title:{color:"#777",fontSize:20,textAlign:"center",marginVertical:15},flatliststyle:{flex:5},loadingtext:{color:"#777",fontSize:15,textAlign:"center",paddingBottom:20}}),X=n(54),Z=d.a.create({buttons:{flexDirection:"row",justifyContent:"space-around",borderTopWidth:1,borderBottomWidth:1,borderColor:"#777"}}),ee=(i.Component,d.a.create({container:{flex:1,backgroundColor:"#000"}})),te=(i.Component,d.a.create({container:{marginTop:5,flex:0,borderRadius:10,borderWidth:1,borderColor:"#000",flexDirection:"row",alignItems:"center",alignSelf:"center"},text:{marginLeft:20,width:150,fontSize:18,fontWeight:"bold",color:"#777"},icon:{margin:2,width:40,height:40,tintColor:"#777"}})),ne=(i.Component,n(194)),ae=d.a.create({title:{fontStyle:"italic",fontSize:22,color:"#777"},linkline:{flexDirection:"row",alignItems:"center"},icon:{marginLeft:10,color:"#777"}}),ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"_renderIconLink",value:function(e){var t=RegExp("instagram.com"),n=RegExp("facebook.com/events"),a=RegExp("youtube.com");return t.test(e)?r.a.createElement(F.a,{name:"instagram",onPress:function(){return ne.a.openURL(e)},size:40,style:ae.icon}):n.test(e)?r.a.createElement(F.a,{name:"facebook-square",onPress:function(){return ne.a.openURL(e)},size:40,style:ae.icon}):a.test(e)?r.a.createElement(F.a,{name:"youtube-square",onPress:function(){return ne.a.openURL(e)},size:40,style:ae.icon}):void 0}},{key:"render",value:function(){var e=this,t=this.props.links.map((function(t){return e._renderIconLink(t)})),n=r.a.createElement(k.a,{style:ae.title},this.props.title," ");return r.a.createElement(g.a,{style:ae.linkline},n,t)}}]),t}(i.Component),re=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(void 0==this.props.links)return r.a.createElement(g.a,null);var e=[],t=this.props.links;return Object.keys(t).forEach((function(n,a){r.a.createElement(ie,{title:n,links:t[n]});e.push(r.a.createElement(ie,{title:n,links:t[n]}))})),r.a.createElement(g.a,null,e)}}]),t}(i.Component),oe=d.a.create({outercontainer:{flex:1,marginHorizontal:15},innercontainer:{justifyContent:"center",alignItems:"stretch"},desctitle:{fontSize:18,fontWeight:"bold",color:"#555",marginBottom:17},desccontainer:{marginLeft:10,marginBottom:30,fontSize:16,color:"#333"}}),ce=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.match.id;var e=this.props.location.state.item;return r.a.createElement(g.a,{style:oe.outercontainer},r.a.createElement(X.a,null,r.a.createElement(g.a,{style:oe.innercontainer},r.a.createElement(I,{item:e})),r.a.createElement(g.a,null,r.a.createElement(k.a,{style:oe.desctitle}," Popis Udalosti: "),r.a.createElement(k.a,{style:oe.desccontainer},e.description)),r.a.createElement(re,{links:e.links})))}}]),t}(i.Component),se=[{title:"About us",action:function(){}},{title:"FAQ",action:function(){}},{title:"Legal",action:function(){}},{title:"Help",action:function(){}},{title:"Notifications",action:function(){}},{title:"Location",action:function(){}},{title:"Rate us",action:function(){}}],le=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"_flatListRenderer",value:function(e){var t=e.item;return r.a.createElement(b.a,{style:ue.tilestyle,onPress:function(){t.action()}},r.a.createElement(k.a,{style:ue.textstyle},t.title),r.a.createElement(O.a,{name:"ios-arrow-forward",type:"ionicon",size:35,color:"#555"}))}},{key:"render",value:function(){return r.a.createElement(g.a,{style:ue.container},r.a.createElement(j.a,{style:ue.flatliststyle,data:se,renderItem:this._flatListRenderer.bind(this),keyExtractor:function(e,t){return e.title}}))}}]),t}(i.Component),ue=d.a.create({container:{flex:1,justifyContent:"center",alignItems:"stretch"},flatliststyle:{marginHorizontal:15},textstyle:{fontWeight:"bold",color:"#555",fontSize:20,width:200},tilestyle:{marginTop:10,flexDirection:"row",justifyContent:"space-between"}}),he=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{style:me.container},r.a.createElement(k.a,{style:me.text},"Tak ako sa \u010dlovek sna\u017e\xed n\xe1js\u0165 zmysel bytia, aj my sa sna\u017e\xedme n\xe1js\u0165 h\u013eadan\xfa str\xe1nku."),r.a.createElement(k.a,{style:me.text},"\u0160koda, \u017ee neexistuje (str\xe1nka)."),r.a.createElement(k.a,{style:me.text},"(404 Error)"))}}]),t}(i.Component),me=d.a.create({container:{flex:1,justifyContent:"center",alignItems:"center"},text:{color:"#777",fontSize:15}}),de=n(88),pe=(f.a.get("window").width,d.a.create({tabContainer:{flexDirection:"row",justifyContent:"center",height:49},tabElement:{justifyContent:"center",alignItems:"center",flex:1}})),fe=(i.Component,{outercontainer:{flex:1,flexDirection:"row",justifyContent:"center",backgroundColor:"#EEE"},container:{width:f.a.get("window").width,height:f.a.get("window").height,backgroundColor:"#FFF"},header:{borderBottomColor:"#f16522",borderBottomWidth:4,elevation:10,height:"60px",justifyContent:"center",backgroundColor:"#FFF",alignItems:"center"},headerTitle:{textAlign:"center",fontSize:"25px",fontWeight:"bold",color:"#555"},headerImage:{width:"200px",height:"35px",resizeMode:"contain"},bottomTabBar:{height:"50px",flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"#FFF"},button:{flex:1,alignItems:"center"},innerrouter:{flex:1,justifyContent:"flex-start"}}),ge=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).onDimensionChange=n.onDimensionChange.bind(Object(p.a)(n)),n.setProperDimensions({window:f.a.get("window")}),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setProperDimensions",value:function(e){if(console.log("changed"),console.log(e),fe.container.height=e.window.height,e.window.width>e.window.height){console.log("landscape");var t={width:1.5*e.window.height,height:f.a.get("window").height,borderColor:"#f16522",borderWidth:1,borderRadius:20,backgroundColor:"#FFF",shadowColor:"#000",shadowOffset:{width:0,height:12},shadowOpacity:.58,shadowRadius:16,elevation:24};fe.container=t}}},{key:"onDimensionChange",value:function(e){this.setProperDimensions(e),this.forceUpdate()}},{key:"componentWillMount",value:function(){f.a.addEventListener("change",this.onDimensionChange)}},{key:"componentWillUnmount",value:function(){f.a.removeEventListener("change",this.onDimensionChange)}},{key:"render",value:function(){return console.log(fe.container),r.a.createElement(g.a,{source:n(226),style:fe.outercontainer,resizeMode:"repeat"},r.a.createElement(g.a,{style:fe.container},r.a.createElement(v.a,{style:fe.innerrouter},r.a.createElement(g.a,{style:fe.header},r.a.createElement(y.a,{source:n(226),style:fe.headerImage})),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(L,e)}}),r.a.createElement(E.a,{path:"/search",render:function(e){return r.a.createElement(N,e)}}),r.a.createElement(E.a,{path:"/savedevents",render:function(e){return r.a.createElement(V,e)}}),r.a.createElement(E.a,{path:"/appinfo",render:function(e){return r.a.createElement(le,e)}}),r.a.createElement(E.a,{path:"/details/:id",render:function(e){return r.a.createElement(ce,e)}}),r.a.createElement(E.a,{path:"/searchresults/",render:function(e){return r.a.createElement(Y,e)}}),r.a.createElement(E.a,{render:function(e){return r.a.createElement(he,e)}})),r.a.createElement(g.a,{style:fe.bottomTabBar},r.a.createElement(ke,null),r.a.createElement(we,null),r.a.createElement(Ee,{style:fe.button}),r.a.createElement(ve,{style:fe.button})))))}}]),t}(i.Component),ye="#FF9A46",be="#AAA",ve=Object(E.f)((function(e){var t=e.history,n=e.location;return r.a.createElement(b.a,{style:fe.button,onPress:function(){t.push("/appinfo")}},r.a.createElement(M.a,{name:"md-more",type:"ionicon",size:30,color:"/appinfo"==n.pathname?ye:be}))})),Ee=Object(E.f)((function(e){var t=e.history,n=e.location;return r.a.createElement(b.a,{style:fe.button,onPress:function(){t.push("/savedevents")}},r.a.createElement(M.a,{name:"md-heart",type:"ionicon",size:30,color:"/savedevents"==n.pathname?ye:be}))})),ke=Object(E.f)((function(e){var t=e.history,n=e.location;return r.a.createElement(b.a,{style:fe.button,onPress:function(){t.push("/")}},r.a.createElement(M.a,{name:"md-home",type:"ionicon",size:30,color:"/"==n.pathname?ye:be}))})),we=Object(E.f)((function(e){var t=e.history,n=e.location;return r.a.createElement(b.a,{style:fe.button,onPress:function(){t.push("/search")}},r.a.createElement(M.a,{name:"md-search",type:"ionicon",size:30,color:"/search"==n.pathname?ye:be}))})),je=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(ge,null)}}]),t}(r.a.Component),Ce=(d.a.create({text:{fontWeight:"bold",fontSize:30}}),je);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(405);var xe=n(187),Oe=n.n(xe);console.log(Oe.a);var Fe="@font-face {\n  src: url(".concat(Oe.a,");\n  font-family: 'FontAwesome5_Regular'\n}"),De=document.createElement("style");De.type="text/css",De.styleSheet?De.styleSheet.cssText=Fe:De.appendChild(document.createTextNode(Fe)),document.head.appendChild(De),c.a.render(r.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[264,1,2]]]);
//# sourceMappingURL=main.dedb758a.chunk.js.map