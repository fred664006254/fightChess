var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 *   @author Qianjun
 *   @date 2014.12.28
 *   @desc view层viewroot,用于界面变换
 **/
var Jun;
(function (Jun) {
    var AppContainer = (function (_super) {
        __extends(AppContainer, _super);
        function AppContainer(view) {
            return _super.call(this) || this;
        }
        return AppContainer;
    }(eui.UILayer));
    Jun.AppContainer = AppContainer;
    __reflect(AppContainer.prototype, "Jun.AppContainer");
})(Jun || (Jun = {}));
