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
                
            ];
        }

        public handleNotification(notification: puremvc.INotification): void {
            let data: any = notification.getBody();
            let main = <AppContainer><any>(this.viewComponent);

            switch (notification.getName()) {
                default:
                    break;
            }
        }
    }
}