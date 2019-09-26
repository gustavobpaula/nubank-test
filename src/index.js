import { User } from './modules/user'

const user = new User()

process.stdin.on('data', (input) => {
  try {
    const data = JSON.parse(input)

    if (data.account) user.accountOperations(data)

    if (data.transaction) user.transactionOperations(data)
  } catch (error) {
    console.log('error')
  }
})
