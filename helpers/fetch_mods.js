//module "fetch_mods.js"
const fetch = require('node-fetch');

function postData(url = ``, data = {}) {
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json: charset=utf-8"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data),
    })
    .then(response => console.log(response));
}

module.exports.postData = postData;