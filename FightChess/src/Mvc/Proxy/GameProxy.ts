//GameProxy 相关数据处理
module Jun{
    export class GameProxy extends puremvc.Proxy implements puremvc.IProxy{
        public static NAME : string = 'GameProxy';

        public constructor(){
            super(GameProxy.NAME);
        }

        //对应处理
        public init_game() : void{
            console.log('初始成功');
        }

        public init_server_data(cd: any): void {
            this.sendNotification(NOTICE.CHECK_INIT);
        }
    }
}