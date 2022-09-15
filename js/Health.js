class Health {
  constructor() {
    this.numberHealth = 10;
  }

  createHealth() {
    this.healthElem = document.getElementById("health");
    this.healthElem.innerHTML = `&#9829; ${this.numberHealth}`;
  }

  removeHealth() {
    this.numberHealth--;
    this.healthElem.innerHTML = `&#9829; ${this.numberHealth}`;
  }
}
