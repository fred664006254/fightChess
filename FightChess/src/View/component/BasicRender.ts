/**
 *   @author mx
 *   @date 2014.12.28
 *   @desc 基本的XY定位render
 **/

module Jun{
    export class BasicRender extends eui.ItemRenderer {
        public constructor(){
            super();

            this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.remove_self, this);
            this.once(eui.UIEvent.COMPLETE, this.mx_created, this);
        }

        private onAddToStage(event:egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.set_skinname();
        }

        private mx_created(event:eui.UIEvent):void{//在createChildren,partadded之后执行
            this.removeEventListener(eui.UIEvent.COMPLETE, this.mx_created, this);
            this.init_render();
            if(this.data){
                this.dataChanged();
            }
        }

        private remove_self(e:any) : void{
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove_self, this);
            this.removeEventListener(eui.UIEvent.COMPLETE, this.mx_created, this);
            this.on_remove();
            this.data = null;
            this.removeChildren();
        }

        //通用的绑定皮肤方法，子类可覆盖
        protected set_skinname() : void{
            let c_class = this["__class__"] as string;
            let c_arr = c_class.split(".");//mx.basicview
            Tools.set_skinname(this, c_arr[1]);
        }
        
        protected dataChanged(): void {
            let data = this.data;
            if (!data || !this.skin) {
                return;
            }
            this.mx_dataChanged();
        }

        protected mx_dataChanged() : void{}
        protected init_render() : void{}
        protected on_remove() : void{}
    }
}