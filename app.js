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
        console.log(player.skill)
    });


    team2.forEach(player => {
        team2Skill += player.skill
        console.log(player.skill)
    });

    console.log('team 1 ', team1Skill)
    console.log('team 2 ', team2Skill)
}

let winner = ''
function checkWinner(index) {
    if (team1Skill > team2Skill) {
        winner = 'Team 1'
        if (teamBet[index] > 1) {
            bank += (teamBet[index] * 2)
        } else {
            bank -= teamBet[index]
        }

    } else {
        winner = 'Team 2'
        if (teamBet[index] > 1) {
            bank += (teamBet[index] * 2)
        } else {
            bank -= teamBet[index]
        }
    }
    console.log(winner)
}


function drawBank() {
    let bankContent = document.getElementById('bankTotal')

    bankContent.innerText = `$${bank}`
}

let teamBet = [0, 0]
function bet(index, value) {
    bank -= value
    teamBet[index] += value
    console.log(teamBet);
    drawBank()
    checkWinner(index)
}

function betItAll(index) {
    bank -= bank
    teamBet[index] += bank
    console.log(teamBet);
    drawBank()
    checkWinner(index)
}

draftPlayers()