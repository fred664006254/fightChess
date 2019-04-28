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
            this.check_enter_screen();
        }

        private check_enter_screen(): void {
            switch (AppConfig.OPENMODE) {
                default:
                    this.sendNotification(NOTICE.SCENE_CHANGE, StartScreen.S_NAME);
                    break;
            }
        }
    }
}