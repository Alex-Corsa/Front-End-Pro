class BackEndSenior extends BackEnd {
    constructor(specialist, direction, level, studying) {
        super(specialist, direction, level);
        this.studying = studying;
    }

    learning(framework) {
        return this.studying
        ? `This ${this.specialist} knows ${framework}`
        : `This ${this.specialist} is only studying ${framework}`
    }
}