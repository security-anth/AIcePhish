//メール文面入手
// The user clicked our button, get the active tab in the current window using
// the tabs API.
let tabs = await messenger.tabs.query({ active: true, currentWindow: true });

// Get the message currently displayed in the active tab, using the
// messageDisplay API. Note: This needs the messagesRead permission.
// The returned message is a MessageHeader object with the most relevant
// information.
let message = await messenger.messageDisplay.getDisplayedMessage(tabs[0].id);

// Update the HTML fields with the message subject and sender.
//document.getElementById("subject").textContent = message.subject;
//document.getElementById("from").textContent = message.author;

// Request the full message to access its full set of headers.
let full = await messenger.messages.getFull(message.id);

let content_type = full.parts[0]['contentType'];
console.log(content_type);

var mail_body;
if (content_type == "text/plain"){
    mail_body = full.parts[0].body;
    //console.log(mail_body);
}
else if (content_type == "text/html"){
    console.log("text/html is not supported.");
}
else if (content_type == "multipart/alternative" || content_type == "multipart/mixed") {
    mail_body = full.parts[0].parts[0].body;
    //console.log(mail_body);
}
else {
    console.log("Unknown contentType.");
}


//console.log(full);
//console.log(full.parts[0]);
//console.log(full.parts[0].parts[0].body);
//document.getElementById("received").textContent = full.headers.received[0];
analyze(mail_body);