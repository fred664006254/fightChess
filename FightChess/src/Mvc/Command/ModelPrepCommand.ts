/**
*   @author Junix
*   @desc 数据层命令,注册所有的model
**/
module Jun {
	export class ModelPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
		public execute(notification : puremvc.INotification) : void{
        	this.facade.registerProxy(new GameProxy());
		}
	}
}