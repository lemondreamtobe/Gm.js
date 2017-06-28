/*
 * use way : public JS library
 * name    : Gm
 * aim     : making easier work
 * 
 */
(function(){
	
	if (!window.Gm) {
		window['Gm'] = {};
	};
	
	//检查整个库是否与当前浏览器相兼容
	function isCompatible(other) {
		
		//使用能力检测来检查必要条件
		if (other === false || !Array.prototype.push || !Object.hasOwnProperty || !document.createElement || !document.getElementsByTagName) {
			return false;
		} else {
			return true;
		}
	};
	window['Gm']['isCompatible'] = isCompatible;
	
	//继承的最优方法 tested
	function inherit(sub, sup) {
		var prototype = Object(sup.prototype);
		prototype.constructor = sub;
		sub.prototype = prototype;
	};
	window['Gm']['inherit'] = inherit;
	
	//IE8下的trim tested
	function trim(s) {
		return s.replace(/(^\s*)|(\s*$)/g, "");
	};
	window['Gm']['trim'] = trim;
	
	//判断ie浏览器
	function isIE(){
		if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") { 
			return true;
		} else {
			return false;	
		};
	};
	window['Gm']['isIE'] = isIE;
	
	//获取特定的类型
	function getObjectType(a) {
		var typeArray = Object.prototype.toString.call(a).split(" ");
		return function(a){
			return a.slice(0, this.length-1);
		}(typeArray[1]);
	};
	window['Gm']['getObjectType'] = getObjectType;
})()
