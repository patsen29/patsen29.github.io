Vue.component('card-list', {
    props: {
        cardsBat: Array, cardsPit: Array, tableType: String
    },
    data: function() {
        return {}
    },
    template: `<div>
        <table v-if="tableType !== 'cards'">
            <tr>
                <th>Name</th>
                <th>Dur</th>
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
            <tr v-for="b in cardsBat">
                <td>{{b.first}} {{b.last}}</td>
                <td>{{b.dur}}</td>
                <td>{{b.spd}}</td>
                <td>{{b.def}}</td>
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
        <table v-if="tableType !== 'cards'">
            <tr>
                <th>Name</th>
                <th>Dur</th>
                <th>End</th>
                <th>Hit</th>
                <th>Pos</th>
                <th>1B</th>
                <th>2B</th>
                <th>3B</th>
                <th>HR</th>
                <th>BB</th>
                <th>SO</th>
                <th>wOBA</th>
                <th>Temp</th>
            </tr>
            <tr v-for="p in cardsPit">
                <td>{{p.first}} {{p.last}}</td>
                <td>{{p.dur}}</td>
                <td>{{p.end}}</td>
                <td>{{p.hit}}</td>
                <td>{{p.pos}}</td>
                <td v-if="tableType=='raw'">{{p.raw.si.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{p.raw.db.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{p.raw.tr.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{p.raw.hr.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{p.raw.bb.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{p.raw.so.toFixed(4)}}</td>   
                <td v-if="tableType=='raw'">{{p.raw.wOBA | dec3}}</td> 
                <td v-if="tableType=='capped'">{{p.capped.si}}</td>
                <td v-if="tableType=='capped'">{{p.capped.db}}</td>
                <td v-if="tableType=='capped'">{{p.capped.tr}}</td>
                <td v-if="tableType=='capped'">{{p.capped.hr}}</td>
                <td v-if="tableType=='capped'">{{p.capped.bb}}</td>
                <td v-if="tableType=='capped'">{{p.capped.so}}</td>
                <td v-if="tableType=='capped'">{{p.capped.wOBA | dec3}}</td>
            </tr>
        </table>

        <div v-if="tableType === 'cards'" class="card-displays">
            <card-image v-for="b in cardsBat" v-bind:card="b"></card-image><card-image v-for="p in cardsPit" v-bind:card="p"></card-image>
        </div>        
    </div>`,
    methods: {},
    computed: {},
    filters: {}
});
