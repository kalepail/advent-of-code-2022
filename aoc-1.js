;(async () => {
  const input = await fetch('https://adventofcode.com/2022/day/1/input', {
    headers: {
      cookie: `session=<your-session-token>`
    }
  })
  .then((res) => res.text())

  const grouped = input
  .split('\n\n')
  .map((joined) => joined.split('\n').map((num) => parseInt(num)))
  .map((arr) => arr.reduce((a, b) => a + b, 0))
  .filter((sum) => !isNaN(sum))
  .sort((a, b) => a - b)
  .reverse()
  
  // Part 1
  console.log(grouped[0])

  // Part 2
  console.log(
    grouped[0]
    + grouped[1]
    + grouped[2]
  )
})()
