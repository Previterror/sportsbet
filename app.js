let bank = 100
drawBank()

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]

function draftPlayers() {
    players.forEach(player => {

        let coinFlip = Math.random()
        if (coinFlip >= .5) {
            player.teamNumber = 1
        } else {
            player.teamNumber = 2
        }
        // console.log(player.teamNumber)
    })
    calcTeamsAndSkill()
    drawTeams()
}

function drawTeams() {
    players.forEach(player => {
        if (player.teamNumber == 1) {
            let teamOne = document.getElementById('roster1')
            teamOne.innerHTML += `<span>${player.emoji}</span>`
        } else {
            let teamTwo = document.getElementById('roster2')
            teamTwo.innerHTML += `<span>${player.emoji}</span>`
        }
    });
}

let team1Skill = 0
let team2Skill = 0

function calcTeamsAndSkill() {
    let team1 = players.filter((player) => player.teamNumber == 1)
    let team2 = players.filter((player) => player.teamNumber == 2)
    // console.log(team1)
    // console.log(team2)


    team1.forEach(player => {
        team1Skill += player.skill
        // console.log(player.skill)
    });


    team2.forEach(player => {
        team2Skill += player.skill
        // console.log(player.skill)
    });

    console.log('team 0 ', team1Skill)
    console.log('team 1 ', team2Skill)
}

let winner = null
function checkWinner() {
    if (team1Skill > team2Skill) {
        winner = 0
    } else {
        winner = 1
    }
    console.log('winner is', winner)
    drawResult()
    adjustBank()
    document.getElementById('tryAgain').classList.remove('d-none')
    teamBet = [0, 0]
    chosenTeam = null
}


function drawBank() {
    let bankContent = document.getElementById('bankTotal')

    bankContent.innerText = `$${bank}`
}

let teamBet = [0, 0]
let chosenTeam = null
function bet(index, value) {
    bank -= value
    teamBet[index] += value
    console.log('team bet', teamBet);
    drawBank()
    chosenTeam = index
    console.log('chosen team', chosenTeam)
    checkWinner()
}

function betItAll(index) {
    bank -= bank
    teamBet[index] += bank
    console.log(teamBet);
    console.log('chosen team', chosenTeam)
    drawBank()
    checkWinner()
}

function adjustBank() {
    if (winner == chosenTeam) {
        bank += teamBet[chosenTeam] * 2
    } else {
        bank -= teamBet[chosenTeam]
    }
    console.log(bank);
    drawBank()
}

function drawResult() {
    let resultImage = document.getElementById('resultsImage')
    let resultText = document.getElementById('resultsText')

    if (winner == chosenTeam) {
        resultImage.innerHTML = `<span class="mdi mdi-thumb-up-outline fs-1"></span>`
        resultText.innerText = 'Good job you got it!'
    } else {
        resultImage.innerHTML = `<span class="mdi mdi-thumb-down-outline fs-1"></span>`
        resultText.innerText = 'Aw rats you lose!'
    }
}

function reset() {
    players.forEach(player => {
        player.teamNumber = 0
    })

    team1Skill = 0
    team2Skill = 0
    winner = null
    teamBet = [0, 0]
    chosenTeam = null
    let resultImage = document.getElementById('resultsImage')
    let resultText = document.getElementById('resultsText')
    resultImage.innerHTML = `<span class="mdi mdi-fencing fs-1"></span>`
    resultText.innerText = 'Place Your Bets'
    document.getElementById('tryAgain').classList.add('d-none')
    let teamOne = document.getElementById('roster1')
    teamOne.innerHTML = `<span></span>`
    let teamTwo = document.getElementById('roster2')
    teamTwo.innerHTML = `<span></span>`
    draftPlayers()
}

draftPlayers()