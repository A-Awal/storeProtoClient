import {Resolver, Query, Ctx, Arg, Mutation, ID} from 'type-graphql';
import { ApiContext } from '../graphqlTypes/context';
import { Template } from '../graphqlTypes/template/template';
import { TemplateInput } from '../graphqlTypes/template/templateInput';

@Resolver()
export class TemplateResolver{
  @Query(() => Template)
  async getTemplate(@Ctx() context: ApiContext, @Arg('category') category:string) : Promise<Template>
  {
    return context.dataSources.productAPI.getTemplate(category);
  }

  @Mutation( ()=> ID)
  async addTemplate(@Ctx() context: ApiContext, @Arg("templateData") templateInput:TemplateInput) : Promise<string>
  {
    return context.dataSources.productAPI.addTemplate(templateInput);
  }

  
}