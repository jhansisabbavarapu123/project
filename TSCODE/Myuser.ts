import {UserLogin} from './MyClassTest';
class User{
    private log=new UserLogin();
    mylogin(uname:string,pword:string):string{
        return this.log.login(uname,pword);
    }
}
var u=new User();
console.log(u.mylogin("user","user"));
