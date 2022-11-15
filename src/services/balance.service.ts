import { getCustomRepository } from 'typeorm'
import { BalanceRepository } from '@hm-repositories/Balance.repository'
import { CriteriaSearchBalance, BodyUpsertBalance } from '@hm-dto/balance.dto'

class Service {

  getBalances = async (options: CriteriaSearchBalance = {}) => {
    const balances = await getCustomRepository(BalanceRepository)
      .getBalance(options)
      .getMany()

    return balances
  }

  upsertBalance = async (options: BodyUpsertBalance) => {
    const result = await getCustomRepository(BalanceRepository)
      .upsertBalance(options)

    return result
  }

}

export default Service