const { RESTDataSource } = require('apollo-datasource-rest');
import { TemplateInput } from "../controllers/graphqlTypes/templateInput";

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://storeproto.azurewebsites.net/api';
  }

  getProducts() {
    return this.get('product');
  }

  AddTemplate(templateInput:TemplateInput) {
    return this.post(`TemplateDefault`, templateInput);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
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