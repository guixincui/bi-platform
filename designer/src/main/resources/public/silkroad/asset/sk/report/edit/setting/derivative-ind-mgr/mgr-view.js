define(["template","dialog","common/float-window","report/edit/setting/derivative-ind-mgr/mgr-template","report/edit/setting/derivative-ind-mgr/mgr-model","report/edit/setting/derivative-ind-mgr/callback-template"],function(a,b,c,d,e,f){return Backbone.View.extend({initialize:function(){this.model=new e},openDialog:function(){for(var a,c=this,e=window.dataInsight.main.model.get("indList"),g=!1,h=0,i=e.data.length;i>h;h++)if("CAL"===e.data[h].type){g=!0;break}a=d.render({indList:e,hasDerive:g}),b.showDialog({dialog:{height:405,width:600,resizable:!1,open:function(){c.el=$(this),$(this).on("focusin",".j-value",function(a){c.focusInput=a.target}),$(this).on("click",".area-inds-item",function(){c.focusInput=$(this)[0],$(this).find("input").focus()}),$(this).on("click",".j-delete",function(a){b.confirm("确定删除吗？",function(){var b=$(a.target).parent().parent().find(".j-input-datasource-address").attr("id");b?c.model.deleteInd(b,function(){$(a.target).parents(".j-derive-item").remove()}):$(a.target).parents(".j-derive-item").remove()})}),$(".j-ori-item",$(this)).click(function(a){c._clickOriItem.call(c,a)}),$(".j-add-derive",$(this)).click(function(a){c._addDerive.call(c,a)}),$(this).on("click",".j-classification",function(a){c._tabBox(a),c._tabClick(a)}),$(this).on("click",".area-inds-item-ind-delete",function(a){c._deleteSrRrInd($(a.target))}),$(this).on("click",".j-callback-close",function(){$(this).parent().remove()}),$(this).on("click",".j-callback-add",function(){$(this).prev("div").find(".callback-index-all").prepend(f.render())}),$(this).on("focus",".call-text",function(a){var b=$(a.target);"rgb(255, 0, 0)"==b.css("color")&&b.css("color","#000").val("")}),$(this).on("keydown",".call-timeout",function(a){var b=a||event;return b.keyCode<48&&8!=b.keyCode&&9!=b.keyCode&&13!=b.keyCode||b.keyCode>57?!1:void 0}),$(this).on("click",".j-callback-retractable",function(){var a=$(this).siblings(),b=$(this);"-"==$(this).text()?($(this).text("+"),a.each(function(){if("callback-form"==$(this).attr("class"))$(this).hide();else if("callback-title"==$(this).attr("class")){var a="由数字,字母,下划线组成并以数字开头",c="由数字,字母,汉字组成",d="由整数组成",e=$(this).siblings(".callback-form").find(".call-text"),f=$(this).siblings(".callback-form").find(".call-caption"),g=f.val(),h=0;e.each(function(){""==$(this).val()?$(this).css("color","rgb(255, 0, 0)").val("格式错误请重新输入"):$(this).attr("placeholder")!=a||/^[a-zA-Z][a-zA-Z0-9_]*$/.test($(this).val())?$(this).attr("placeholder")==c&&/[^a-zA-Z0-9\u4E00-\u9FA5]/.test($(this).val())?$(this).css("color","rgb(255, 0, 0)").val("格式错误请重新输入"):$(this).attr("placeholder")==d&&/[^0-9]/.test($(this).val())&&$(this).css("color","rgb(255, 0, 0)").val("格式错误请重新输入"):$(this).css("color","rgb(255, 0, 0)").val("格式错误请重新输入")}),e.each(function(){""==$(this).val()||"rgb(255, 0, 0)"==$(this).css("color")?(b.siblings(".callback-title").children().eq(1).css("color","rgb(255, 0, 0)"),b.siblings(".callback-title").children().eq(1).text("(数据格式存在错误)"),h=1):0==h&&b.siblings(".callback-title").children().eq(1).text("")}),"rgb(255, 0, 0)"==f.css("color")?(b.siblings(".callback-title").children().eq(0).css("color","rgb(255, 0, 0)"),b.siblings(".callback-title").children().eq(0).text("显示名称错误")):(b.siblings(".callback-title").children().eq(0).css("color","rgb(0, 0, 0)"),b.siblings(".callback-title").children().eq(0).text(g)),$(this).show()}})):"+"==$(this).text()&&($(this).text("-"),a.each(function(){"callback-form"==$(this).attr("class")?$(this).show():"callback-title"==$(this).attr("class")&&$(this).hide()}))})},buttons:{"提交":function(){var a=$(this),b=c._submitMethodTypeValue(a,function(){0==b&&a.dialog("close")})},"取消":function(){var a=$(this);c.model.updateLeftPanel(function(){a.dialog("close")})}}},content:a,title:"衍生指标管理"})},destroy:function(){this.model.clear({silent:!0}),delete this.model},_submitMethodTypeValue:function(a,b){var c=this,d={extendInds:{}};d.calDeriveInds=this._getDeriveData(a),d.extendInds.rr=this._getSrRrData(1,a),d.extendInds.sr=this._getSrRrData(2,a);var e=this._getCallBackData(a);return 0==e?0:(d.callback=this._getCallBackData(a),c.model.submitMethodTypeValue(d,b),void 0)},_addDerive:function(a){var b=$(a.target).parent(),c=$(".j-derive-item-template",this.el).clone();c.removeClass("hide j-derive-item-template").addClass("j-derive-item"),b.before(c)},_clickOriItem:function(a){var b=$(a.target),c=b.attr("data-input"),d=$(this.focusInput);if(d.hasClass("j-area-inds-item-sr")||d.hasClass("j-area-inds-item-rr")){d.hasClass("j-area-inds-item-sr")&&(c+="_sr"),d.hasClass("j-area-inds-item-rr")&&(c+="_rr");var e=!1,f=['<div class="area-inds-item-ind j-area-inds-item-ind f-l" title="',c,'">',c,'<span class="hide area-inds-item-ind-delete">x</span>',"</div>"].join("");if(d.find(".j-area-inds-item-ind").each(function(){e=$(this).attr("title")===c?!0:!1}),e)return;d.find("input").before(f).focus()}else void 0!==this.focusInput&&d.val(d.val()+"${"+c+"}")},_deleteSrRrInd:function(a){var c=this;b.confirm("确定删除吗？",function(){var b=a.parent().attr("id");b?c.model.deleteInd(b,function(){a.parent().remove()}):a.parent().remove()})},_getDeriveData:function(a){var b=[];return a.find(".j-derive-item").each(function(){var a=$(this).find("input"),c=a.eq(0),d={id:c.attr("id")||"",name:"",caption:c.val(),formula:a.eq(1).val()};b.push(d)}),b},_getCallBackData:function(a){var b="由数字,字母,下划线组成并以数字开头",c="由数字,字母,汉字组成",d="由整数组成",e=[],f=1;return a.find(".j-callback-index-all").eq(0).find(".callback-form").each(function(){var a=$(this).find(".callback-text").eq(0),e=a.find("input");e.each(function(){""==$(this).val()?($(this).css("color","red").val("输入不能为空"),$(this).attr("placeholder")==c&&$(this).parent().parent().siblings(".callback-title").find("div").css("color","red").text("显示名称格式错误")):$(this).attr("placeholder")!=b||/^[a-zA-Z][a-zA-Z0-9_]*$/.test($(this).val())?$(this).attr("placeholder")==c&&/[^a-zA-Z0-9\u4E00-\u9FA5]/.test($(this).val())?$(this).css("color","red").val("格式错误请重新输入"):$(this).attr("placeholder")==d&&/[^0-9]/.test($(this).val())&&$(this).css("color","red").val("格式错误请重新输入"):$(this).css("color","red").val("格式错误请重新输入")});for(var g=0;g<=e.length;g++)if("rgb(255, 0, 0)"==$(e[g]).css("color")){f=0;break}}),0==f?0:(a.find(".j-callback-index-all").eq(0).find(".callback-form").each(function(){var a=$(this).find(".callback-text").eq(0),b={id:$(this).attr("id")||"",name:a.find(".call-name").eq(0).val()||"",caption:a.find(".call-caption").eq(0).val()||"",url:a.find(".call-url").eq(0).val()||"",properties:{}},c=b.properties;c.timeOut=a.find(".call-timeout").val()||"",e.push(b)}),e)},_getSrRrData:function(a,b){var c=[],d=1==a?" .j-area-inds-item-rr":" .j-area-inds-item-sr",e=".j-data-sources-derive-list-select"+d+" .j-area-inds-item-ind",f=b.find(e);return f.each(function(){c.push({id:$(this).attr("id")||"",name:$(this).attr("name")||$(this).attr("title"),caption:$(this).attr("title")})}),c},_tabClick:function(a){var b,c,d;"span"===a.target.tagName.toLowerCase()?b=$(a.target).parent():"li"===a.target.tagName.toLowerCase()&&(b=$(a.target)),b.addClass("classification-focus").siblings().removeClass("classification-focus"),c=b.attr("id"),d=c.split("-"),$(".description-"+d[d.length-1]).show().siblings().hide(),$(".data-sources-derive-list-"+d[d.length-1]).show().siblings().hide()},_tabBox:function(a){function b(a){"j-tab-callback"==a?($(".norm-box").hide(),$("#j-box-callbackIndex").show()):($(".norm-box").hide(),$("#j-box-norm").show())}var c;"span"==a.target.tagName.toLowerCase()?(c=$(a.target).parent().attr("id"),b(c)):"li"==a.target.tagName.toLowerCase()&&(c=$(a.target).attr("id"),b(c))}})});