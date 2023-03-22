import { Length } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class PageDto {

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