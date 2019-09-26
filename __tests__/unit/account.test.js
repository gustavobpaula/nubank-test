import { checkActivedCard } from '../../src/modules/account'

describe('Check active card', () => {
  it('should return true if pass boolean true', () => {
    const activeCard = checkActivedCard(true)

    expect(activeCard).toBe(true)
  })
  it('should return false if pass boolean false', () => {
    const activeCard = checkActivedCard(false)

    expect(activeCard).toBe(false)
  })
})
