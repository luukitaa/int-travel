class Accommodation {
  #name: string;
  #cost: number;

  constructor(name: string, cost: number) {
    this.#name = "";
    this.#cost = 0;
    this.setName(name);
    this.setCost(cost);
  }

  getName(): string {
    return this.#name;
  }

  getCost(): number {
    return this.#cost;
  }

  setName(name: string): void {
    if (!name || name.trim() === "") {
      throw new Error("Name is required");
    }
    this.#name = name;
  }

  setCost(cost: number): void {
    if (typeof cost !== "number" || Number.isNaN(cost) || cost < 0) {
      throw new Error("Cost must be a number greater than or equal to 0");
    }
    this.#cost = cost;
  }
}

export default Accommodation;
