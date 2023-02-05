// var b;
// var arr = ["img/huangshi01.jpg", "img/huangshi02.jpg"]

// var one = document.querySelector(".one");
// var i = 0;
// function fun() {
// 	var imgbox = document.querySelector(".imgbox");
	
// 	if (i == 0) {
// 		i++
// 		console.log(imgbox.src =arr[i]);
// 		one.innerText = "2";
// 	} else {
// 		i--
// 		console.log(imgbox.src = arr[i]);
// 		one.innerText = "1";
// 	};
// };
var int = self.setInterval("fun()", 5000);
var pay = document.querySelector(".paying")	;
pay.onmouseover = function() {
	this.innerText="去付款";
	
};
pay.onmouseout= function() {
	this.innerText="确认无误并提交";
};	

