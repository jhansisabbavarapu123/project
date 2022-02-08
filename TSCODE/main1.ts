import{Movie} from './MyClassmoive';
class Audience{
    private mov=new Movie();
    mymovie(mname:string,hro:string,heo:string)
    {
        return this.mov.viewData(mname,hro,heo)
    }

}
var obj=new Audience()
console.log(obj.mymovie("Bangaram","PavanKalyan","Asin"))