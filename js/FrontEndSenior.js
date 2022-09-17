class FrontEndSenior extends FrontEnd {
    constructor(specialist, direction, level, studying) {
        super(specialist, direction, level);
        this.studying = studying;
    }

    createArchitecture(framework) {
        return this.studying
        ? `This ${this.specialist} knows ${framework}`
        : `This ${this.specialist} is only studying ${framework}`
    }
}


