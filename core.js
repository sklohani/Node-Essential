const path = require("path");
const util = require("util"); // Utility module
const v8 = require("v8");

// The Above const and require code can also be written as...
const{ log } = require("util");
log("It will only import log method from util.")

util.log(path.basename(__filename)); // Logs in console with time stamp.
util.log(" ^ The current file name.");

util.log(v8.getHeapStatistics()); // Heap Statistics - Memory Usage