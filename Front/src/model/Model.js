export default class Model {
  constructor() {
    this.expression = "";
    this.notRepeatingSymb = "+-=/*.";
    this.history = [];
  }

  clear() {
    this.expression = "";
    console.log(this.expression);
  }

  push(item) {
    if (item == "cos" || item == "sin" || item == "tan" || item == "log") {
      this.engFunctions(item);
    } else {
      if (
        !(
          this.notRepeatingSymb.indexOf(
            this.expression[this.expression.length - 1]
          ) > -1 && this.notRepeatingSymb.indexOf(item) > -1
        )
      )
        this.expression += item;
    }
  }
  engFunctions(item) {
    const solution = `Math.${item}(${this.expression}*(Math.PI/180))`;
    this.expression = eval(solution).toFixed(7);
  }
  async calculate() {
    try {
      const solution = eval(this.expression);
      // this.history.push(`${this.expression}=${solution}`);
      await this.sendHistoryItemOnServer(`${this.expression}=${solution}`);
      await this.getHistoryFromServer();
      this.expression = solution.toString();
    } catch (e) {
      console.log(e);
    }
  }

  async getHistoryFromServer() {
    this.history = [];
    await fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => {
        res.items.forEach((item) => {
          this.history.push(item.item);
        });
      });
  }
  async sendHistoryItemOnServer(item) {
    fetch("http://localhost:3000/push", {
      method: "POST",
      body: JSON.stringify({ item: item }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async clearHistory() {
    await fetch("http://localhost:3000/clear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await this.getHistoryFromServer();
  }
}
