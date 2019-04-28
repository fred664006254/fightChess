/**
 *   @author Qianjun
 *   @date 2014.12.28
 *   @desc view层viewroot,用于界面变换
 **/
module Jun {
    export class AppContainer extends eui.UILayer {
        // private _loadview: PopLoadView;//加載进度条
        private _screen_g: eui.Group;//场景组
        private _pop_g: eui.Group;//弹窗组
        private _guide_g: eui.Group;//引导层，飘字层、动画层。
        private _top_g: eui.Group;//游戏顶层-暂不使用
        private popedView: any;

        public constructor(view) {
            super();

            let s_h = egret.MainContext.instance.stage.stageHeight;
            let stageWidth = Jun.GameConfig.stageWidth;
            let stageHeight = Jun.GameConfig.stageHeith;

            let g_arr = ["_screen_g", "_pop_g", "_guide_g", "_top_g"];
            for (let k in g_arr) {
                let c_g = new eui.Group();
                c_g.width = stageWidth;
                c_g.touchEnabled = false;
                c_g.height = Math.min(s_h, stageHeight);
                c_g.verticalCenter = 0;
                c_g.horizontalCenter = 0;
                view.addChild(c_g);
                c_g.name = g_arr[k];
                this[g_arr[k]] = c_g;
            }

            let h_2 = (s_h + stageHeight) / 2;
            if (s_h > stageHeight) {//大屏适配
                let top_p = new eui.Image();
                top_p.source = "zhezhaoimage_jpg";
                top_p.bottom = h_2;
                top_p.scaleY = -1;
                top_p.horizontalCenter = 0;//水平
                view.addChild(top_p);

                let bottom_p = new eui.Image();
                bottom_p.source = "zhezhaoimage_jpg";
                bottom_p.top = h_2;
                bottom_p.horizontalCenter = 0;//水平
                view.addChild(bottom_p);
            }

            let s_w = egret.MainContext.instance.stage.stageWidth;
            if(s_w > stageWidth){//宽屏适配
                let o_y = (s_w + stageWidth) / 2;
                let left_p = new eui.Image();
                left_p.source = "zhezhaoleft_jpg";
                left_p.right = o_y;
                left_p.verticalCenter = 0;//垂直
                view.addChild(left_p);

                let right_p = new eui.Image();
                right_p.source = "zhezhaoleft_jpg";
                right_p.left = o_y;
                right_p.scaleX = -1;
                right_p.verticalCenter = 0;//垂直
                view.addChild(right_p);
            }
        }
    }
}