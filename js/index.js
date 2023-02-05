var b;
var arr = ["主页", "首页"]

var one = document.querySelector(".one");
var i = 0;
function fun() {
	var imgbox = document.querySelector(".imgbox");
	
	if (i == 0) {
		i++
		b = arr[i];
		console.log(imgbox.src = "./img/" + b + ".png");
		one.innerText = "2";
	} else {
		i--
		b = arr[i];
		console.log(imgbox.src = "./img/" + b + ".png");
		one.innerText = "1";
	};
};
var int = self.setInterval("fun()", 5000);
var pay = document.querySelector(".paying")	;
pay.onmouseover = function() {
	this.innerText="去付款";
	
};
pay.onmouseout= function() {
	this.innerText="确认无误并提交";
};	

