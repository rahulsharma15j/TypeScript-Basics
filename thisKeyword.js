//usage of this keyword.
var _this = this;
/*function hello(thing){
   console.log(this);
   console.log(this + " says hello " + thing);
}*/
/*let hello = (thing)=>{
    console.log(this);
    console.log(this + " says hello " + thing);
 }

hello("world");*/
//lexical binding.
var myName = {
    firstName: 'Rahul',
    lastName: 'Sharma',
    /*calculateFullName(){
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }*/
    calculateFullName: function () {
        console.log(_this);
        return _this.firstName + ' ' + _this.lastName;
    }
};
var Name = myName.calculateFullName();
