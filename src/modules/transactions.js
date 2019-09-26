/**
 * Checks if limit is greater than transaction value
 *
 * @param {Number} transactionValue - value of transaction
 * @param {Number} availableLimit - remaining limit value
 * @returns Boolean
 */
export const checkHasLimit = (transactionValue, availableLimit) => availableLimit >= transactionValue

/**
 * Returns the new limit value
 *
 * @param {Number} transactionValue - value of transaction
 * @param {Number} availableLimit - remaining limit value
 * @returns Boolean
 */
export const decrementLimit = (transactionValue, availableLimit) => availableLimit - transactionValue

/**
 * Returns if the amount of transactions is greater than or equal to the requested
 *
 * @param {Array} transactions - array of transactions
 * @param {Number} length - length of transactions expected
 * @returns Boolean
 */
export const checkLengthTransactions = (transactions = [], length) => transactions.length >= length

/**
 * Returns if the amount and merchant of transactions are iquals
 *
 * @param {Object} transaction1 - object of transaction
 * @param {Object} transaction2 - object of transaction
 * @returns Boolean
 */
export const checkDoubleTransaction = (transaction1, transaction2) => transaction1.amount === transaction2.amount && transaction1.merchant === transaction2.merchant

/**
 * Return last transaction item by position
 *
 * @param {Array} transactions - array of transactions
 * @param {Number} position - position number
 * @returns *
 */
export const getLastTransactionByPosition = (transactions, position) => transactions.slice(-position)[0]

/**
 * returns value in minutes between transaction time
 *
 * @param {String} transactionDate1 - Transaction date
 * @param {String} transactionDate2 - Transaction date
 * @returns Number
 */
export const getTimeBetweenTransactions = (transactionDate1, transactionDate2) => {
  const date1 = new Date(transactionDate1)
  const date2 = new Date(transactionDate2)

  return (date2 - date1) / 60000
}
