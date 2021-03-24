// 継承でAdapterを実現するパターン
namespace Adapter_Inheritance {
  interface Print {
    printWeek(): void;
    printStrong(): void;
  }

  class Banner {
    private str: string;

    constructor(str: string) {
      this.str = str;
    }

    public showWithParen(): void {
      console.log("(" + this.str + ")");
    }

    public showWithAster(): void {
      console.log("*" + this.str + "*");
    }
  }

  // 継承でAdapterを実現するパターン
  class PrintBanner extends Banner implements Print {
    constructor(str: string) {
      super(str);
    }

    printWeek(): void {
      this.showWithParen();
    }
    printStrong(): void {
      this.showWithAster();
    }
  }

  const print:Print = new PrintBanner("aaa");
  print.printStrong();
  print.printWeek();
}

// 委譲を使ったもの
namespace Adapter_Delegation {
  abstract class Print {
    abstract printWeek(): void;
    abstract printStrong(): void;
  }

  class Banner {
    private str: string;

    constructor(str: string) {
      this.str = str;
    }

    public showWithParen(): void {
      console.log("(" + this.str + ")");
    }

    public showWithAster(): void {
      console.log("*" + this.str + "*");
    }
  }

  class PrintBanner extends Print {
    private banner: Banner;

    constructor(str: string) {
      super();
      this.banner = new Banner(str);
    }

    printWeek(): void {
      this.banner.showWithParen();
    }
    printStrong(): void {
      this.banner.showWithAster();
    }
  }

  const print:Print = new PrintBanner("bbb");
  print.printStrong();
  print.printWeek();
}
