import { InputType, Field, ObjectType, ID } from 'type-graphql';
import { IsUUID, Length } from 'class-validator';

@ObjectType()
export class ProductDto {
    @Field(type => ID)
    productId?: string;

    @Field({nullable:true})
    productName?: string;

    @Field({nullable:true})
    productCategory?: string;

    @Field({nullable:true})
    productDescription?: string;

    @Field({nullable:true})
    unit?: string;

    @Field({nullable:true})
    quantity?: string;

    @Field({nullable:true})
    storeId?: string;

    @Field({nullable:true})
    store?: string;
}