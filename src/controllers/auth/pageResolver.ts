import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ApiContext } from "../graphqlTypes/context";
import { PageDto } from "../graphqlTypes/page/pageDto";
import { PageInput } from "../graphqlTypes/page/pageInput";

@Resolver()
export class PageResolver{
  @Mutation(() => PageDto)
  async addPage(@Ctx() context: ApiContext, @Arg('newPage') newpage:PageInput) : Promise<PageDto>
  {
    return context.dataSources.productAPI.addPage(newpage);
  }

//   @Mutation( ()=> ID)
//   async addTemplate(@Ctx() context: ApiContext, @Arg("templateData") templateInput:TemplateInput) : Promise<string>
//   {
//     return context.dataSources.productAPI.addTemplate(templateInput);
//   }

}