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
*	@author Junix
*	@desc 引擎面门，用于启动整个项目
**/
var Jun;
(function (Jun) {
    var ApplicationFacade = (function (_super) {
        __extends(ApplicationFacade, _super);
        function ApplicationFacade() {
            return _super.call(this) || this;
        }
        ApplicationFacade.getInstance = function () {
            if (this.instance == null) {
                this.instance = new ApplicationFacade();
            }
            return (this.instance);
        };
        ApplicationFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(Jun.NOTICE.STARTUP, Jun.StartupCommand);
        };
        /**
         * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
         * @param rootView:PureMVC应用程序的根视图root，包含其它所有的View Componet
         */
        ApplicationFacade.prototype.startUp = function (rootView) {
            this.sendNotification(Jun.NOTICE.STARTUP, rootView);
            this.removeCommand(Jun.NOTICE.STARTUP);
        };
        return ApplicationFacade;
    }(puremvc.Facade));
    Jun.ApplicationFacade = ApplicationFacade;
    __reflect(ApplicationFacade.prototype, "Jun.ApplicationFacade", ["puremvc.IFacade", "puremvc.INotifier"]);
})(Jun || (Jun = {}));
