/**
*   @author qianjun
*   @date 2015.1.3
*   @desc 开始界面
**/

module Jun {
    export class StartScreen extends BasicView {
        public static S_NAME: string = "StartScreen";

        public static mx_support(): Array<string> {
            const arr = [
                // "assets.start",//locals
                // "assets.startskin",//res skin
                // "api.scres_config",//RES，SHICONGRES
                // "api.PNAME","api.GUIDEINFO"
            ];
            return arr;
        }
        //eui组件
       
        protected on_remove(): void {
            const view = this;
            //ApplicationFacade.getInstance().removeMediator(StartScreenMediator.NAME);
        }

        protected init_view(): void {
            const view = this;
           
        }
    }
}