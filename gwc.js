window.onload=function(){
function doc1(i){
		var gid=document.getElementById(i);
		return gid;	
	}
	function doc2(c){
		var gcs=document.getElementsByClassName(c);
		return gcs;
	}
	function doc3(t){
		var gtg=document.getElementsByTagName(t);
		return gtg;
	}
var select_all=doc1('select_all');
var num_all=doc1('num_all');
var money_all=doc1('money_all');
var sel=doc1('sel');
var del=doc2('del');
var op=doc2('op');
var add=doc2('add');
var num=doc2('num');
var dj=doc2('danjia');
var money=doc2('money_this');
var option=doc2('option');
var k=0;
var l=0;
select_all.onclick=function(){	

	for (var i = option.length - 1; i >= 0; i--) {
		f=0;
		option[i].checked=select_all.checked;
		op[i].checked=select_all.checked;	 
	}
	check();
	all();
}
for (var i = del.length - 1; i >= 0; i--) {
	del[i].n=i;
	del[i].onclick=function(){

		var x=Number(num[this.n].innerText);
		x--;
		num[this.n].innerHTML=x;
		if (x<=0) {
			x=0;
			num[this.n].innerHTML=x;
		}
		money[this.n].innerHTML=x*Number(dj[this.n].innerText);
			
		option[this.n].checked=true;
		shuchu();	
			var g=0;
			for (var i = option.length - 1; i >= 0; i--) {
				if(option[i].checked){
					g++;
				}
			}
			if (g>=option.length) {
				select_all.checked=true;
				sel.checked=true;
				for (var i = op.length - 1; i >= 0; i--) {
					op[i].checked=select_all.checked;
				}
			}
	}
}
for (var i = add.length - 1; i >= 0; i--) {
	add[i].n=i;
	add[i].onclick=function(){

		var x=Number(num[this.n].innerText);
		x++;
		num[this.n].innerHTML=x;
		money[this.n].innerHTML=x*Number(dj[this.n].innerText);
		option[this.n].checked=true;
		 shuchu();
			var g=0;
			for (var i = option.length - 1; i >= 0; i--) {
				if(option[i].checked){
					g++;
				}
			}
			if (g>=option.length) {
				select_all.checked=true;
				sel.checked=true;
				for (var i = op.length - 1; i >= 0; i--) {
					op[i].checked=select_all.checked;
				}
			}
	}
}
for (var i = option.length - 1; i >= 0; i--) {
		option[i].n=i;
		option[i].onclick=function(){
			shuchu();
			check();
			op[this.n].checked=this.checked;
		}	
}
sel.onclick=function(){
	select_all.checked=sel.checked;
	for (var i = option.length - 1; i >= 0; i--) {
			option[i].checked=sel.checked;
			op[i].checked=sel.checked;
	}
	all();
}


for (var i = op.length - 1; i >= 0; i--) {	
	op[i].n=i;
	op[i].onclick=function(){		
		option[this.n].checked=op[this.n].checked;
		shuchu();
		check();
	}
}
function shuchu(){
	k=0;
	l=0;
	for (var i = option.length - 1; i >= 0; i--) {
		if(option[i].checked){
			k+=Number(num[i].innerText);
			l+=Number(money[i].innerText);
		}
	}
	num_all.innerHTML=k;
	money_all.innerHTML=l;
}
function check(){
	var g=0;
	for (var i = option.length - 1; i >= 0; i--) {
		if(option[i].checked){
			g++;
		}
	}
	if (g==option.length) {
		select_all.checked=true;
		sel.checked=true;
	}else{
		select_all.checked=false;
		sel.checked=false;
	}
	}
function all(){
	var h=0;
	var j=0;
	for (var i = num.length - 1; i >= 0; i--) {
		   if(sel.checked){
		   		h+=Number(num[i].innerText);
		   		j+=Number(money[i].innerText);
		   }else{
		   	h=0;
		   	j=0;
		   }
	}
	num_all.innerHTML=h;
	money_all.innerHTML=j;
}
}