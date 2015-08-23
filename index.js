angular.module("portApp", []).
controller("projectsCtrl", function ($scope) {
  $scope.thumbs = [
    {
      url: "http://tourn171.github.io/FCC-Ziplines/weather.html",
      "img": "'http://i.imgur.com/aqRuu7m.png'",
      title: "Weather App",
      description: "A simple weather app showing local weather",
			},
    {
      url: "http://tourn171.github.io/FCC-Ziplines/twitch.html",
      img: "'http://i.imgur.com/fNJmF7J.jpg'",
      title: "Twitch App",
      description: "Twitch App showing online/offline users"
    },
    {
      url: "http://tourn171.github.io/FCC-Ziplines/clock.html",
      img: "'http://i.imgur.com/9y1YLJy.png'",
      title: "Pomodoro Clock",
      description: "A pomodoro clock created with HTML5 canvas"
    },
    {
      url: "http://tourn171.github.io/FCC-Ziplines/camper.html",
      img: "'http://i.imgur.com/4wU8SK6.png'",
      title: "FCC Camper News",
      description: "A front end showing news from Free Code Camps blog"
    },
    {
      url: "http://tourn171.github.io/FCC-Ziplines/game.html",
      img: "'http://i.imgur.com/0bcHyyj.png'",
      title: "Tic Tac Toe",
      description: "A tic tac toe game with AI opponent"
    },
    {
      url: "http://tourn171.github.io/FCC-Ziplines/wiki.html",
      img: "'http://i.imgur.com/vHuNkC3.png'",
      title: "Wiki Search",
      description: "A wikipedia search bar"
    },
		]
});
