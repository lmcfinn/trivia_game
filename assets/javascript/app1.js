
 		$(document).ready(function(){

 			// Click to start coundDown
			window.onload = function() {
				$(".startbtn").on("click", countDown.start);
			};

			// Set total time
			var time = 10;

			// Set time interval
			var intervalId;

			var countDown = {

				start: function() {
    				intervalId = setInterval(countDown.count, 1000);
  				},

				count: function() {
    				time--;
    				$(".timer").html("Time remaining: " + time);

    				// Stop coundDown and also show result page
    				if(time == 0) {
  						clearInterval(intervalId);
  						getCount();
  						$(".finalCorrect").html("Correct Answers: " + correctTotal);
						$(".finalWrong").html("Wrong Answers: " + wrongTotal);
						$(".finalUnanswered").html("Unanswered: " + unasnwered);
  				// 		window.location.href = "result.html";
  					}
  				}
			};

			// Start writing the game logic

			var correctTotal = 0;
 			var wrongTotal = 0;
 			var unasnwered = 0;
 			var questionsTotal = 5;

 			var answerCount = [];
 			
			// Set answers
			var correctC = ["1955", "18", "Pirates of the Caribbean", "1986", "Sleeping Beauty"];

			// var wrongC = ["1949", "1891", "1965", "20", "100", "35", "Haunted Mansion", "Fantasmic!", "Snow White’s Scary Adventures", "2001", "1999", "2050", "Arial", "Cinderella", "Elsa"];

			// Store correct answers in input
			$("#1_3").data("C", correctC[0]);
			$("#2_3").data("C", correctC[1]);
			$("#3_1").data("C", correctC[2]);
			$("#4_2").data("C", correctC[3]);
			$("#5_1").data("C", correctC[4]);

			
			// See if the user choice is correct or not

			// Q1
			$(".q1A").on("click", function() {

				if($(this).data("C")) {

					answerCount[0] = "true";
					console.log("Q1:", answerCount[0]);

				} else {

					answerCount[0] = "false";
					console.log("Q1:", answerCount[0]);
				}

			});

		

			// Q2
			$(".q2A").on("click", function() {

				if($(this).data("C")) {

					answerCount[1] = "true"
					console.log("Q2:", answerCount[1]);

				} else {

					answerCount[1] = "false"
					console.log("Q2:", answerCount[1]);
				}

			});

			// Q3
			$(".q3A").on("click", function() {

				if($(this).data("C")) {

					answerCount[2] = "true"
					console.log("Q3:", answerCount[2]);

				} else {

					answerCount[2] = "false"
					console.log("Q3:", answerCount[2]);
				}

			});

			// Q4
			$(".q4A").on("click", function() {

				if($(this).data("C")) {

					answerCount[3] = "true"
					console.log("Q4:", answerCount[3]);

				} else {

					answerCount[3] = "false"
					console.log("Q4:", answerCount[3]);
				}

			});

			// Q5
			$(".q5A").on("click", function() {

				if($(this).data("C")) {

					answerCount[4] = "true"
					console.log("Q5:", answerCount[4]);

				} else {

					answerCount[4] = "false"
					console.log("Q5:", answerCount[4]);
				}

			});

			console.log(answerCount);

			function getCount() {

				for( var i = 0; i < questionsTotal; i++) {

					if(answerCount[i] === "true") {
						
						correctTotal++;
						
					}

					if(answerCount[i] === "false") {
						
						wrongTotal++;
						
					}
				}

				unasnwered = questionsTotal - correctTotal -wrongTotal;

				console.log("Correct count:", correctTotal);
				console.log("Wrong count:", wrongTotal);
				console.log("unanswered:", unasnwered);

			};


			$(".submitbtn").on("click", function() {

				getCount();
				clearInterval(intervalId);

				console.log("After sumbit:", answerCount);
				console.log("After submit correct count:", correctTotal);
				console.log("After submit wrong count:", wrongTotal);
				console.log("After submit unanswered:", unasnwered);

				$(".finalCorrect").html("Correct Answers: " + correctTotal);
				$(".finalWrong").html("Wrong Answers: " + wrongTotal);
				$(".finalUnanswered").html("Unanswered: " + unasnwered);

			});

			
				// $(".finalCorrect").html("Correct Answers: " + correctTotal);
				// $(".finalWrong").html("Wrong Answers: " + wrongTotal);
				// $(".finalUnanswered").html("Unanswered: " + unasnwered);
			
		});