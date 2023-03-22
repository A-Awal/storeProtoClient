import { TemplateInput } from "../controllers/graphqlTypes/template/templateInput";

const { RESTDataSource } = require('apollo-datasource-rest');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://storeproto.azurewebsites.net/api';
  }

  willSendRequest(request) {
    request.headers.set('Content-Type', 'application/json');
  }

  getProducts() {
    return this.get('product');
  }

  addTemplate(templateInput:TemplateInput) {
    console.log(templateInput);
    return this.post(`Template`, {...templateInput});
  }

  getTemplate(CategoryName:string) {
    return this.get(`Template?CateGoryName=${CategoryName}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }

  incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}

module.exports = ProductAPI;