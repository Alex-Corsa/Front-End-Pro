class FullStackSenior extends FullStack {
    constructor(specialist, direction, level, studying) {
        super(specialist, direction, level);
        this.studying = studying;
    }

    createArchitecture(cleanСode) {
        return this.studying
        ? `This ${this.specialist} teaches to write ${cleanСode}`
        : `This ${this.specialist} does not teaches to write ${cleanСode}`
    }
}