let pointsP1 = 501
let pointsP2 = 501
let isP1 = true
let p1throws = []
let p2throws = []

function changePoints(num, mult) {
  if (isP1 === true) {
    if (num * mult <= pointsP1) {
      pointsP1 -= num * mult
    } else {
      alert("too high")
    }
    document.getElementById('count1').innerText = pointsP1
    isP1 = false
    if (pointsP1 === 0) {
      alert('Player 1 has won the game!')
    }
    p1throws.push(num * mult)

  } else {
    if (num * mult <= pointsP2) {
      pointsP2 -= num * mult
    } else {
      alert("too high")
    }

    document.getElementById('count2').innerText = pointsP2
    isP1 = true
    if (pointsP2 === 0) {
      alert('Player 2 has won the game!')
    }
    p2throws.push(num * mult)
  }
  document.getElementById('p1Throws').innerText = p1throws
  document.getElementById('p2Throws').innerText = p2throws
  let sum = [0, 0]
  for (let i = 0; i < p1throws.length; i++) {
    sum[0] += p1throws[i]
  }
  for (let i = 0; i < p2throws.length; i++) {
    sum[0] += p2throws[i]
  }
  document.getElementById('p1avg').innerText = 'Player2 average: ' + sum[0] / p1throws.length
  document.getElementById('p2avg').innerText = 'Player1 average: ' + sum[0] / p2throws.length


}

function getMultiplier() {
  let mult = 0
  if (document.getElementById('single').checked) {
    mult = 1
  }
  if (document.getElementById('double').checked) {
    mult = 2
  }
  if (document.getElementById('treble').checked) {
    mult = 3
  }
  return mult
}

document.getElementById('1').addEventListener('click', () => {
  changePoints(1, getMultiplier())
})
document.getElementById('2').addEventListener('click', () => { changePoints(2, getMultiplier()) })
document.getElementById('3').addEventListener('click', () => { changePoints(3, getMultiplier()) })
document.getElementById('4').addEventListener('click', () => { changePoints(4, getMultiplier()) })
document.getElementById('5').addEventListener('click', () => { changePoints(5, getMultiplier()) })
document.getElementById('6').addEventListener('click', () => { changePoints(6, getMultiplier()) })
document.getElementById('7').addEventListener('click', () => { changePoints(7, getMultiplier()) })
document.getElementById('8').addEventListener('click', () => { changePoints(8, getMultiplier()) })
document.getElementById('9').addEventListener('click', () => { changePoints(9, getMultiplier()) })
document.getElementById('10').addEventListener('click', () => { changePoints(10, getMultiplier()) })
document.getElementById('11').addEventListener('click', () => { changePoints(11, getMultiplier()) })
document.getElementById('12').addEventListener('click', () => { changePoints(12, getMultiplier()) })
document.getElementById('13').addEventListener('click', () => { changePoints(13, getMultiplier()) })
document.getElementById('14').addEventListener('click', () => { changePoints(14, getMultiplier()) })
document.getElementById('15').addEventListener('click', () => { changePoints(15, getMultiplier()) })
document.getElementById('16').addEventListener('click', () => { changePoints(16, getMultiplier()) })
document.getElementById('17').addEventListener('click', () => { changePoints(17, getMultiplier()) })
document.getElementById('18').addEventListener('click', () => { changePoints(18, getMultiplier()) })
document.getElementById('19').addEventListener('click', () => { changePoints(19, getMultiplier()) })
document.getElementById('20').addEventListener('click', () => { changePoints(20, getMultiplier()) })
document.getElementById('25').addEventListener('click', () => { changePoints(25, getMultiplier()) })
document.getElementById('50').addEventListener('click', () => { changePoints(50, getMultiplier()) })
