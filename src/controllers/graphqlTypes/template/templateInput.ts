import { InputType, Field, ObjectType, ID } from 'type-graphql';
import {Length} from 'class-validator';

@InputType()
export class TemplateInput {
    @Field()
    @Length(2)
    templateCategory: string;

    @Field({nullable: true})
    mainHearderTextSize: string;

    @Field({nullable: true})
    subHearderTextsize: string;

    @Field({nullable: true})
    heroMainHearderText: string;

    @Field({nullable: true})
    heroMainSubHearderText: string;

    @Field({nullable: true})
    footerTextHearder: string;
    
    @Field({nullable: true})
    socialMedia: string;
}