Vue.component('quick-result', {
    props: {
        game: Object
    },
    template: `<div>
        <span v-bind:class="{win: game.scores[0] > game.scores[1]}">
            {{game.teams[0].city}} {{game.scores[0]}}</span>, 
        <span v-bind:class="{win: game.scores[1] > game.scores[0]}">
            {{game.teams[1].city}} {{game.scores[1]}}
        </span>
        <span v-if="game.inn != 9">({{g.inn}} inn)</span>
    </div>`
});

Vue.component('game-result', {
    props: {
        result: Object
    },
    data: function() {
        return {};
    },
    template: `<div>
        <div v-for="i in [0, 1]">
            <span style="width='2rem'">{{result.teams[i].id}}</span>
            <span style="width='1rem"">{{result.scores[i]}}</span>
            <span>
                [{{result.rolls[i].dice[0]}}][{{result.rolls[i].dice[1]}}]:
                  {{result.rolls[i].label}} 
                  ({{result.rolls[i].player.name}} {{result.rolls[i].player.mod}}) 
                  + [{{result.rolls[i].dice[2]}}] = 
                  {{result.rolls[i].score}} 
            </span>
        </div>
        <div>{{result.inn}} innings</dip>
    </div>`,
    filters: {

    }
});
