let bot = new RiveScript();

let user_input = document.getElementById("user_input");
let chat_window = document.getElementById("chat_window");

bot.loadFile("matbot.rive", () => {console.log("Chatbot ready.")}, () => {console.log("Chatbot error.")});
bot.sortReplies();

function send_input() {
    let input_string = user_input.value;
    chat_window.value += "\n\nDig: " + input_string;

    console.log(input_string);
    
    let reply = bot.reply("local-user", input_string);
    chat_window.value += "\n\nMB: " + reply;

    chat_window.scrollTop = chat_window.scrollHeight;
    user_input.value = "";
}