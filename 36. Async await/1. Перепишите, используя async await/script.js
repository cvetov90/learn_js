"use strict";

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }
    throw new Error(response.status);
}

loadJson("no-such-user.json") // (3)
  .catch(alert); // Error: 404
