import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class StoreDto {
    @Field(type => ID)
    storeId?: string;

    @Field()
    merchantId?: string;

    @Field()
    storeName?: string;
}