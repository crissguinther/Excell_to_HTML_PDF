const Processor = require("./src/classes/Processor");
const Reader = require("./src/classes/Reader");
const Table = require("./src/classes/Table");
const HTMLParser = require("./src/classes/HTMLParser");
const Writer = require("./src/classes/Writer");
const PDFWriter = require("./src/classes/PDFWriter");

const reader = new Reader();

async function main() {
  let data = await reader.Read("./tasks.csv");
  let processedData = Processor.Process(data);

  const table = new Table(processedData);
  const html = await HTMLParser.Parse(table);

  const writer = new Writer();
  writer.Write(Date.now() + ".html", html);

  PDFWriter.WritePDF(`${Date.now()}.pdf`, html);
}

main();
