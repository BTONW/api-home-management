import { getCustomRepository } from 'typeorm'
import { ProductRepository } from '@hm-repositories/Product.repository'
import { CriteriaSearchProduct } from '@hm-dto/product.dto'

class Service {

  constructor() {
    
  }

  getProducts(options: CriteriaSearchProduct = {}) {
    return getCustomRepository(ProductRepository)
      .getProducts(options)
      .getMany()
  }

}

export default Service