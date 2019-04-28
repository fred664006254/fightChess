/**
*   @author Junix
*   @desc 控制层命令, 注册所有command  
**/
module Jun {
    export class ControllerPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
        public execute(notification:puremvc.INotification):void{
            (new GameCommand()).register();
        }
    }
}