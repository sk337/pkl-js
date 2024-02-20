import { spawn } from "child_process";

interface pklConfig {
  executable: string;
}

interface Parser {
  inputFile: string;
  config: pklConfig;
}

class Parser {
  constructor(inputFile: string, config?: pklConfig) {
    this.inputFile = inputFile;
    this.config = config ? config : { executable: "pkl" };
  }

  parse(): Promise<object> {
    return new Promise((resolve, reject) => {
      const process = spawn(this.config["executable"], [
        "eval",
        this.inputFile,
        "-f",
        "json",
        "-o",
        "/dev/stdout",
      ]);
      let buffer = "";
      process.stdout.on("data", (data) => {
        console.log(data.toString());
        buffer += data.toString();
      });
      process.stderr.on("data", (data) => {
        reject(data.toString());
      });
      process.on("close", (code) => {
        if (code === 0) {
          resolve(JSON.parse(buffer));
        } else {
          reject("Failed to parse file");
        }
      });
    });
  }
}

export { Parser };
