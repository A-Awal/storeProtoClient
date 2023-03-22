import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ApiContext } from "../graphqlTypes/context";
import { StoreDto } from "../graphqlTypes/store/storeDto";
import { StoreInput } from "../graphqlTypes/store/storeInput";

@Resolver()
export class TemplateResolver{
  @Mutation(() => StoreDto)
  async addStore(@Ctx() context: ApiContext, @Arg('newStore') newStore:StoreInput) : Promise<StoreDto>
  {
    return context.dataSources.productAPI.addStore(newStore);
  }
}