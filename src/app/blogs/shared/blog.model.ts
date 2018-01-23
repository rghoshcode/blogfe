export interface Blog {

            id:number;   
            title:string;
            authorName:string;
            content:string;
            _ts:number;
            comments: Comment[];
}

export interface Comment {
                authorName:string;
                content:string; 
}
