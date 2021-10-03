Vue.component('card-list', {
    props: {
        cards: Array, tableType: String
    },
    template: `<div>
        <table v-if="tableType !== 'cards'">
            <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Team</th>
                <th>Spd</th>
                <th>Def</th>
                <th>Pos</th>
                <th>Pow</th>
                <th>1B</th>
                <th>2B</th>
                <th>3B</th>
                <th>HR</th>
                <th>BB</th>
                <th>SO</th>
                <th>wOBA</th>
                <th>Temp</th>
            </tr>
            <tr v-for="b in cards">
                <td>{{b.first}} {{b.last}}</td>
                <td>{{b.year}}{{b.lg}}<span v-if="b.flags.generic">?</span></td>
                <td>{{b.team}}</td>
                <td>{{b.spd || b.end}}</td>
                <td>{{b.def || b.hit}}</td>
                <td>{{b.pos}}</td>
                <td>{{b.power}}</td>
                <td v-if="tableType=='raw'">{{b.raw.si.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{b.raw.db.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{b.raw.tr.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{b.raw.hr.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{b.raw.bb.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{b.raw.so.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{b.raw.wOBA.toFixed(3)}}</td> 
                <td v-if="tableType=='capped'">{{b.capped.si}}</td>
                <td v-if="tableType=='capped'">{{b.capped.db}}</td>
                <td v-if="tableType=='capped'">{{b.capped.tr}}</td>
                <td v-if="tableType=='capped'">{{b.capped.hr}}</td>
                <td v-if="tableType=='capped'">{{b.capped.bb}}</td>
                <td v-if="tableType=='capped'">{{b.capped.so}}</td>
                <td v-if="tableType=='capped'">{{b.capped.wOBA | dec3}}</td>
            </tr>
        </table>

        <div v-if="tableType === 'cards'" class="card-displays">
            <card-image v-for="p in cards" v-bind:card="p"></card-image>
        </div>        
    </div>`,
    methods: {},
    computed: {},
    filters: {}
});
