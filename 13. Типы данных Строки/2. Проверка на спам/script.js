"use strict";

function checkSpam(str) {
  let testStr = str.toLowerCase();
  return testStr.includes("viagra") || testStr.includes("xxx");
}

checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;
