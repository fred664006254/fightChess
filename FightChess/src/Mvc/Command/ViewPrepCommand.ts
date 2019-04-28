/*
*   @author Junix
*   @desc 显示层命令,V层只注册跟容器的mediator 具体场景的mediator可去对应的view下注册

**/
module Jun {
	export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
		public execute(notification:puremvc.INotification):void{
            let main:AppContainer = notification.getBody();
			this.facade.registerMediator(new ApplicationMediator(main));
		}
	}
}