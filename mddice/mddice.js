new Vue({
    el: '#app',
    data: {
        input: {
            numDice: 3,
            rollBonus: '-10,15',
            breakTarget: 20
        },
        output: {
            text: '',
            table: []
        }
    },
    methods: {
        processInput() {
            let bonusRange = this.input.rollBonus.split(',')
            let bonusStart = +bonusRange[0]
            let bonusEnd = +bonusRange[bonusRange.length - 1]
            let numDice = +this.input.numDice
            let breakTarget = +this.input.breakTarget
            let table = []
            for (let bonus = bonusStart; bonus <= bonusEnd; bonus++) {
                const NUM_SIMS = 100000
                let total = 0
                let breakCount = 0
                for (let i = 0; i < NUM_SIMS; i++) {
                    let sum = rollExploding(numDice) + bonus
                    if (sum >= breakTarget) breakCount++
                    total += sum
                }
                let base = total / NUM_SIMS

                table.push({
                    bonus: bonus,
                    base: total / NUM_SIMS,
                    break: breakCount / NUM_SIMS * 100
                })
            }
            this.output.text = 'Rolled ' + numDice + 'd6'
            this.output.table = table

        },
        clear() {
            this.output.text = ''
            this.output.table = []
        }
    }
})
function rollExploding(numDice = 3) {
    let rollsLeft = numDice
    let sum = 0
    while (rollsLeft > 0) {
        let roll = rolld6()
        sum += roll
        if (roll < 6) rollsLeft--
    }
    return sum
}
function rolld6() {
    return Math.floor(Math.random() * 6) + 1
}
