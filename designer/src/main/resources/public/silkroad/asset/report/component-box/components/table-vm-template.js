define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=b.id,f="";return f+='<!--table区域-->\r\n<div class="comp-box di-o_o-block" data-o_o-di="',f+=d(e),f+='">\r\n    <div class="di-o_o-line">\r\n        <div class="" data-o_o-di="',f+=d(e),f+='-vu-table-breadcrumb"></div>\r\n    </div>\r\n    <div class="di-o_o-line">\r\n        <div class="vu-table" data-o_o-di="',f+=d(e),f+='-vu-table" style="height: 160px;"></div>\r\n    </div>\r\n    <div class="di-o_o-line" style="float: left">\r\n        <div class="di-table-prompt">\r\n            <div class="di-table-count" data-o_o-di="',f+=d(e),f+='-vu-table-count">\r\n                符合查询条件的数据只显示\r\n                <span class="di-table-count-num">#{currRecordCount}</span>条。\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="di-o_o-line table-download">\r\n        <div class="di-o_o-item" data-o_o-di="',f+=d(e),f+='-vu-table-download"></div>\r\n    </div>\r\n</div>'}return{render:b}});