webpackJsonp([1],{"+mDL":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.onClick}},[n("v-icon",[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},"0O4O":function(t,e){},"1LNl":function(t,e){},"1SaT":function(t,e,n){"use strict";function a(t){n("QtlG")}var i=n("WaAR"),r=n("djYN"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},"3U4T":function(t,e,n){"use strict";var a=n("ZkkH"),i=n("MPh8");e.a={name:"wgu-feature-info-window",directives:{DraggableWin:i.a},props:{layerId:{type:String,required:!0},imageProp:{type:String,required:!1},titleProp:{type:String,required:!1},icon:{type:String,required:!1},title:{type:String,required:!1}},data:function(){return{feature:null,attributes:null,left:"300px",top:"200px"}},mounted:function(){var t=this;a.a.$on("map-selectionchange",function(e,n,a){t.layerId===e&&t.setFeature(n[0])})},methods:{setFeature:function(t){t?(this.feature=t,this.attributes=t.getProperties(),this.attributes.image="http://via.placeholder.com/200x200?text="):(this.feature=null,this.attributes=null)}}}},"4f5W":function(t,e){},"4z3x":function(t,e,n){"use strict";var a=n("MPh8"),i=n("WFjz"),r=n("bdNf"),o=n("KUw0"),s=n("xL0k"),c=n("1avf"),u=n("2fQu"),l=n("86p+"),d=n("aC3Q"),v=n("tOEd"),f=n("lY9i"),p=n("uODu"),m=n("6HMI");e.a={directives:{DraggableWin:a.a},mixins:[i.a],props:["icon"],data:function(){return{area:" -- ",distance:" -- ",measureType:"distance",show:!1,left:"100px",top:"200px"}},watch:{show:function(){var t=this;!0===t.show?t.addInteraction():t.removeInteraction()},measureType:function(t,e){this.addInteraction()}},methods:{onMapBound:function(){this.createMeasureLayer()},createMeasureLayer:function(){var t=this,e=new l.a,n=new d.a({name:"Measure Layer",source:e,style:new v.a({fill:new m.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new f.a({color:"rgba(0, 0, 0, 0.7)",width:2}),image:new p.a({radius:7,fill:new m.a({color:"rgba(0, 0, 0, 0.7)"})})})});t.map.addLayer(n),t.source=e},addInteraction:function(){var t=this;t.draw&&t.removeInteraction();var e="area"===this.measureType?"Polygon":"LineString",n=new r.a({source:t.source,type:e,style:new v.a({fill:new m.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new f.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new p.a({radius:5,stroke:new f.a({color:"rgba(0, 0, 0, 0.7)"}),fill:new m.a({color:"rgba(255, 255, 255, 0.2)"})})})});t.map.addInteraction(n);var a,i;n.on("drawstart",function(e){t.source.clear(),i=e.feature,a=t.map.on("click",function(e){var n,a=i.getGeometry();a instanceof s.a?(n=t.formatArea(a),t.area=n):a instanceof o.a&&(n=t.formatLength(a),t.distance=n)})},this),n.on("drawend",function(){i=null,u.a.unByKey(a)},this),t.draw=n},removeInteraction:function(){var t=this;t.draw&&t.map.removeInteraction(t.draw),t.source&&t.source.clear(),t.distance=" -- ",t.area=" -- "},formatLength:function(t){var e=c.a.getLength(t);return e>100?Math.round(e/1e3*100)/100+" km":Math.round(100*e)/100+" m"},formatArea:function(t){var e=c.a.getArea(t);return e>1e4?Math.round(e/1e6*100)/100+" km²":Math.round(100*e)/100+" m²"}}}},"52cA":function(t,e){},"6XdN":function(t,e){},"6bNP":function(t,e,n){"use strict";e.a={name:"wgu-info-window",data:function(){return{}}}},"7OTJ":function(t,e,n){"use strict";var a=n("MPh8");e.a={directives:{DraggableWin:a.a},props:["icon","headline","content","infoLink","infoLinkText"],data:function(){return{show:!1,left:"300px",top:"300px"}}}},"7zck":function(t,e){},"9JLh":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"map wgu-map",attrs:{id:"ol-map"}})},i=[],r={render:a,staticRenderFns:i};e.a=r},DcW1:function(t,e,n){"use strict";var a=n("qUL7");e.a={name:"wgu-toggle-infoclick-button",components:{"wgu-infoclick-win":a.a},data:function(){return{show:!1,icon:"info",text:"",left:"30px",top:"30px"}},methods:{toggleUi:function(){this.show=!this.show,this.$refs.infoClickWin.show=this.show}}}},GEkf:function(t,e,n){"use strict";e.a={name:"wgu-app-header",data:function(){return{title:this.$appConfig.title}},mounted:function(){}}},I0fR:function(t,e,n){"use strict";function a(t){n("NKKs")}var i=n("TeGO"),r=n("+mDL"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},InVa:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"wgu-app":!0,"wgu-app-embedded":t.isEmbedded},attrs:{id:"app","data-app":""}},[n("wgu-app-header",[n("v-toolbar-items",{attrs:{slot:"wgu-tb-buttons"},slot:"wgu-tb-buttons"},[n("wgu-toggle-layerlist-button",{attrs:{icon:"layers",text:""}}),t._v(" "),n("wgu-toggle-measuretool-button",{attrs:{icon:"photo_size_select_small",text:""}}),t._v(" "),n("wgu-toggle-infoclick-button",{attrs:{icon:"info",text:""}}),t._v(" "),n("wgu-toggle-helpwin-button",{attrs:{icon:"help",text:""}})],1)],1),t._v(" "),n("wgu-top-logo"),t._v(" "),n("wgu-map"),t._v(" "),n("wgu-feature-infowindow",{attrs:{layerId:"Shops",imageProp:"image",titleProp:"name",icon:"info",title:"Information"}})],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},J282:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"wgu-app-toolbar"},[n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-layout",{attrs:{"justify-end":""}},[t._t("wgu-tb-buttons")],2)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},K1Qc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-infoclick-win",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v("Map Click Info")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[null===this.gridData&&null===this.coordsData?n("div",{staticClass:"no-data"},[t._v("\n        Click on the map to get information for the clicked map position.\n      ")]):t._e(),t._v(" "),null!==this.gridData?n("table",[n("thead",[n("tr")]),t._v(" "),n("tbody",{staticClass:"attr-tbody"},t._l(t.gridData,function(e,a){return n("tr",[n("td",[t._v("\n              "+t._s(a)+"\n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(e)+"\n            ")])])}))]):t._e(),t._v(" "),null!==this.coordsData?n("table",{staticClass:"coords"},[n("thead",[n("tr")]),t._v(" "),n("tbody",t._l(t.coordsData,function(e,a){return n("tr",[n("td",[t._v("\n              "+t._s(a)+"\n            ")]),t._v(" "),n("td",[t._v("\n              "+t._s(e)+"\n            ")])])}))]):t._e()])],1):t._e()],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},KnVp:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),n("wgu-infoclick-win",{ref:"infoClickWin",attrs:{icon:t.icon,left:t.left,top:t.top}})],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},"Lj/9":function(t,e,n){"use strict";function a(t){n("0O4O")}var i=n("3U4T"),r=n("aE5N"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},MPh8:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("7+uW"),i={bind:function(t,e,n){function a(t){t=t||window.event,c=t.clientX,u=t.clientY,document.onmouseup=r,document.onmousemove=i}function i(e){e=e||window.event,o=c-e.clientX,s=u-e.clientY,c=e.clientX,u=e.clientY,n.componentInstance.$parent.top=t.offsetTop-s+"px",n.componentInstance.$parent.left=t.offsetLeft-o+"px"}function r(){document.onmouseup=null,document.onmousemove=null}var o=0,s=0,c=0,u=0,l=t.querySelector("nav");l&&(l.style.cursor="move",l.onmousedown=a)}};a.a.directive("draggable-win",i)},N75n:function(t,e,n){"use strict";e.a={name:"wgu-top-logo",data:function(){return{logoSrc:this.$appConfig.logo,logoSize:this.$appConfig.logoSize}}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("3EgV"),r=n.n(i),o=n("soLJ"),s=n("7zck");n.n(s);a.a.use(r.a),n("ktr9"),n("SPmS"),a.a.config.productionTip=!1;var c=document.querySelector("#app");a.a.prototype.$isEmbedded=c.hasAttribute("embedded"),fetch("static/app-conf.json").then(function(t){return t.json()}).then(function(t){a.a.prototype.$appConfig=t,new a.a({el:"#app",template:"<wgu-app/>",components:{WguApp:o.a}})})},NKKs:function(t,e){},NkLf:function(t,e,n){"use strict";function a(t){n("a9fg")}var i=n("DcW1"),r=n("KnVp"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},Nkpt:function(t,e,n){"use strict";var a=n("ZkkH"),i=n("yGLh"),r=n("IZoy");e.a={name:"wgu-infoclick-win",data:function(){return{show:!1,icon:"info",text:"",left:"300px",top:"300px",coordsMapProj:"",coordsWgs84:"",coordsHdms:"",gridData:null,coordsData:null}},created:function(){var t=this;a.a.$on("ol-map-mounted",function(e){t.map=e})},methods:{toggleUi:function(){this.show=!this.show},registerMapClick:function(){var t=this;t.map.on("singleclick",function(e){var n=t.map.forEachFeatureAtPixel(e.pixel,function(t,e){return[t,e]});if(n){var a=n[0],o=a.getProperties();delete o.geometry,t.gridData=o}else t.gridData=null;var s=e.coordinate,c=t.map.getView().getProjection().getCode(),u=i.a.transform(s,c,"EPSG:4326"),l=r.a.toStringHDMS(u);t.coordsMapProj=s[1].toFixed(2)+" "+s[0].toFixed(2),t.coordsWgs84=u[1].toFixed(7)+" "+u[0].toFixed(7),t.coordsHdms=l,t.coordsData={POS:s[1].toFixed(2)+" "+s[0].toFixed(2),"WGS 84":u[1].toFixed(7)+" "+u[0].toFixed(7),HDMS:l}})}},watch:{show:function(){!0===this.show&&this.registerMapClick()}}}},OUzU:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var a=n("L2CZ"),i=n("M4zB"),r=n("/3dj"),o=n("/zVC"),s=n("lmfX"),c=n("vkT8"),u=n("cURS"),l=n("XdvO"),d=n("YDKv"),v=n("aC3Q"),f=n("86p+"),p=n("zQ0b"),m={formatMapping:{MVT:c.a,GeoJSON:u.a,TopoJSON:l.a,KML:d.a},getInstance:function(t){if(!t.lid){var e=new Date;t.lid=e.getTime()}return"WMS"===t.type?this.createWmsLayer(t):"XYZ"===t.type?this.createXyzLayer(t):"OSM"===t.type?this.createOsmLayer(t):"VECTOR"===t.type?this.createVectorLayer(t):"VECTORTILE"===t.type?this.createVectorTileLayer(t):null},createWmsLayer:function(t){return new a.a({name:t.name,lid:t.lid,extent:t.extent,visible:t.visible,opacity:t.opacity,source:new i.a({url:t.url,params:{LAYERS:t.layers,TILED:t.tiled},serverType:t.serverType,attributions:t.attributions})})},createXyzLayer:function(t){return new a.a({extent:t.extent,source:new i.a({url:t.url,attributions:t.attributions})})},createOsmLayer:function(t){return new a.a({name:t.name,lid:t.lid,visible:t.visible,opacity:t.opacity,source:new r.a})},createVectorLayer:function(t){return new v.a({name:t.name,lid:t.lid,extent:t.extent,visible:t.visible,opacity:t.opacity,source:new f.a({url:t.url,format:new this.formatMapping[t.format](t.formatConfig),attributions:t.attributions}),style:p.a[t.styleRef]})},createVectorTileLayer:function(t){return new o.a({name:t.name,lid:t.lid,visible:t.visible,opacity:t.opacity,source:new s.a({url:t.url,format:new this.formatMapping[t.format],attributions:t.attributions}),style:p.a[t.styleRef]})}}},Pvv6:function(t,e,n){"use strict";var a=n("i8bC"),i=n("dkK6"),r=n("Lj/9"),o=n("VJFb"),s=n("ke1P"),c=n("I0fR"),u=n("UAgb"),l=n("1SaT"),d=n("uwYZ"),v=n("NkLf");e.a={name:"app",components:{"wgu-map":a.a,"wgu-info-window":i.a,"wgu-feature-infowindow":r.a,"wgu-app-header":o.a,"wgu-top-logo":s.a,"wgu-menubutton":c.a,"wgu-toggle-layerlist-button":u.a,"wgu-toggle-helpwin-button":l.a,"wgu-toggle-measuretool-button":d.a,"wgu-toggle-infoclick-button":v.a},data:function(){return{isEmbedded:!1}},mounted:function(){this.isEmbedded=this.$isEmbedded}}},QtlG:function(t,e){},SPmS:function(t,e){},"T0p+":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-layerlist",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v("Layers")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-list",t._l(t.items,function(e){return n("v-list-group",{key:e.title,attrs:{value:e.active}},t._l(e.items,function(e){return n("v-list-tile",{key:e.title,staticClass:"wgu-layerlist-item",on:{click:function(t){}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.visibleLayers,expression:"visibleLayers"}],staticClass:"wgu-layer-viz-cb",attrs:{type:"checkbox"},domProps:{value:e.title,checked:Array.isArray(t.visibleLayers)?t._i(t.visibleLayers,e.title)>-1:t.visibleLayers},on:{change:[function(n){var a=t.visibleLayers,i=n.target,r=!!i.checked;if(Array.isArray(a)){var o=e.title,s=t._i(a,o);i.checked?s<0&&(t.visibleLayers=a.concat([o])):s>-1&&(t.visibleLayers=a.slice(0,s).concat(a.slice(s+1)))}else t.visibleLayers=r},t.layerVizChanged]}}),t._v(" "),n("v-list-tile-content",{staticClass:"black--text"},[n("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.action))])],1)],1)}))}))],1):t._e()},i=[],r={render:a,staticRenderFns:i};e.a=r},TeGO:function(t,e,n){"use strict";e.a={name:"wgu-menubutton",props:{icon:{type:String,required:!1},text:{type:String,required:!1}},methods:{onClick:function(){console.warn('"onClick" of v-webgis-menubutton not overitten')}}}},"Tix/":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-helpwin",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v("Help")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.headline))]),t._v(" "),n("div",{},[n("span",{domProps:{innerHTML:t._s(t.content)}})])])]),t._v(" "),n("v-card-actions",[n("a",{staticClass:"info-link red--text darken3",attrs:{href:t.infoLink,target:"_blank"}},[t._v(t._s(t.infoLinkText))])])],1):t._e()},i=[],r={render:a,staticRenderFns:i};e.a=r},U7Aj:function(t,e){},UAgb:function(t,e,n){"use strict";function a(t){n("6XdN")}var i=n("bv4e"),r=n("xcAS"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},UdpQ:function(t,e,n){"use strict";var a=n("9bGr"),i=n("gCHX"),r=n("knhA"),o=n("RW/r"),s=n("ZkkH"),c=n("OUzU"),u=n("8+tQ");e.a={name:"wgu-map",props:{collapsibleAttribution:{type:Boolean,default:!1}},data:function(){return{zoom:this.$appConfig.mapZoom,center:this.$appConfig.mapCenter}},mounted:function(){var t=this;this.map.setTarget(document.getElementById("ol-map")),s.a.$emit("ol-map-mounted",this.map),window.setTimeout(function(){t.map.updateSize()},100)},created:function(){this.map=new a.a({layers:[],controls:[new o.a,new r.a({collapsible:this.collapsibleAttribution})],view:new i.a({center:this.center||[0,0],zoom:this.zoom})});var t=this.createLayers();this.map.getLayers().extend(t)},methods:{createLayers:function(){var t=this,e=[];return this.$appConfig.mapLayers.reverse().forEach(function(n){var a=c.a.getInstance(n);if(e.push(a),n.selectable){var i=new u.a({layers:[a]});i.on("select",function(t){s.a.$emit("map-selectionchange",a.get("lid"),t.selected,t.deselected)}),t.map.addInteraction(i)}}),e}}}},UkhJ:function(t,e,n){"use strict";function a(t){n("ucpA")}var i=n("7OTJ"),r=n("Tix/"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},VJFb:function(t,e,n){"use strict";function a(t){n("iDkI")}var i=n("GEkf"),r=n("J282"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},VLBH:function(t,e,n){"use strict";var a=n("MPh8"),i=n("WFjz");e.a={directives:{DraggableWin:a.a},mixins:[i.a],props:["icon"],data:function(){return{items:[],visibleLayers:[],show:!1,left:"300px",top:"70px"}},methods:{onMapBound:function(){this.createLayerItems()},createLayerItems:function(){var t=this.map.getLayers();t=t.getArray().slice(0).reverse();var e=[],n=[];t.forEach(function(t){var a=t.getVisible(),i=t.get("name");e.push({title:i,visible:a}),a&&n.push(i)}),this.visibleLayers=n,this.items=[{title:"",items:e,active:!0}]},layerVizChanged:function(){var t=this;t.map.getLayers().forEach(function(t){t.setVisible(!1)}),t.visibleLayers.forEach(function(e){var n=t.getLayersBy("name",e)[0];n&&n.setVisible(!0)})},getLayersBy:function(t,e){var n=[];return this.map.getLayers().forEach(function(a){a.get(t)===e&&n.push(a)}),n}}}},WFjz:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("ZkkH"),i={created:function(){var t=this;a.a.$on("ol-map-mounted",function(e){t.map=e,t.onMapBound&&t.onMapBound()})}}},WaAR:function(t,e,n){"use strict";var a=n("UkhJ");e.a={name:"wgu-toggle-helpwin-button",components:{"wgu-helpwin":a.a},data:function(){return{show:!1,icon:"help",text:"",headline:"About Wegue",content:"<h3>WebGIS with OpenLayers and Vue.js</h3> Template and re-usable components for webmapping applications with OpenLayers and Vue.js",infoLink:"https://github.com/meggsimum/wegue",infoLinkText:"More info",left:"300px",top:"300px"}},methods:{toggleUi:function(){this.show=!this.show,this.$refs.helpwin.show=this.show}}}},XRxa:function(t,e){},YyXm:function(t,e){},ZkkH:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("7+uW"),i=new a.a},a9fg:function(t,e){},aE5N:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==this.feature?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-feature-infowindow info-card",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-spacer")],1),t._v(" "),t.attributes[t.imageProp]?n("v-card-media",{attrs:{src:t.attributes[t.imageProp],height:"200px"}}):t._e(),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[t.attributes[t.titleProp]?n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.attributes[t.titleProp]))]):t._e()])]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("More info...")])],1)],1):t._e()},i=[],r={render:a,staticRenderFns:i};e.a=r},bv4e:function(t,e,n){"use strict";var a=n("mucN");e.a={name:"v-webgis-toggle-layerlist-button",components:{"wgu-layerlist":a.a},data:function(){return{show:!1,icon:"layers",text:"",left:"30px",top:"30px"}},methods:{toggleUi:function(){this.show=!this.show,this.$refs.layerlist.show=this.show}}}},c0Ns:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-card",{directives:[{name:"draggable-win",rawName:"v-draggable-win"}],staticClass:"wgu-measurewin",style:{left:t.left,top:t.top}},[n("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{dark:""}},[n("v-toolbar-side-icon",[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("v-toolbar-title",[t._v("Measure")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",{},[n("v-btn-toggle",{model:{value:t.measureType,callback:function(e){t.measureType=e},expression:"measureType"}},[n("v-btn",{attrs:{large:"",value:"distance"}},[t._v("\n           Distance\n         ")]),t._v(" "),n("v-btn",{attrs:{large:"",value:"area"}},[t._v("\n           Area\n         ")])],1)],1)]),t._v(" "),n("v-card-actions",[n("div",{},[n("div",{staticClass:"measure-result"},[t._v("\n        LENGTH: "+t._s(t.distance)+"\n      ")]),t._v(" "),n("div",{staticClass:"measure-result"},[t._v("\n        AREA: "+t._s(t.area)+"\n      ")])])])],1):t._e()},i=[],r={render:a,staticRenderFns:i};e.a=r},djYN:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),n("wgu-helpwin",{ref:"helpwin",attrs:{icon:t.icon,headline:t.headline,content:t.content,infoLink:t.infoLink,infoLinkText:t.infoLinkText,left:t.left,top:t.top}})],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},dkK6:function(t,e,n){"use strict";function a(t){n("4f5W")}var i=n("6bNP"),r=n("dkv0"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},dkv0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"pb-0 wgu-infowindow",attrs:{permanent:"",absolute:"",height:"100%",light:"",right:""}},[n("v-card",{staticClass:"info-card"},[n("v-card-media",{attrs:{src:"http://via.placeholder.com/200x200",height:"200px"}}),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))]),t._v(" "),n("div",[t._v(t._s(t.description1)+" "),n("br"),t._v(" "+t._s(t.description2))])])]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Share")]),t._v(" "),n("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Explore")])],1)],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},"eJ+z":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-avatar",{staticClass:"wgu-top-logo",attrs:{size:t.logoSize,tile:!0}},[n("img",{attrs:{src:t.logoSrc,alt:"App Logo"}})])},i=[],r={render:a,staticRenderFns:i};e.a=r},i8bC:function(t,e,n){"use strict";function a(t){n("1LNl")}var i=n("UdpQ"),r=n("9JLh"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},iDkI:function(t,e){},irkU:function(t,e,n){"use strict";var a=n("lgWu");e.a={name:"wgu-toggle-measurewin-button",components:{"wgu-measuretool-win":a.a},data:function(){return{show:!1,icon:"photo_size_select_small",text:"",left:"100px",top:"200px"}},methods:{toggleUi:function(){this.show=!this.show,this.$refs.measurewin.show=this.show}}}},ke1P:function(t,e,n){"use strict";function a(t){n("XRxa")}var i=n("N75n"),r=n("eJ+z"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},ktr9:function(t,e){},lgWu:function(t,e,n){"use strict";function a(t){n("waNP")}var i=n("4z3x"),r=n("c0Ns"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},mucN:function(t,e,n){"use strict";function a(t){n("YyXm")}var i=n("VLBH"),r=n("T0p+"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},qS3Q:function(t,e){},qUL7:function(t,e,n){"use strict";function a(t){n("52cA")}var i=n("Nkpt"),r=n("K1Qc"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},soLJ:function(t,e,n){"use strict";function a(t){n("qS3Q")}var i=n("Pvv6"),r=n("InVa"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},u0Qy:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),n("wgu-measuretool-win",{ref:"measurewin",attrs:{icon:t.icon,left:t.left,top:t.top}})],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},ucpA:function(t,e){},uwYZ:function(t,e,n){"use strict";function a(t){n("U7Aj")}var i=n("irkU"),r=n("u0Qy"),o=n("VU/8"),s=a,c=o(i.a,r.a,!1,s,null,null);e.a=c.exports},waNP:function(t,e){},xcAS:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-btn",{attrs:{icon:""},on:{click:t.toggleUi}},[n("v-icon",{attrs:{medium:""}},[t._v(t._s(t.icon))]),t._v("\n    "+t._s(t.text)+"\n  ")],1),t._v(" "),n("wgu-layerlist",{ref:"layerlist",attrs:{icon:t.icon,left:t.left,top:t.top}})],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},zQ0b:function(t,e,n){"use strict";var a=n("tOEd"),i=n("lY9i"),r=n("6HMI");e.a={shopStyle:new a.a({stroke:new i.a({color:"red",width:3.25})}),neWorldMvt:new a.a({stroke:new i.a({color:"gray",width:1}),fill:new r.a({color:"rgba(20,20,20,0.1)"})})}}},["NHnr"]);
//# sourceMappingURL=app.8523539a3365c5056768.js.map