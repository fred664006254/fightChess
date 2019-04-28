/**
*   @author mx
*   @date 2015.1.3
*   @desc 显示UI基类,大小与皮肤保持一致
**/

module Jun {
    export class BasicUI extends eui.Component {
        public adata;//protected adata;

        public constructor(cd ?: any) {
            super();

            cd && (this.adata = cd);

            let c_class = this["__class__"] as string;
            let c_arr = c_class.split(".");
            this.name = c_arr[1];

            this.once(egret.Event.REMOVED_FROM_STAGE, this.remove_self, this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.once(eui.UIEvent.COMPLETE, this.mx_created, this);
        }

        //添加到舞台，然后绑定皮肤，然后初始化
        private onAddToStage(event:egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.set_skinname();
        }

        private mx_created(event:eui.UIEvent):void{
            this.removeEventListener(eui.UIEvent.COMPLETE, this.mx_created, this);
            this.pre_init();
        }

        protected remove_self() : void{
            let view = this;
            view.removeEventListener(egret.Event.ADDED_TO_STAGE, view.onAddToStage, view);
            view.removeEventListener(egret.Event.REMOVED_FROM_STAGE, view.remove_self, view);
            view.removeEventListener(eui.UIEvent.COMPLETE, view.mx_created, view);
            view.on_remove();
            view.removeChildren();
            // if(view instanceof BasicView){//UI不在执行释放资源操作
            //     PreloadTool.getInstance().recover_group(view.name);//清除已加载的资源组
            //     mx_try_gc();
            // }
        }

        //通用的绑定皮肤方法，子类可覆盖
        protected set_skinname() : void{
            Tools.set_skinname(this, this.name);
        }
        
        protected pre_init() : void{}//子类初始化操作
        protected on_remove() : void{}//子类移除方法，移除特有监听，龙骨，延迟调用等。
    }
}
window["Jun"] = Jun;