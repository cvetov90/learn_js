class ExtendedClock extends Clock {
    constructor({template, precision}) {
        super({template})
        this.precision = precision ?? 1000
    }

    start() {
        super.render()
        this.timer = setInterval(() => super.render(), this.precision);
    }
}