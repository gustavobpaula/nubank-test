import { addViolation } from '../../src/modules/violations'

describe('Violations', () => {
  const violations = addViolation([], 'account-already-initialized')

  it('matches even if received contains additional elements', () => {
    expect(violations).toEqual(expect.arrayContaining(['account-already-initialized']))
  })
  it('does not match if received does not contain expected elements', () => {
    expect(violations).not.toEqual(expect.arrayContaining(['insufficient-limit']))
  })
})
