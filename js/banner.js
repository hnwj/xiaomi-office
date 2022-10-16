//记录初始值
var nowIndex = 0;
//计时器
var timer;
//获取所有含有img的a标签
var imgs = document.querySelectorAll(".banner .images a");
//获取所有小按钮的a标签
var points = document.querySelectorAll(".banner .point a");
//获取左右按钮
var btns = document.querySelectorAll(".banner .btn");

bannerTick();
function bannerTick() {
	timer = setInterval(function () {
		nowIndex += 1;
		//设置条件
		if (nowIndex >= imgs.length) {
			nowIndex = 0;
		}
		changeAll();
	}, 2000);
}

//点击小按钮
for (var i = 0; i < points.length; i++) {
	var pointA = points[i];
	pointA.index = i;
	pointA.onmouseenter = function () {
		//停止计时器
		clearInterval(timer);
	}
	pointA.onmouseout = function () {
		bannerTick();
	}
	pointA.onclick = function () {
		nowIndex = this.index;
		changeAll();
	}
}

//左右方向按钮
for (var i = 0; i < btns.length; i++) {
	var btn = btns[i];
	btn.onmouseenter = function () {
		clearInterval(timer);
	}
	btn.onmouseout = function () {
		bannerTick();
	}
}

//点击左边按钮
function goLeft() {
	nowIndex -= 1;
	if (nowIndex < 0) {
		nowIndex = 4;
	}
	changeAll();
}

//点击右边按钮
function goRight() {
	nowIndex += 1;
	if (nowIndex >= imgs.length) {
		nowIndex = 0;
	}
	changeAll();
}

//封装函数，隐藏含有图片的a标签
function changeImageA() {
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.display = "none";
	}
}

//封装函数，修改小按钮的class名
function changePointA() {
	for (var i = 0; i < points.length; i++) {
		points[i].className = "hidden";
	}
}

//封装函数，小按钮和图片同时切换
function changeAll() {
	changeImageA()
	changePointA()
	imgs[nowIndex].style.display = "block";
	points[nowIndex].className = "show";
}
