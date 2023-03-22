import { PageInput } from "../controllers/graphqlTypes/page/pageInput";
import { ProductInput } from "../controllers/graphqlTypes/product/productInput";
import { StoreInput } from "../controllers/graphqlTypes/store/storeInput";
import { TemplateInput } from "../controllers/graphqlTypes/template/templateInput";

const { RESTDataSource } = require('apollo-datasource-rest');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    // this.baseURL = 'https://storeproto.azurewebsites.net/api';
    this.baseURL = 'http://localhost:5273/api';
  }

  willSendRequest(request:any) {
    request.headers.set('Content-Type', 'application/json');
  }

  getProducts(productName:string) {
    return this.get(`Product?productName=${productName}`);
  }

  addTemplate(templateInput:TemplateInput) {
    console.log(templateInput);
    return this.post(`Template`, {...templateInput});
  }

  getTemplate(CategoryName:string) {
    return this.get(`Template?CateGoryName=${CategoryName}`);
  }

  addProduct(newProduct:ProductInput) {
    return this.post(`Product/create`, {...newProduct});
  }

  getQuantity(productId:string) {
    return this.get(`Product/Quantity?ProductId=${productId}`);
  }

  addStore(newStore:StoreInput) {
    return this.post(`Store/Create-A-New-Store`, {...newStore});
  }

  addPage(newPage:PageInput) {
    return this.post(`Page`, {...newPage});
  }
}

module.exports = ProductAPI;