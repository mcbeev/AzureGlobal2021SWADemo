const fetch = require("node-fetch");

module.exports = async function (context, req) {
   // const url = 'https://app.symreport.com/rest/customtableitem.sc.workspace?format=json&columns=Workspacename&hash=1e0c875c6e091e1e62f2e714d4d2f53d4eb193cbbbc522ef62e36df134e95cce';
    const url = process.env.KenticoXperienceAPIEndpoint + process.env.KenticoXperienceSecurityHash; 
    await fetch(url)
        .then(response => response.json())
        .then(response => context.res.json(response)); 
}
