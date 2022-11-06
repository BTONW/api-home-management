import { BitStatus } from '@hm-enum/entity.enum'
import { EntityRepository, Repository } from 'typeorm'
import { CriteriaSearchProduct } from '@hm-dto/product.dto'
import { Product as ProductEntity } from '@hm-entities/Product.entity'

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
  getQuery = () => {
    const query = this.createQueryBuilder('product')
      .setParameters({
        is_active: BitStatus.TRUE
      })
      .leftJoinAndSelect('product.cost_values', 'cost_values', 'cost_values.is_active = :is_active')
      .leftJoinAndSelect('cost_values.month', 'month', 'month.is_active = :is_active')
      .where('product.is_active = :is_active')

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