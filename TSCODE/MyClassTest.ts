export class UserLogin{
    private username:string;
    private password:string;
    public login(uname:string,pword:string):string{
        this.username=uname;
        this.password=pword;
        return this.validate();
    }
    private validate():string{
        if(this.username=="admin"&& this.password=="admin"){
            console.log("valid user");
            return "valid user";
        }
        else{
            console.log("validation failed");
            return "invalid user credentials";
        }
    }
}