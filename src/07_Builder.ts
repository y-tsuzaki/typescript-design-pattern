var fs = require("fs");

namespace Builder {
  abstract class Builder {
    abstract makeTitle(title: string): void;
    abstract makeString(str: string): void;
    abstract makeItems(items: string[]): void;
    abstract close(): void;
  }

  class Director {
    private builder: Builder;

    constructor(builder: Builder) {
      this.builder = builder;
    }

    constract(): void {
      this.builder.makeTitle("タイトル");
      this.builder.makeString("これは本文");
      this.builder.makeItems(["りんご", "ごりら", "ラッパ"]);
      this.builder.makeString("これも本文");
      this.builder.makeItems(["プロテイン", "グルタミン", "ケトジェニック"]);
      this.builder.close();
    }
  }

  class TextBuilder extends Builder {
    private buffer: string = "";

    makeTitle(title: string): void {
      this.buffer += "===============================\n";
      this.buffer += `「${title}」\n\n`;
    }
    makeString(str: string): void {
      this.buffer += `□${str}\n\n`;
    }
    makeItems(items: string[]): void {
      items.forEach((item) => {
        this.buffer += `- ${item} \n`;
      });
      this.buffer += "\n";
    }

    close(): void {
      this.buffer += "===============================\n";
    }

    getResult(): string {
      return this.buffer;
    }
  }

  class MarkDownBuilder extends Builder {
    private buffer: string = "";

    makeTitle(title: string): void {
      this.buffer += `# ${title}\n\n`;
    }
    makeString(str: string): void {
      this.buffer += `${str}\n\n`;
    }
    makeItems(items: string[]): void {
      items.forEach((item) => {
        this.buffer += `- ${item} \n`;
      });

      this.buffer += "\n";
    }

    close(): void {
      this.buffer;
      fs.writeFileSync("output.txt", this.buffer);
    }

    getResult(): string {
      return "output.txt";
    }
  }

  class Main {
    main() {
      {
        const textBuilder = new TextBuilder();
        const director = new Director(textBuilder);
        director.constract();
        const result = textBuilder.getResult();
        console.log(result);
      }

      {
        const markDownBuilder = new MarkDownBuilder();
        const director = new Director(markDownBuilder);
        director.constract();
        const result = markDownBuilder.getResult();
        console.log(result);
        fs.readFile(result, "utf-8", (_err: any, data: any) => {
          console.log(data);
        });
      }
    }
  }
  new Main().main();
}
