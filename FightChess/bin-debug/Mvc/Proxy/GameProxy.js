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
//GameProxy 相关数据处理
var Jun;
(function (Jun) {
    var GameProxy = (function (_super) {
        __extends(GameProxy, _super);
        function GameProxy() {
            return _super.call(this, GameProxy.NAME) || this;
        }
        //对应处理
        GameProxy.prototype.init_game = function () {
            console.log('初始成功');
        };
        GameProxy.NAME = 'GameProxy';
        return GameProxy;
    }(puremvc.Proxy));
    Jun.GameProxy = GameProxy;
    __reflect(GameProxy.prototype, "Jun.GameProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
})(Jun || (Jun = {}));
