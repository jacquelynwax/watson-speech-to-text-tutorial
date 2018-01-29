const WatsonSpeech = require("watson-speech")

// you may want to call a fetch in your front end that touches a back end route that uses your watson username and password to generate a token; you would potentially save your username and password in the secrets.js file included in this repo
const token = {watson_token}

document.querySelector('#button-start').addEventListener('click', () => {
  var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
    token: token,
  })

  stream.setEncoding('utf8') // get text instead of Buffers for on data events

  stream.on('data', function(data) {
    // log the data you're receiving back from Watson; you're probably applying some other functionality here
    console.log(data);
  })

  stream.on('error', function(err) {
    console.log(err);
  })

  document.querySelector('#button-stop').addEventListener('click', () => {
    stream.stop()
  })
})
