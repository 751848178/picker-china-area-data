const { NameCodeMap, CodeNameMap, areaData } = require("./initChinaAreaData");
const fs = require("fs");

fs.writeFileSync("./src/data/NameCodeMap.json", JSON.stringify(NameCodeMap));
fs.writeFileSync("./src/data/CodeNameMap.json", JSON.stringify(CodeNameMap));
fs.writeFileSync("./src/data/areaData.json", JSON.stringify(areaData));