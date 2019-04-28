/**
*   @author qianjun
*   @date 2014.12.28
*   @desc 根容器的Mediator
**/
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
var Jun;
(function (Jun) {
    var ApplicationMediator = (function (_super) {
        __extends(ApplicationMediator, _super);
        function ApplicationMediator(viewComponent) {
            return _super.call(this, ApplicationMediator.NAME, viewComponent) || this;
        }
        ApplicationMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        ApplicationMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            var main = (this.viewComponent);
            switch (notification.getName()) {
                default:
                    break;
            }
        };
        ApplicationMediator.NAME = "ApplicationMediator";
        return ApplicationMediator;
    }(puremvc.Mediator));
    Jun.ApplicationMediator = ApplicationMediator;
    __reflect(ApplicationMediator.prototype, "Jun.ApplicationMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(Jun || (Jun = {}));
