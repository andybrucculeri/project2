console.log("scripts loaded");
$(document).ready(function(){
var tiny = $('#tiny').tiny().data('api_tiny');
});

var i = 0;
var txt = 'BERLIN';
var speed = 700;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("berlintitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

$(".plus").click(function(){
 $(this).toggleClass("minus")  ;
})


/*
var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

*/

$(document).ready(function(){
    $(".video").mouseenter(function(){
            $('video', this).get(0).play();
            $(".video").css("visibility", "visible");
    });
    $(".video").mouseleave(function(){
        $(".video").css("visibility", "hidden");
          $('video', this).get(0).pause();
    });

});




$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'Is jQuery required for this plugin?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Well, if you don\'t include it, your quiz won\'t work'
    },
    {
      'q': 'How do you use it?',
      'options': [
        'Include jQuery, that\'s it!',
        'Include jQuery and the plugin javascript.',
        'Include jQuery, the plugin javascript, the optional plugin css, required markup, and the javascript configuration.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Sounds more complicated than it really is.',
      'incorrectResponse': 'Come on, it\'s not that easy!'
    },
    {
      'q': 'The plugin can be configured to require a perfect score.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'You\'re a genius! You just set allowIncorrect to true.',
      'incorrectResponse': 'Why you have no faith!? Just set allowIncorrect to true.'
    },
    {
      'q': 'How do you specify the questions and answers?',
      'options': [
        'MySQL database',
        'In the HTML',
        'In the javascript configuration'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Refer to the documentation for the structure.',
      'incorrectResponse': 'Wrong! Do it in the javascript configuration. You might need to read the documentation.'
    }
  ]
});
