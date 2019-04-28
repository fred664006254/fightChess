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
//GameCommand 监听CLIENT_INITED
var Jun;
(function (Jun) {
    var GameCommand = (function (_super) {
        __extends(GameCommand, _super);
        function GameCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameCommand.prototype.register = function () {
            this.facade.registerCommand(Jun.NOTICE.CLIENT_INITED, GameCommand);
        };
        GameCommand.prototype.execute = function (notification) {
            var data = notification.getBody();
            var name = notification.getName();
            var proxy = this.facade.retrieveProxy(Jun.GameProxy.NAME);
            switch (name) {
                case Jun.NOTICE.CLIENT_INITED:
                    proxy.init_game();
                    break;
            }
        };
        return GameCommand;
    }(puremvc.SimpleCommand));
    Jun.GameCommand = GameCommand;
    __reflect(GameCommand.prototype, "Jun.GameCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(Jun || (Jun = {}));
