namespace Singleton {
  class Singleton {
    private static singleton: Singleton = new Singleton();

    private constructor() {}
    public static getInstance(): Singleton {
      return Singleton.singleton;
    }

    public greet(): void {
      console.log('こんにちは');
    }
  }

  class Main {
    public main() {
      let instance = Singleton.getInstance();

      instance.greet();
    }
  }
  (new Main()).main();
}
