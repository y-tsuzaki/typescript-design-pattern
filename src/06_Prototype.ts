import clone from "clone";

namespace Prototype {
  interface Clonable {
    createClone: () => Clonable;
  }
  interface Product extends Clonable {
    use: (s: string) => void;
    createClone: () => Product;
  }

  class Manager {
    showcase: { [key: string]: Product } = {};
    register(name: string, proto: Product) {
      this.showcase[name] = proto;
    }

    create(protoName: string): Product {
      const p: Product = this.showcase[protoName];
      return p.createClone();
    }
  }

  class MessageBox implements Product {
    symbol: string;
    constructor(symbol: string) {
      this.symbol = symbol;
    }
    use(s: string): void {
      console.log(`this is messagebox. ${this.symbol}. ${s}`);
    }
    createClone(): Product {
      return clone<Product>(this);
    }
  }

  class UnderlinePen implements Product {
    symbol: string;
    constructor(symbol: string) {
      this.symbol = symbol;
    }
    use(s: string): void {
      console.log(`this is underlinepen. ${this.symbol}. ${s}`);
    }
    createClone(): Product {
      return clone<Product>(this);
    }
  }

  class Main {
    main() {
      const manager = new Manager();

      const pen = new UnderlinePen("-");
      const box1 = new MessageBox("+");
      const box2 = new MessageBox("*");

      manager.register("pen1", pen);
      manager.register("box1", box1);
      manager.register("box2", box2);

      const p1 = manager.create("pen1");
      p1.use("hello");
      const b1 = manager.create("box1");
      b1.use("hello");
      const b2 = manager.create("box2");
      b2.use("hello");
    }
  }

  new Main().main();
}
