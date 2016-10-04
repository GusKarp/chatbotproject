function returnTime() {
  var now = new Date(Date.now());
  var hours = now.getHours()
  var minutes = now.getMinutes()

  var timeString = hours + ":"  + minutes;
  return timeString;
}

var response = {
"What's brackin?":"Nothin much, I'm just chillin like a villian",
"How old are you?":"Man, age don't mean nothing",
"What is the answer to life the universe and everything?":"42",
"Hi":"Sup bluh",
"Where you from?":"Everywhere, but at the same time nowhere",
"What time is it?": "It is currently " + returnTime() + ".",
"How are you?":"I'm alright I guess",
"What are your plans for this election?":"Hope for a miracle",
"Where are you?":"Everywhere",
"What's your name?":"4NTH0NY"
}

function speak() {
  var userInput = $("#input").val();
  $("#chat-area").prepend(userInput + "<br>")
  var answer = response[userInput]
  $("#chat-area").prepend(answer + "<br>")
}

$(document).keydown(function(e) {
 if (e.keyCode == 13) {
   speak()
 }
});
