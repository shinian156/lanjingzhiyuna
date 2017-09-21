$(document).ready(function() {
	$("header").mousemove(function() {
		$(this).siblings(".header").css("top", "0")
	})
	$("header").mouseout(function() {
		if (getScrollTop() > 72) {
			return true;
		} else {
			$(this).siblings(".header").css("top", "-72px")
		}
	})
})
$(function() {
	var sayInterval;
	var prevNum = 1;

	function startSay() {
		sayInterval = setInterval(function() {
			randomNum = parseInt(5 * Math.random());
			if (randomNum == prevNum) {
				randomNum = parseInt(5 * Math.random());
			} else {
				prevNum = randomNum;
			}
			// console.log(randomNum)
			/*$(".profession .main .say").eq(randomNum).addClass("industry-say-animation").removeClass("industry-say-off").siblings().removeClass("industry-say-animation").addClass("industry-say-off");*/
			$(".profession .main .say .content").eq(randomNum).addClass("add").parent().siblings().children().removeClass("add")
		}, 3500);
	}
	startSay();
	$(".profession .main .say").hover(function() {
		clearInterval(sayInterval);
		$(".profession .main .say .content").eq(randomNum).removeClass("add")
		/*$(this).addClass("industry-say-animation").removeClass("industry-say-off").siblings().removeClass("industry-say-animation").addClass("industry-say-off")*/
	}, function() {
		startSay();
	})
});