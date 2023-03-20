import { InputType, Field } from 'type-graphql';
import { Length } from 'class-validator';

@InputType()
export class TemplateInput {
    @Field(() => String)
    templateCategory: string;

    @Field(() => String)
    mainHearderTextSize: string;

    @Field(() => String)
    @Length(5)
    subHearderTextsize: string;

    @Field(() => String)
    heroMainHearderText: string;

    @Field(() => String)
    heroImage: string;

    @Field(() => String)
    logo: string;
    @Field(() => String)
    heroMainSubHearderText: string;

    @Field(() => String)
    footerTextHearder: string;

    @Field(() => String)
    socialMedia: string;
}