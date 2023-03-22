import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class templateUploadResult
{
    @Field(type => ID)
    publicId: string;

    @Field()
    url: string;
}
   