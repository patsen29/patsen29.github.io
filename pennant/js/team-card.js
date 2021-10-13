Vue.component('player-list', {

});

Vue.component('team-card', {
    props: {
        team: Object
    },
    data: function () {
        return {
            slots: ["C9", "R8", "R8", "R7", "R7", "R6", "R6"]
        };
    },
    template: `<div class="team-card">
        <div class="team-header">{{team.year}} {{team.city}} {{team.nick}}</div>
        <div class="flex">
            <div>
                <table>
                <tr><th class="header" colspan="2">Hitters</th><th>Bat</th></tr>
                <tr v-for="b in team.hitters" class="hover">
                    <td class="pos">{{b.pos}}</td>                    
                    <td class="name">{{b.name}}</td>                    
                    <td class="mod">{{b.mod | mod}}</td>                    
                </tr>
                </table>                
            </div>
            <div>
                <table>
                <tr><th class="header" colspan="2">Pitchers</th><th>Pit</th></tr>
                <tr v-for="(p, i) in team.pitchers" class="hover">
                    <td class="pos">
                        <span v-if="i < 5">S{{p.sta}}</span>
                        <span v-else-if="i < 12">{{slots[i-5]}}</span>
                        <span v-else-if="p.sta > 2">L{{p.sta}}</span>
                        <span v-else>R{{p.sta}}</span>
                    </td>                    
                    <td class="name">{{p.name}}</td>                    
                    <td class="mod">{{p.mod | mod}}</td>                    
                </tr>
                </table>                
            </div>
        </div>
    </div>`,
    filters: {
        mod: function(num) {
            if (num < -4) return "Z";
            if (num < 0) return num.toString();
            return `+${num}`;
        }
    }
});
