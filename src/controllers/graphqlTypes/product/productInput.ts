import { Length } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class ProductInput {
    @Field()
    @Length(2)
    storeId: string;

    @Field({nullable: true})
    productName: string;

    @Field({nullable: true})
    productDescription: string;

    @Field({nullable: true})
    productCategory: string;

    @Field({nullable: true})
    unitOfMeasurement: string;

    @Field(() =>Int, {nullable: true})
    quantity: number;
}