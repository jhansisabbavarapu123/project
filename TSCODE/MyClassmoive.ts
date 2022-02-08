export class Movie{
    private moviename:string;
    private hero:string;
    private heroine:string;
    viewData(mname:string,hro:string,heo:string):void{
        this.moviename=mname;
        this.hero=hro;
        this.heroine=heo;
        this.view()
    }

 private view():void{
     console.log(this.moviename)
     console.log(this.hero)
     console.log(this.heroine)
 }
}