/**
*   @author mx
*   @date 2017.11.1修订
*   @desc 显示界面基类，处理皮肤添加，Y方向放缩，避免新手犯调用顺序，屏幕适配的错误
**/

module Jun {
    export class BasicView extends BasicUI {
        //进入VIEW的上一场景名
        public static P_NAME: string;
        //可选-view的唯一标识，通常用于场景管理（screen，alert）,推荐与类名保持一致
        //public static S_NAME : string = "BasicView";
        //可选-VIEW所从属的模块名
        //public static M_NAME : string;
        //可选-VIEW的显示类型，目前用于弹窗是否需要缩放
        //public static V_MODE : string;
        //可选-VIEW预加载组包含：图片资源，静态表，网络数据
        //public static mx_support() : Array<string>{}

        protected pre_init(): void {
            this.percentHeight = 100;//高度满屏
            this.init_view();
            this.mx_check_guide(this.name);
        }

        //必需-初始化场景
        protected init_view(): void { }
        //非必须-刷新当前场景
        public fresh_cview(data?: any): void { }

        public mx_in_cache(data?: any): void {//放入缓存中，置为不可见。
            this.visible = false;
            this.mx_do_in(data);//暂停或者移除，龙骨，MC，Tween,倒计时。
        }
        protected mx_do_in(data?: any): void { }

        public mx_out_cache(data?: any): void {//从缓存取换出，置为可见
            this.visible = true;
            this.mx_do_out(data);//恢复，龙骨，MC，Tween,倒计时。
            this.mx_check_guide(this.name);
        }
        protected mx_do_out(data?: any): void { }

        private get guide_name() : Array<string> {
            let arr = [
                AVGView.S_NAME, GuideScreen.S_NAME, ShengZhiAlert.S_NAME, AlertView.S_NAME, StartScreen.S_NAME,
                FightView.S_NAME, FightResultView.S_NAME, "ItemTip", XGSRenamePop.S_NAME, NewModular.S_NAME, 
                PrologueEffectView.S_NAME, GuideAniView.S_NAME, GuideZYAni.S_NAME, AVGHuiGuView.S_NAME,
                ShareHeroAlert.S_NAME, NhrcResultView.S_NAME, FzSelectView.S_NAME
            ];
            return arr;
        }
        
        protected mx_check_guide(cname : string) : void{
            if (MX_MARK.IN_GUIDE) {
                if (this.guide_name.indexOf(cname) > -1) {
                    return;
                }
                ApplicationFacade.getInstance().sendNotification(MX_NOTICE.GET_GUIDE, {
                    "sname": cname 
                });
            }
        }
    }
}