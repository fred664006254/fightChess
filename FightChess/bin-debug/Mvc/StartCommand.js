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
*   @desc StartupCommand 启动命令,项目启动后用于初始化M,V,C 命令
**/
var Jun;
(function (Jun) {
    var StartupCommand = (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //携带的消息会依次传递给子消息
        StartupCommand.prototype.initializeMacroCommand = function () {
            this.addSubCommand(Jun.ModelPrepCommand); //model管理器
            this.addSubCommand(Jun.ViewPrepCommand); //view管理器
            this.addSubCommand(Jun.ControllerPrepCommand); //controller管理器
        };
        return StartupCommand;
    }(puremvc.MacroCommand));
    Jun.StartupCommand = StartupCommand;
    __reflect(StartupCommand.prototype, "Jun.StartupCommand");
})(Jun || (Jun = {}));
