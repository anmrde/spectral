/*!
 DMXzone Typed
 Version: 1.0.0
 (c) 2019 DMXzone.com
 @build 2019-05-29 17:27:46
 */
dmx.Component("typed",{attributes:{strings:{type:String,default:""},speed:{type:Number,default:0},delay:{type:Number,default:0},"back-speed":{type:Number,default:0},"back-delay":{type:Number,default:700},"smart-backspace":{type:Boolean,default:!1},shuffle:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},hidecursor:{type:Boolean,default:!1}},methods:{toggle:function(){this.typed.toggle()},stop:function(){this.typed.stop()},start:function(){this.typed.start()}},events:{complete:Event},render:function(t){this.$node=t,this.update({})},update:function(t){if(JSON.stringify(t)!=JSON.stringify(this.props)){this.typed&&this.typed.destroy();var e="string"==typeof this.props.strings?this.props.strings.split(","):this.props.strings;this.typed=new Typed(this.$node,{strings:e,typeSpeed:this.props.speed,startDelay:this.props.delay,backSpeed:this.props["back-speed"],backDelay:this.props["back-delay"],smartBackspace:this.props["smart-backspace"],shuffle:this.props.shuffle,fadeOut:this.props.fade,loop:this.props.loop,showCursor:!this.props.hidecursor})}}});
//# sourceMappingURL=../maps/dmxTyped.js.map
