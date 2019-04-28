/**
*   @author Junix
*   @desc StartupCommand 启动命令,项目启动后用于初始化M,V,C 命令
**/
module Jun{
	export class StartupCommand extends puremvc.MacroCommand{
		//携带的消息会依次传递给子消息
		public initializeMacroCommand():void{
			this.addSubCommand(ModelPrepCommand);//model管理器
			this.addSubCommand(ViewPrepCommand);//view管理器
			this.addSubCommand(ControllerPrepCommand);//controller管理器
		}
	}
}