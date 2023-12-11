export class Data{
    public activity: string
    public activity_type: string
    public timestamp: string

    constructor(activity:string, activity_type:string, timestamp:string){
        this.activity = activity;
        this.activity_type = activity_type;
        this.timestamp = timestamp;

    }
}