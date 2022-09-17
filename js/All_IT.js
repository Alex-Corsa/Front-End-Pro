class All_IT {
    constructor(specialist, direction) {
        this.specialist = specialist;
        this.direction = direction;
    }

    programmingLanguage(language) {
      return this.direction.includes(language)
        ? `This ${this.specialist} prefers to write in ${language}.`
        : `This ${this.specialist} does not write to ${language}.`
    }
}

console.log(All_IT)