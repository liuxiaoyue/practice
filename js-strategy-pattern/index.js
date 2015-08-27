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

//面向对象的方式来实现奖金的计算
var stragtegy = {
    'A' : function(salary) {
        return salary * 4;
    },
    'B' : function(salary) {
        return salary * 3;
    },
    'C' : function(salary) {
        return salary * 2;
    }
};

var bonus = function(salary) {
    this.salary = null;
    this.levelObj = null;
};

bonus.prototype.setSalary = function(salary) {
    this.salary = salary;
};

bonus.prototype.setLevel= function(levelObj){
    this.levelObj = levelObj;
};
bonus.prototype.getBonus = function(){
    return this.levelObj(this.salary);
};


var a = new bonus();
a.setSalary(1000);
a.setLevel(stragtegy['A']);
console.log(a.getBonus());

var b = new bonus();
b.setSalary(2000);
b.setLevel(stragtegy['B']);
console.log(b.getBonus());

var c = new bonus();
c.setSalary(1000);
c.setLevel(stragtegy['C']);
console.log(c.getBonus());

