//GameCommand 监听CLIENT_INITED
module Jun{
    export class GameCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
        public register() : void {
            this.facade.registerCommand(NOTICE.CLIENT_INITED,GameCommand);
        }

        public execute(notification:puremvc.INotification):void{
            let data = notification.getBody();
            let name = notification.getName();
            let proxy = <GameProxy><any> this.facade.retrieveProxy(GameProxy.NAME);
            switch(name){
                case NOTICE.CLIENT_INITED:
                    proxy.init_game();
                    break;
            }
        }
    }
}