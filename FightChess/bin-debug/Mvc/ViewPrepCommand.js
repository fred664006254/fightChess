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
/*
*   @author Junix
*   @desc 显示层命令,V层只注册跟容器的mediator 具体场景的mediator可去对应的view下注册

**/
var Jun;
(function (Jun) {
    var ViewPrepCommand = (function (_super) {
        __extends(ViewPrepCommand, _super);
        function ViewPrepCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ViewPrepCommand.prototype.execute = function (notification) {
            var main = notification.getBody();
            this.facade.registerMediator(new Jun.ApplicationMediator(main));
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    Jun.ViewPrepCommand = ViewPrepCommand;
    __reflect(ViewPrepCommand.prototype, "Jun.ViewPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(Jun || (Jun = {}));
