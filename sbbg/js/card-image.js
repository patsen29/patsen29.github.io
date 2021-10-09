Vue.component('card-image', {
    props: {
        card: Object
    },
    template: `<div class="card-outer">
        <div class="card-inner">
            <div class="card-name" v-bind:class="{slim: card.flags.slim}">{{card.first}} <span class="last">{{card.last}}</span></div>
            <div class="card-team">{{card.year}}{{card.lg}} {{card.team}}</div>
            <div class="card-chart">
                <div v-for="row in toChart">
                    <span class="card-chart-cell" v-for="(col, index) in row">
                        <span class="head">{{index}}</span> 
                        <span class="result" v-bind:class="{ob: typeof col === 'string' && col[0] === col[0].toLowerCase()}">{{col}}</span>
                    </span>                
                </div>
            </div>
            <div class="card-stats">
                <div v-if="card.type==='B'" class="card-ratings">
                    <b>Spd:</b> <span>{{card.spd}}</span>, 
                    <b>Def:</b> <span>{{card.def}}</span>, 
                    <b v-if="card.pos.length < 6">Pos:</b> <span>{{card.pos}}</span></div>
                <div v-if="card.type==='P'" class="card-ratings">
                    <b>End:</b> <span>{{card.end}}</span>, 
                    <b>Hit:</b> <span>{{card.hit}}</span>, 
                    <b>Pos:</b> <span>{{card.pos}}</span></div>
                <div class="card-stats" v-if="card.type==='B'">
                    {{card.stats.ab}} AB, {{card.stats.h / card.stats.ab | dec3}}, {{card.stats.hr}} HR, 
                    <span v-if="card.stats.sb >= card.stats.rbi / 10">{{card.stats.sb}} SB</span>
                    <span v-else>{{card.stats.rbi}} RBI</span>
                </div>
                <div class="card-stats" v-if="card.type==='P'">
                    {{card.stats.ip}} IP,  
                    <span v-if="card.stats.sv * 10 > card.stats.so">
                        {{card.stats.era.toFixed(2)}} ERA, {{card.stats.sv}} Sv</span>
                    <span v-else-if="card.stats.w * 15 > card.stats.so">
                        {{card.stats.w}}-{{card.stats.l}}, {{card.stats.era.toFixed(2)}} ERA</span>
                    <span v-else>
                        {{card.stats.era.toFixed(2)}} ERA, {{card.stats.so}} SO</span>
                </div>
            </div>
        </div>
    </div>`,
    computed: {
        toChart() {
            let chart = this.card.chart;
            return [
                {11: chart[ 0], 31: chart[12], 51: chart[24]},
                {12: chart[ 1], 32: chart[13], 52: chart[25]},
                {13: chart[ 2], 33: chart[14], 53: chart[26]},
                {14: chart[ 3], 34: chart[15], 54: chart[27]},
                {15: chart[ 4], 35: chart[16], 55: chart[28]},
                {16: chart[ 5], 36: chart[17], 56: chart[29]},
                {21: chart[ 6], 41: chart[18], 61: chart[30]},
                {22: chart[ 7], 42: chart[19], 62: chart[31]},
                {23: chart[ 8], 43: chart[20], 63: chart[32]},
                {24: chart[ 9], 44: chart[21], 64: chart[33]},
                {25: chart[10], 45: chart[22], 65: chart[34]},
                {26: chart[11], 46: chart[23], 66: chart[35]}
            ]
        }
    },
    filters: {
    }
});
