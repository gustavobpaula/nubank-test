import {
  checkHasLimit,
  decrementLimit,
  checkLengthTransactions,
  checkDoubleTransaction,
  getLastTransactionByPosition,
  getTimeBetweenTransactions
} from '../../src/modules/transactions'

describe('Transactions', () => {
  it('should return true if the second parameter passed to function checkHasLimit is greater than the first', () => {
    expect(checkHasLimit(10, 20)).toBe(true)
  })

  it('should return true if the first parameter passed to function checkHasLimit is greater than the second', () => {
    expect(checkHasLimit(20, 10)).toBe(false)
  })

  it('should return 10 if the first parameter passed to function decrementLimit is 20 and second is 30', () => {
    expect(decrementLimit(20, 30)).toBe(10)
  })

  it('should return true if the length of array passad into first parameter of function checkLengthTransactions is greater than or equal to the requested in second paramater', () => {
    expect(checkLengthTransactions([1, 2, 3], 3)).toBe(true)
  })

  it('should return false if the length of array passad into first parameter of function checkLengthTransactions is smaller than to the requested in second paramater', () => {
    expect(checkLengthTransactions([1, 2, 3], 4)).toBe(false)
  })

  it('should return true if the transaction object passad into first parameter of function checkDoubleTransaction has amount and merchant value equal to the requested in second paramater', () => {
    const object1 = {
      amount: 10,
      merchant: 'Burguer King'
    }
    const object2 = {
      amount: 10,
      merchant: 'Burguer King'
    }

    expect(checkDoubleTransaction(object1, object2)).toBe(true)
  })

  it('should return false if the transaction object passad into first parameter of function checkDoubleTransaction has amount or merchant value different to the requested in second paramater', () => {
    const object1 = {
      amount: 10,
      merchant: 'Burguer King'
    }
    const object2 = {
      amount: 20,
      merchant: 'Burguer King'
    }

    expect(checkDoubleTransaction(object1, object2)).toBe(false)
  })

  it('should return last position of array passed in firt parameter of function getLastTransactionByPosition by last index value passad by second parameter', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8]

    expect(getLastTransactionByPosition(array, 3)).toBe(6)
  })

  it('shult return diference in minutes between two dates in funcion getTimeBetweenTransactions', () => {
    const date1 = new Date('2019-02-13T10:00:00.000Z')
    const date2 = new Date('2019-02-13T10:03:00.000Z')

    expect(getTimeBetweenTransactions(date1, date2)).toBe(3)
  })
})
