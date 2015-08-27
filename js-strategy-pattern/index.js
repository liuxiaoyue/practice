//阅读理解javascript中策略模式练习
//文章链接如下http://www.360doc.com/content/15/0819/11/15077656_493376894.shtml
//奖金demo

var calcuateSalary = function(salary, level){
	if(level === 'A'){
		return salary * 4;
	}else if(level === 'B'){
		return salary * 3;
	}else if(level === 'C'){
		return salary * 2;
	}
};

//存在缺点：存在很多if else判断   函数缺乏弹性，如果再来个D,需要在函数内添加判断， 算法不能复用 

//使用组合函数重构代码
