export class Customer{
    private firstname:string;
    private lastname:string;
    private emailID:string;
    private password:string;
    constructor(obj?:any){
        if (obj != undefined || null) {
            if(obj["firstname"]!=undefined||null)
                this.firstname=obj["firstname"]
            if(obj["lastname"]!=undefined||null)
                this.lastname=obj["lastname"]
            if(obj["emailID"]!=undefined||null)
                this.emailID=obj["emailID"]
            if(obj["password"]!=undefined||null)
                this.password=obj["password"]
        }
        else{
            this.firstname="";
            this.lastname="";
            this.emailID="";
            this.password="";
        }
        
    }
    getFirstName()
    {
        return this.firstname;
    }
    getLastName()
    {
        return this.lastname;
    }
    getEmailID()
    {
        return this.emailID;
    }
    getPassword()
    {
        return this.password;
    }
}