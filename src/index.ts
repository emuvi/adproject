import { QinColumn, QinLabel } from "qinpel-cps"

class AdProject extends QinColumn {

    private qinHello: QinLabel = new QinLabel("Hello, world!");

    public constructor() {
        super();
        this.qinHello.install(this);
    }

}

new AdProject().putAsBody();