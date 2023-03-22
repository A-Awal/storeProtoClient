import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class StoreInput {
    @Field()
    @Length(2)
    merchantId: string;

    @Field({nullable: true})
    storeName: string;
}