import { EntityRepository, Repository } from 'typeorm'
import { CriteriaSearchProduct } from '@hm-dto/product.dto'
import { Product as ProductEntity } from '@hm-entities/Product.entity'

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
  getQuery = () => {
    const query = this.createQueryBuilder('product')
      .leftJoinAndSelect('product.cost_values', 'cost_values')
      .leftJoinAndSelect('cost_values.month', 'month')

    return query
  }

  getProducts = ({ id, keyword }: CriteriaSearchProduct) => {
    const query = this.getQuery()

    if (id) {
      query.andWhere('product.id = :id', { id })
    }
    if (keyword) {
      query.andWhere('product.name LIKE :keyword', { keyword: `%${keyword}%` })
    }

    return query
  }
}