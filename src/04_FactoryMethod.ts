namespace FactoryMethod {
  abstract class Product {
    abstract use(): void;
  }

  abstract class Factory {
    create(owner: string): Product {
      const p = this.createProduct(owner);
      this.registerProduct(p);
      return p;
    }

    abstract createProduct(owner: string): Product;
    abstract registerProduct(product: Product): void;
  }

  class IDCard extends Product {
    private owner: string;
    constructor(owner: string) {
      super();
      console.log(owner + "のカードを作ります。");
      this.owner = owner;
    }
    use(): void {
      console.log(this.owner + "のカードを使います。");
    }
    getOwner(): string {
      return this.owner;
    }
  }

  class IDCardFactory extends Factory {
    private owners: string[] = [];

    createProduct(owner: string): Product {
      return new IDCard(owner);
    }
    registerProduct(product: Product): void {
      this.owners.push((product as IDCard).getOwner());
    }
    public getOwners(): string[] {
      return this.owners;
    }
  }

  class Main {
    main() {
      const factory = new IDCardFactory();
      const card1 = factory.create("つざき");
      const card2 = factory.create("ふじいかぜ");
      const card3 = factory.create("ほしのげん");
      card1.use();
      card2.use();
      card3.use();
    }
  }
  new Main().main();
}
