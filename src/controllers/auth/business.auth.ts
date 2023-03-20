import { isNullableType } from 'graphql';
import {Resolver, Query, Ctx, Mutation, Arg} from 'type-graphql';
import { Product } from '../../entities/product';
import { ApiContext } from '../graphqlTypes/context';
import { ProductDto } from '../graphqlTypes/productDto';
import { TemplateInput } from '../graphqlTypes/templateInput';

@Resolver()
export class ProductResolver{
  @Query(() => [ProductDto])
  async products(@Ctx() context: ApiContext)
  {
    return context.dataSources.productAPI.getProducts();
  }

  @Mutation(() => String)
  async addTemplate(@Arg("data")templateInput:TemplateInput, @Ctx() context: ApiContext): Promise<string>
  {
    return context.dataSources.productAPI.AddTemplate(templateInput);
  }
}