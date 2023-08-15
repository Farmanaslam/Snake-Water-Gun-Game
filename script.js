console.log("Let's Play")
alert("Press OK to start the game")
let user = prompt("Enter snake, water or gun")
let cpuI = Math.floor(Math.random() * 3)
let cpu = ["snake", "water", "gun"][cpuI]
console.log(cpu)
const match = (user, cpu) => {
  if (user === cpu) {
    return "Nobody Winss..Match Tied"
  }
  else if (user === "snake" && cpu === "water") {
    return "user"
  }

  else if (user === "water" && cpu === "gun") {
    return "user"
  }

  else if (user === "gun" && cpu === "water") {
    return "cpu"
  }

  else if (user === "snake" && cpu === "gun") {
    return "cpu"
  }

  else if (user === "water" && cpu === "snake") {
    return "user"
  }

  else if (user === "gun" && cpu === "snake") {
    return "cpu"
  }
}
let result = match(user, cpu)
document.write(`User:${user} <br> cpu:${cpu} <br> The Winner is : ${result.toUpperCase()}`)
