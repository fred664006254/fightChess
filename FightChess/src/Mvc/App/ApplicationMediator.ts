/**
*   @author qianjun
*   @date 2014.12.28
*   @desc 根容器的Mediator
**/

module Jun {

    export class ApplicationMediator extends puremvc.Mediator implements puremvc.IMediator {
        public static NAME: string = "ApplicationMediator";

        public constructor(viewComponent: any) {
            super(ApplicationMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NOTICE.CHECK_INIT,//检查游戏初始化完成，需要资源及用户数据都获取到
            ];
        }

        public handleNotification(notification: puremvc.INotification): void {
            let data: any = notification.getBody();
            let main = <AppContainer><any>(this.viewComponent);

            switch (notification.getName()) {
                case NOTICE.CHECK_INIT:
                    this.check_enter_game();
                    break;
                default:
                    break;
            }
        }

        private check_enter_game(): void {
            if (!Lang || !MX_SERD.server_list.length) {//等待初始化完成
                return;
            }

            if (Tools.can_local_s) {//可以存储
                let cstate: any = egret.localStorage.getItem(MX_COMMON.MX_MLS_KEY);//背景音乐
                if (cstate) {
                    if (cstate == "close") {
                        MX_COMMON.MUSIC_PLAY = false;
                    }
                } else {
                    egret.localStorage.setItem(MX_COMMON.MX_MLS_KEY, "open");
                }
                cstate = egret.localStorage.getItem(MX_COMMON.MX_MELS_KEY);//音效
                if (cstate) {
                    if (cstate == "close") {
                        MX_COMMON.MUSIC_EFFECT_PLAY = false;
                    }
                } else {
                    egret.localStorage.setItem(MX_COMMON.MX_MELS_KEY, "open");
                }
            } else {
                MX_COMMON.MUSIC_PLAY = false;//默认关闭背景音乐
                MX_COMMON.MUSIC_EFFECT_PLAY = false;//默认关闭音效
                this.sendNotification(MX_NOTICE.SHOW_TOP_UI, { "text": Lang.p0100 });
            }

            let mxr = mx_get_opt("mxr");
            if (mxr) {//已经校验过了，直接进入游戏
                this.check_enter_screen();
                return;
            }

            let share_sid = mx_get_opt("mx_share_sid");//分享者sid
            if (share_sid) {//从分享链接进入
                if (AppConfig.MXTag.indexOf("h5") == -1) {//非H5渠道，不需要校验平台
                    this.check_enter_screen();
                } else {
                    this.check_plat();//校验分享
                }
            } else {
                this.check_enter_screen();
            }
        }
    }
}