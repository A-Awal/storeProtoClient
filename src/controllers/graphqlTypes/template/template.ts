import { InputType, Field, ObjectType, ID } from 'type-graphql';
import { IsUUID, Length } from 'class-validator';

@ObjectType()
export class Template {
    @Field(type => ID)
    templateId?: string;

    @Field({nullable:true})
    templateCategory?: string;

    @Field({nullable:true})
    mainHearderTextSize?: string;

    @Field({nullable:true})
    subHearderTextsize?: string;

    @Field({nullable:true})
    heroImage?: string;

    @Field({nullable:true})
    logo?: string;

    @Field({nullable:true})
    heroMainHearderText?: string;

    @Field({nullable:true})
    heroMainSubHearderText?: string;

    @Field({nullable:true})
    footerTextHearder?: string;
    
    @Field({nullable:true})
    socialMedia?: string;
}