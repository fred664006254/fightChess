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
*   @author Junix
*   @desc 控制层命令, 注册所有command
**/
var Jun;
(function (Jun) {
    var ControllerPrepCommand = (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ControllerPrepCommand.prototype.execute = function (notification) {
            (new Jun.GameCommand()).register();
        };
        return ControllerPrepCommand;
    }(puremvc.SimpleCommand));
    Jun.ControllerPrepCommand = ControllerPrepCommand;
    __reflect(ControllerPrepCommand.prototype, "Jun.ControllerPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(Jun || (Jun = {}));
