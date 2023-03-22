import { Length } from "class-validator";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class PageInput {

    @Field(()=> ID)
    @Length(3)
    storeId: string;
    
    @Field({nullable: true})
    mainHearderTextSize: string;

    @Field({nullable: true})
    subHearderTextsize: string;

    @Field({nullable: true})
    heroMainHearderText: string;

    @Field({nullable: true})
    heroImage: string;

    @Field({nullable: true})
    logo: string;

    @Field({nullable: true})
    footerTextHearder: string;
    
    @Field({nullable: true})
    socialMedia: string;
}