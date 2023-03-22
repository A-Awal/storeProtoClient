import {Resolver, Query, Ctx, Arg, Mutation, Int} from 'type-graphql';
import { ApiContext } from '../graphqlTypes/context';
import { ProductDto } from '../graphqlTypes/product/productDto';
import { ProductInput } from '../graphqlTypes/product/productInput';

@Resolver()
export class ProductResolver{
  @Query(() => [ProductDto!])
  async products(@Ctx() context: ApiContext, @Arg("productName", {nullable:true}) productName: string)
  {
    return context.dataSources.productAPI.getProducts(productName);
  }

  @Mutation( ()=> String)
  async addProduct(@Ctx() context: ApiContext, @Arg("newProduct") newProduct:ProductInput) : Promise<string>
  {
    return context.dataSources.productAPI.addProduct(newProduct);
  }

  @Query( ()=> Int)
  async quantity(@Ctx() context: ApiContext, @Arg("productId") productId:string) : Promise<number>
  {
    return context.dataSources.productAPI.getQuantity(productId);
  }
}