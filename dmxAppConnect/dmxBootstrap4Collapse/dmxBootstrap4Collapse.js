/*!
 DMXzone Bootstrap 4 Collapse
 Version: 1.0.1
 (c) 2018 DMXzone.com
 @build 2018-09-14 16:23:03
 */
dmx.Component("bs4-collapse",{initialData:{collapsed:!0},attributes:{show:{type:Boolean,default:!1}},methods:{toggle:function(){jQuery(this.$node).collapse("toggle")},show:function(){jQuery(this.$node).collapse("show")},hide:function(){jQuery(this.$node).collapse("hide")}},events:{show:Event,shown:Event,hide:Event,hidden:Event},render:function(s){this.$node=s,this.$parse(),jQuery(s).on("show.bs.collapse",this.dispatchEvent.bind(this,"show")),jQuery(s).on("shown.bs.collapse",this.dispatchEvent.bind(this,"shown")),jQuery(s).on("hide.bs.collapse",this.dispatchEvent.bind(this,"hide")),jQuery(s).on("hidden.bs.collapse",this.dispatchEvent.bind(this,"hidden")),jQuery(s).on("shown.bs.collapse",this.onShown.bind(this)),jQuery(s).on("hidden.bs.collapse",this.onHidden.bind(this)),jQuery(s).addClass("collapse"),jQuery(this.$node).collapse({toggle:!1}),this.update({})},onShown:function(){this.set("collapsed",!1)},onHidden:function(){this.set("collapsed",!0)},update:function(s){s.show!=this.props.show&&(jQuery(this.$node).toggleClass("show",this.props.show),this.set("collapsed",!this.props.show))},beforeDestroy:function(){jQuery(this.$node).off(".bs.collapse"),jQuery(this.$node).collapse("dispose")}});
//# sourceMappingURL=../maps/dmxBootstrap4Collapse.js.map
