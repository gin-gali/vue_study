const app = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz!')
      continue
    }

    if (i % 3 === 0) {
      console.log('Fizz')
      continue
    }

    if (i % 5 === 0) {
      console.log('Buzz')
      continue
    }

    console.log(i)
  }
}

app()

module.exports = app
