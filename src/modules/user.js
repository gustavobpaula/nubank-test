import {
  checkHasLimit,
  decrementLimit,
  checkLengthTransactions,
  checkDoubleTransaction,
  getLastTransactionByPosition,
  getTimeBetweenTransactions
} from '../modules/transactions'

import { checkActivedCard } from '../modules/account'
import { addViolation } from '../modules/violations'

export class User {
  constructor () {
    this.account = {
      activeCard: false,
      availableLimit: null
    }
    this.transactions = []
    this.violations = []
  }

  /**
   * Get Account and Violations infos from User
   *
   * @returns
   * @memberof User
   */
  getStatus () {
    return {
      account: this.account,
      violations: this.violations
    }
  }

  /**
   *Output user status
   *
   * @memberof User
   */
  renderOutput () {
    console.log('\n')
    console.log(this.getStatus())
  }

  /**
   * Create account
   *
   * @param {Object} data - Oject of account
   * @memberof User
   */
  createAccount (data) {
    this.account = { ...this.account, ...data.account }
  }

  /**
   * Add a new transaction
   *
   * @param {Object} data - Object transaction
   * @param {String} date - Date in string format
   * @memberof User
   */
  newTransaction (data, date) {
    this.transactions.push({ ...data.transaction, date })
    this.account.availableLimit = decrementLimit(data.transaction.amount, this.account.availableLimit)
  }

  /**
   * Init account operations
   *
   * @param {Object} data - Object of account
   * @returns
   * @memberof User
   */
  accountOperations (data) {
    if (checkActivedCard(this.account.activeCard)) {
      this.violations = addViolation(this.violations, 'account-already-initialized')
      return this.renderOutput()
    }
    this.createAccount(data)
    this.renderOutput()
  }

  /**
   * Init transaction operations
   *
   * @param {Object} data = Object of transaction
   * @returns
   * @memberof User
   */
  transactionOperations (data) {
    const date = data.transaction.time || (new Date()).toISOString()

    if (!checkActivedCard(this.account.activeCard)) {
      this.violations = addViolation(this.violations, 'card-not-active')
      return this.renderOutput()
    }

    if (!checkHasLimit(data.transaction.amount, this.account.availableLimit)) {
      this.violations = addViolation(this.violations, 'insufficient-limit')
      return this.renderOutput()
    }

    if (
      checkLengthTransactions(this.transactions, 2) &&
      getTimeBetweenTransactions(
        getLastTransactionByPosition(this.transactions, 2).time,
        date
      ) <= 2
    ) {
      this.violations = addViolation(this.violations, 'high-frequency-small-interval')
      return this.renderOutput()
    }

    if (
      checkLengthTransactions(this.transactions, 1) &&
      checkDoubleTransaction(data.transaction, getLastTransactionByPosition(this.transactions, 1)) &&
      getTimeBetweenTransactions(
        getLastTransactionByPosition(this.transactions, 1).time,
        date
      ) <= 2
    ) {
      this.violations = addViolation(this.violations, 'doubled-transaction')
      return this.renderOutput()
    }

    this.newTransaction(data, date)
    this.renderOutput()
  }
}
