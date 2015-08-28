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

//奖金类普通实现
var calSalary = function(level,salary){
    return stragtegy[level](salary);
};


//表单策略类实现
var formStrategy = {
    isNotEmpty:function(value,errorMsg){
        if(value === ''){
            return errorMsg;
        }
    },
    minLength : function(value, length, errorMsg){
        if(value < length){
            return errorMsg;
        }
    },
    mobileFormate : function(value, errorMsg){
        if(!/[1-9]/.test(value)){
            return errorMsg;
        }
    }
};

var Validator = function(){
    this.cache=[]; //储存校验规则
};

Validator.prototype = {
    add : function(dom,rule,errorMsg){
        var item = rule.split(':');
        this.cache.push(function(){
            var strage = item.shift();
            item.unshift(dom.value);
            item.push(errorMsg);
            return formStrategy[strage].apply(dom,item);
        });
    },
    start:function(){
        var len = this.cache.length;
        for(var i=0; i < len; i++){
            var msg = this.cache[i]();
            if(msg){
                return msg;
            }
        }
    }
};

var validatorFunc = function(){
    var validator = new Validator();
    validator.add(form.userName, 'isNotEmpty', '用户名不能为空');
    validator.add(form.pwd, 'minLength:6', '密码长度最小为6');
    validator.add(form.mobilePhone,'mobileFormate', '手机号不符合规则');
    return validator.start();
}

var form = document.getElementById('form');
form.onSubmit = function(){
    var msg = validatorFunc();
    if(msg){
        alert(msg);
        return;
    }
};














