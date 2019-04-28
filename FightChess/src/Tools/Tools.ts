module Jun {
        class JunTools {
        private static instance: JunTools;
        public static getInstance(): JunTools {
            if (!JunTools.instance) {
                JunTools.instance = new JunTools();
            }
            return JunTools.instance;
        }

        public set_skinname(view: eui.Component, name: string): void {
            let skin = this.get_skinname(name);
            skin && (view.skinName = skin);
        }

        public get_skinname(name): any {
            let skin;
            let cname = name + "Skin";
            let skins = window && window["skins"];
            if (skins && skins[cname]) {
                skin = skins[cname];
            } else if (RES.hasRes(cname + "_exml")) {
                skin = RES.getRes(cname + "_exml");//默认使用立刻获取的方式
            }
            return skin;
        }
    }
    export var Tools: JunTools = JunTools.getInstance();
}