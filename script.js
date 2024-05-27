const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".send-button");
const messageBox = document.querySelector(".message-box");
const switchBtn = document.querySelector(".switch-button");

let API_URL = "https://accurately-wanted-hyena.ngrok-free.app/get_chat?prompt="
let SENIOR_ID = "&senior_id=thYywbyoahbtZvw_&model="
let MODEL = "local"

/*"https://api.openai.com/v1/chat/completions";
let API_KEY = /*Get API KEY at https://platform.openai.com/account/api-keys */


switchBtn.onclick = function() {
  if (MODEL == "openai"){
    MODEL = "local";
  }
  else{
    MODEL = "openai";
  }
  alert("Switching Model to "+MODEL);
}

sendBtn.onclick = async function () {
  if(messageBar.value.length > 0){
    let UserTypedMessage = messageBar.value;
    messageBar.value = "";

    let message =
    `<div class="chat message">
    <img src="img/user.png">
    <span>
      ${UserTypedMessage}
    </span>
  </div>`;

  let response = 
  `<div class="chat response">
  <img src="img/chatbot.png">
  <span class= "new">...
  </span>
</div>`

  // const api_call = await fetch("https://accurately-wanted-hyena.ngrok-free.app/get_chat?prompt=How should I make my senior eat?&senior_id=thYywbyoahbtZvw_",{
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "ngrok-skip-browser-warning": true,
  //   }
  // });
  // const movies = await api_call;
  // console.log(movies);

    messageBox.insertAdjacentHTML("beforeend", message);

    setTimeout(() =>{
      messageBox.insertAdjacentHTML("beforeend", response);

      

      let URL = API_URL + UserTypedMessage + SENIOR_ID + MODEL;
      console.log(URL)

      fetch(URL,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
        }
      }).then(res => res.json()).then(data => {
        console.log(data);
        const ChatBotResponse = document.querySelector(".response .new");
        ChatBotResponse.innerHTML = data.message;
        ChatBotResponse.classList.remove("new");
      })
    }, 100);
  }
}