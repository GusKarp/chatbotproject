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
"What time is it?": "It is currently " + returnTime() + "."
}

function speak() {
  var userInput = $("#input").val();
  $("#chat-area").prepend(userInput + "<br>")
  var answer = response[userInput]
  $("#chat-area").prepend(answer + "<br>")
}
