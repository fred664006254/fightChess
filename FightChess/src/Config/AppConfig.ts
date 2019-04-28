/**
 * mx@2016/05/24
 * 项目基本配置
 **/

module Jun {
    export class AppConfig {
        public static PREV_SCENE_ID : string;//上一個場景
        public static CURR_SCENE_ID : string;//當前場景

        public static get holdRes() : Array<string> {
            return ["public", "load", "avg", "main", "mainskin", "recharge", "loadskin", "preskin", "fight3", "fight2"];
        }

        public static get GameTag() : string {
            return window && window["MXGameTag"] || "H5";
        } 

        public static get MXTag() : string {
            return (window && window["MXTag"]) || "dev";
        } 

        public static get OPENMODE() : string{
            return Main.OPENMODE || window["OPENMODE"];
        }

        public static get HB_ID() : string{
            return Main.HB_ID || window["hb_id"];
        }

        public static SERVER_ADD(type : string) : string {//服务器地址
            let base;
            switch (AppConfig.MXTag) {
                case "dev"://本地开发
                    base = "https://nh.hdyouxi.com/gong3_wxtest/";
                    break;
                default://线上H5
                    base = "https://sqg3.hdyouxi.com/";
                    break;
            }
            
            switch(type){//准备兼容其他接口，比如登录。
                case "net"://内部请求接口
                case "pnet"://内部请求接口
                    base += "index.php/Index/api";
                    break;
                default:
                    base += ("index.php/" + type);
                    break;
            }

            return base;
        }

        public static get WEBS_ADD() : string{
            switch (AppConfig.MXTag) {
                case "dev"://本地开发
                    return "wss://nhbx_test.nibaguai.com/ws";
                default://手Q
                    return "wss://nhbx_qq.nibaguai.com/ws";
            }
        }

        public static get VERSION() : string {
            return (window && window["MX_VERSION"]) || "mx";
        }

        public static get RESPATH() : string {
            return (window && window["MX_RESPATH"]) || "resource/";
        }

        public static get RESBASE() : string {
            return (window && window["MX_RESBASE"]) || "base/";
        }

        public static get RESLOCAL() : string {
            return (window && window["MX_RESLOCAL"]) || "local/";
        }

        public static get RESCACHE() : string {
            return (window && window["MX_RESCACHE"]) || "cache/";
        }

        public static get JSONCACHE() : string {
            return (window && window["MX_JSONCACHE"]) || "base.json";
        }

        public static get MX_EUIPATH() : string {
            return (window && window["MX_EUIPATH"]) || "local/";
        }

        public static get JSON_PATH() : string {
            return (window && window["MX_JSONPATH"]) || "https://nh.hdyouxi.com/gong3_wxtest/json/json2/";
        }
    }
}