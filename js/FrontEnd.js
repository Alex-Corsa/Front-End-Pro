class FrontEnd extends All_IT {
    constructor(specialist, direction, level) {
        super(specialist, direction);
        this.level = level;
    }

    experience(time) {
        return this.level <= time
        ? `This ${this.specialist} has been working for ${time}`
        : `This speci${this.specialist}alist has not been working for ${time}`
    }
}