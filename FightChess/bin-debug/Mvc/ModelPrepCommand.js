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
*   @desc 数据层命令,注册所有的model
**/
var Jun;
(function (Jun) {
    var ModelPrepCommand = (function (_super) {
        __extends(ModelPrepCommand, _super);
        function ModelPrepCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ModelPrepCommand.prototype.execute = function (notification) {
            this.facade.registerProxy(new Jun.GameProxy());
        };
        return ModelPrepCommand;
    }(puremvc.SimpleCommand));
    Jun.ModelPrepCommand = ModelPrepCommand;
    __reflect(ModelPrepCommand.prototype, "Jun.ModelPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(Jun || (Jun = {}));
