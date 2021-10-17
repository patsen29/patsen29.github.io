const TEAMS = [
    {
        year: 2021, id: "ATL", city: "Atlanta",
        hitters: [
            {name:"Acuna Jr.", pos:"RF", mod:11},
            {name:"Albies", pos:"2B", mod:4},
            {name:"Freeman", pos:"1B", mod:6},
            {name:"Riley", pos:"3B", mod:10},
            {name:"Duvall", pos:"OF", mod:1},
            {name:"Swanson", pos:"SS", mod:1},
            {name:"d'Arnaud", pos:"C", mod:-3},
            {name:"Heredia", pos:"CF", mod:-2},
            {name:"Soler", pos:"RF", mod:1},
            {name:"Adrianza", pos:"IF", mod:-3},
            {name:"Ozuna", pos:"LF", mod:-5},
            {name:"Pederson", pos:"OF", mod:-3},
            {name:"Contreras", pos:"C", mod:-4},
        ],
        pitchers: [
            {name:"Fried", sta:6, mod:-2},
            {name:"Morton", sta:6, mod:-1},
            {name:"Anderson", sta:5, mod:-1},
            {name:"Ynoa", sta:5, mod:0},
            {name:"Smyly", sta:4, mod:1},
            {name:"Smith", sta:1, mod:-1},
            {name:"Jackson", sta:1, mod:-3},
            {name:"Matzek", sta:1, mod:-3},
            {name:"Minter", sta:1, mod:1},
            {name:"Martin", sta:1, mod:1},
            {name:"Santana", sta:1, mod:1},
            {name:"Tomlin", sta:1, mod:6},
            {name:"Toussaint", sta:5, mod:2},
        ],
    },
    {
        year: 2021, id: "BOS", city: "Boston", nick: "Red Sox",
        hitters: [
            {name:"Hernandez", pos:"CF", mod:8},
            {name:"Verdugo", pos:"OF", mod:1},
            {name:"Martinez", pos:"DH", mod:3},
            {name:"Bogaerts", pos:"SS", mod:8},
            {name:"Devers", pos:"3B", mod:4},
            {name:"Renfroe", pos:"RF", mod:2},
            {name:"Arroyo", pos:"2B", mod:2},
            {name:"Vazquez", pos:"C", mod:-1},
            {name:"Dalbec", pos:"1B", mod:-3},
            {name:"Schwarber", pos:"LF", mod:1},
            {name:"Plawecki", pos:"C", mod:-4},
            {name:"Gonzalez", pos:"IF", mod:-6},
            {name:"Cordero", pos:"LF", mod:-8},

        ],
        pitchers: [
            {name:"Eovaldi", sta:6, mod:-2},
            {name:"Sale", sta:5, mod:-2},
            {name:"Pivetta", sta:5, mod:-1},
            {name:"Rodriguez", sta:5, mod:0},
            {name:"Houck", sta:4, mod:-1},
            {name:"Barnes", sta:1, mod:-1},
            {name:"Whitlock", sta:2, mod:-4},
            {name:"Taylor", sta:1, mod:-2},
            {name:"Hernandez", sta:1, mod:-1},
            {name:"Ottavino", sta:1, mod:0},
            {name:"Sawamura", sta:1, mod:0},
            {name:"Richards", sta:3, mod:2},
            {name:"Perez", sta:3, mod:2},
        ],
    },
    {
        year: 2021, id: "HOU", city: "Houston", nick: "Astros",
        hitters: [
            {name:"Altuve", pos:"2B", mod:6},
            {name:"Brantley", pos:"LF", mod:3},
            {name:"Bregman", pos:"3B", mod:4},
            {name:"Alvarez", pos:"DH", mod:4},
            {name:"Gurriel", pos:"1B", mod:5},
            {name:"Correa", pos:"SS", mod:12},
            {name:"Tucker", pos:"RF", mod:10},
            {name:"Straw", pos:"CF", mod:2},
            {name:"Maldonado", pos:"C", mod:-4},
            {name:"McCormick", pos:"OF", mod:6},
            {name:"A.Diaz", pos:"IF", mod:3},
            {name:"Castro", pos:"C", mod:0},
            {name:"Meyers", pos:"CF", mod:1}
        ],
        pitchers: [
            {name:"McCullers", sta:6, mod:-1},
            {name:"Valdez", sta:6, mod:-1},
            {name:"Greinke", sta:6, mod:1},
            {name:"L.Garcia", sta:5, mod:-1},
            {name:"Urquidy", sta:5, mod:-1},
            {name:"Pressly", sta:1, mod:-2},
            {name:"Javier", sta:3, mod:0},
            {name:"Odorizzi", sta:4, mod:1},
            {name:"Stanek", sta:1, mod:1},
            {name:"Taylor", sta:1, mod:1},
            {name:"Raley", sta:1, mod:3},
            {name:"Bielak", sta:2, mod:4},
            {name:"Abreu", sta:1, mod:6},
        ]
    },
    {
        year: 2021, id: "LAD", city: "Los Angeles", nick: "Dodgers",
        hitters: [
            {name:"Betts", pos:"RF", mod:8},
            {name:"C.Seager", pos:"SS", mod:10},
            {name:"T.Turner", pos:"IF", mod:8},
            {name:"J.Turner", pos:"3B", mod:5},
            {name:"Muncy", pos:"1B", mod:8},
            {name:"W.Smith", pos:"C", mod:6},
            {name:"Taylor", pos:"OF", mod:3},
            {name:"Pollock", pos:"LF", mod:7},
            {name:"Lux", pos:"IF", mod:3},
            {name:"Bellinger", pos:"CF", mod:-9},
            {name:"Beaty", pos:"OF", mod:-3},
            {name:"Barnes", pos:"C", mod:-2},
            {name:"Pujols", pos:"1B", mod:-4},
        ],
        pitchers: [
            {name:"Scherzer", sta:6, mod:-4},
            {name:"Buehler", sta:6, mod:-3},
            //{name:"Bauer", sta:6, mod:-2},
            {name:"Urias", sta:6, mod:-1},
            {name:"Kershaw", sta:6, mod:0},
            {name:"Gonsolin", sta:4, mod:-1},
            {name:"Jansen", sta:1, mod:-2},
            {name:"Treinen", sta:1, mod:-2},
            {name:"Bickford", sta:1, mod:-2},
            {name:"J.Kelly", sta:1, mod:-1},
            {name:"Vesia", sta:1, mod:0},
            {name:"V.Gonzalez", sta:1, mod:0},
            {name:"Price", sta:2, mod:1},
            {name:"White", sta:2, mod:3},

        ]
    },
    {
        year: 2021, id: "NYY", city: "New York", nick: "Yankees",
        hitters: [
            {name:"LeMahieu", pos:"IF", mod:0},
            {name:"Rizzo", pos:"1B", mod:-2},
            {name:"Judge", pos:"RF", mod:10},
            {name:"Stanton", pos:"DH", mod:4},
            {name:"Gallo", pos:"OF", mod:-2},
            {name:"Torres", pos:"SS", mod:-2},
            {name:"Sanchez", pos:"C", mod:-2},
            {name:"Urshela", pos:"IF", mod:-2},
            {name:"Gardner", pos:"OF", mod:-1},
            {name:"Odor", pos:"IF", mod:-2},
            {name:"Voit", pos:"1B", mod:-3},
            {name:"Frazier", pos:"OF", mod:-11},
            {name:"Higashioka", pos:"C", mod:-3},
        ],
        pitchers: [
            {name:"Cole", sta:6, mod:-3},
            {name:"Montgomery", sta:5, mod:-1},
            {name:"Kluber", sta:5, mod:-1},
            {name:"Taillon", sta:5, mod:0},
            {name:"Cortes Jr.", sta:4, mod:-3},
            {name:"Chapman", sta:1, mod:-2},
            {name:"Loaisiga", sta:1, mod:-4},
            {name:"Green", sta:1, mod:-2},
            {name:"Luetge", sta:1, mod:-1},
            {name:"Peralta", sta:1, mod:-1},
            {name:"Cessa", sta:1, mod:-1},
            {name:"King", sta:3, mod:0},
            {name:"German", sta:4, mod:0},

        ]
    },
    {
        year: 2021, id: "SFG", city: "San Francisco", nick: "Giants",
        hitters: [
            {name:"Wade Jr.", pos:"OF", mod:2},
            {name:"Yastrzemski", pos:"RF", mod:3},
            {name:"Posey", pos:"C", mod:7},
            {name:"Belt", pos:"1B", mod:7},
            {name:"Longoria", pos:"3B", mod:5},
            {name:"Crawford", pos:"SS", mod:12},
            {name:"Solano", pos:"2B", mod:1},
            {name:"Duggar", pos:"CF", mod:7},
            {name:"Ruf", pos:"1B", mod:10},
            //{name:"Dickerson", pos:"LF", mod:-4},
            {name:"Flores", pos:"IF", mod:2},
            {name:"Slater", pos:"OF", mod:3},
            {name:"La Stella", pos:"2B", mod:-2},
            {name:"Casali", pos:"C", mod:-1},

        ],
        pitchers: [
            {name:"Gausman", sta:6, mod:-2},
            {name:"DeSclafani", sta:5, mod:-2},
            {name:"Webb", sta:5, mod:-2},
            {name:"Wood", sta:5, mod:1},
            {name:"Cueto", sta:5, mod:1},
            {name:"Rogers", sta:1, mod:-2},
            {name:"McGee", sta:1, mod:0},
            {name:"Leone", sta:1, mod:-3},
            {name:"J.Garcia", sta:1, mod:-1},
            {name:"Alvarez", sta:1, mod:-1},
            {name:"Sanchez", sta:4, mod:-1},
            {name:"Littell", sta:1, mod:0},
            {name:"Long", sta:3, mod:4},

        ]
    },
    {
        year: 2021, id: "TBR", city: "Tampa Bay", nick: "Rays",
        hitters: [
            {name:"B.Lowe", pos:"2B", mod:7},
            {name:"Arozarena", pos:"OF", mod:6},
            {name:"W.Franco", pos:"SS", mod:13},
            {name:"Meadows", pos:"LF", mod:1},
            {name:"Y.Diaz", pos:"1B", mod:0},
            {name:"Margot", pos:"OF", mod:5},
            {name:"Wendle", pos:"IF", mod:7},
            {name:"Zunino", pos:"C", mod:10},
            {name:"Kiermaier", pos:"CF", mod:8},
            {name:"Phillips", pos:"OF", mod:6},
            {name:"Choi", pos:"1B", mod:1},
            {name:"Mejia", pos:"C", mod:3},
            {name:"N.Cruz", pos:"DH", mod:-2},
        ],
        pitchers: [
            {name:"Glasnow", sta:6, mod:-2},
            {name:"McClanaham", sta:5, mod:0},
            {name:"R.Hill", sta:5, mod:1},
            {name:"Yarbrough", sta:5, mod:4},
            {name:"Wacha", sta:4, mod:4},
            {name:"Castillo", sta:1, mod:0},
            {name:"McHugh", sta:2, mod:-3},
            {name:"Kittredge", sta:1, mod:-2},
            {name:"Rasmussen", sta:3, mod:-2},
            {name:"Feyereisen", sta:1, mod:0},
            {name:"Patino", sta:4, mod:2},
            {name:"Springs", sta:1, mod:2},
            {name:"Fairbanks", sta:1, mod:2},
            //{name:"Fleming", sta:4, mod:4},
        ]
    },
    {
        year: 2021, id: "TOR", city: "Toronto", nick: "Blue Jays",
        hitters: [
            {name:"Springer", pos:"CF", mod:6},
            {name:"Semien", pos:"2B", mod:10},
            {name:"Guerrero Jr.", pos:"1B", mod:10},
            {name:"Bichette", pos:"SS", mod:9},
            {name:"Hernandez", pos:"RF", mod:6},
            {name:"Grichuk", pos:"OF", mod:-2},
            {name:"Gurriel Jr.", pos:"LF", mod:3},
            {name:"Espinal", pos:"3B", mod:8},
            {name:"Jansen", pos:"C", mod:2},
            {name:"Biggio", pos:"3B", mod:-2},
            {name:"McGuire", pos:"C", mod:-3},
            {name:"Kirk", pos:"C", mod:-1},
            {name:"Tellez", pos:"1B", mod:-8},
        ],
        pitchers: [
            {name:"Ray", sta:6, mod:-3},
            {name:"Manoah", sta:6, mod:-2},
            {name:"Berrios", sta:6, mod:-1},
            {name:"Matz", sta:5, mod:0},
            {name:"Ryu", sta:5, mod:1},
            {name:"Romano", sta:1, mod:-3},
            {name:"Cimber", sta:1, mod:-3},
            {name:"Mayza", sta:1, mod:-1},
            {name:"Richards", sta:1, mod:-1},
            {name:"Stripling", sta:4, mod:1},
            {name:"Kay", sta:3, mod:3},
            {name:"Thornton", sta:1, mod:4},
            {name:"Dolis", sta:1, mod:4},
        ]
    }
];

let app = new Vue({
    el: "#app",
    data: function () {
        let home = rollDice(TEAMS.length - 1);
        let away = rollDice(TEAMS.length - 2);
        if (home === away) away = TEAMS.length - 1;
        return {
            state: 1,
            allTeams: TEAMS,
            dropdownTeam: null,
            game: [away, home],
            pitchers: [0, 0],
            result: null,
            log: []
        };
    },
    template: `<div>
        <div v-if="state === 1">
            <p>Select teams: 
                <select v-model="dropdownTeam">
                    <option v-for="(team, index) in TEAMS" v-bind:value="index">{{team.city}}</option>
                </select>
                <button @click="setTeam(0)">Away</button> 
                <button @click="setTeam(1)">Home</button>
            </p>
        </div>
        
        <div id="team-cards">
            <table>
                <tr>
                    <td><team-card v-bind:team="allTeams[game[0]]"></team-card></td>
                    <td><team-card v-bind:team="allTeams[game[1]]"></team-card></td>
                </tr>
                <tr>
                    <td>Pitcher: <select v-model="pitchers[0]">
                        <option v-for="(player, index) in allTeams[game[0]].pitchers" v-bind:value="index" v-if="player.sta > 2">
                            {{index < 5 ? (1+index)+"." : ""}} {{player.name}} (S{{player.sta}})
                        </option>
                    </select></td>
                    <td>Pitcher: <select v-model="pitchers[1]">
                        <option v-for="(player, index) in allTeams[game[1]].pitchers" v-bind:value="index" v-if="player.sta > 2">
                            {{index < 5 ? (1+index)+"." : ""}} {{player.name}} (S{{player.sta}})
                        </option>
                    </select></td>
                </tr>
            </table>        
        </div>
        
        <p v-if="state === 1"><button @click="setupGame()">Start game</button></p>
        <div v-if="state === 2">
            <p v-if="result">{{result.rolls[0].dice}} {{result.teams[0].id}} {{result.scores[0]}} ({{result.rolls[0].label}}: {{result.rolls[0].player.name}} {{result.rolls[0].player.mod}})</p>
            <p v-if="result">{{result.rolls[1].dice}} {{result.teams[1].id}} {{result.scores[1]}} ({{result.rolls[1].label}}: {{result.rolls[1].player.name}} {{result.rolls[1].player.mod}})</p>
            <p v-if="result">{{result.inn}} innings</p>
            <p>
                <button v-bind:disabled="result" @click="playGame()">Play game</button>
                <button v-bind:disabled="!result" @click="nextGame()">Next game</button>
                <button @click="flipTeams()">Switch home/away</button>
                <button @click="editTeams()">Change teams</button>
            </p>
        </div>
        <hr>    
        <div>
            <h3>Game log</h3>
            <ul>
                <li v-for="g in log">
                    <span v-bind:class="{win: g.scores[0] > g.scores[1]}">
                        {{g.teams[0].city}} {{g.scores[0]}}</span>, 
                    <span v-bind:class="{win: g.scores[1] > g.scores[0]}">
                        {{g.teams[1].city}} {{g.scores[1]}}
                    </span>
                    <span v-if="g.inn != 9">({{g.inn}} inn)</span>
                </li>
            </ul>
            <p>
                <button @click="clearLog()">Clear log</button>
            </p>
        </div>
    </div>`,
    methods: {
        setTeam: function(slot) {
            let teams = [this.game[0], this.game[1]];
            teams[slot] = +this.dropdownTeam;
            this.pitchers[slot] = 0;
            this.game = teams;
        },
        setupGame: function() {
            this.state = 2;
        },
        playGame: function() {
            this.result = playGame([this.allTeams[this.game[0]], this.allTeams[this.game[1]]], this.pitchers);
        },
        nextGame: function() {
            if (this.result) { this.log.push(this.result); }
            this.result = null;
            this.pitchers[0] = (this.pitchers[0] + 1) % 5;
            this.pitchers[1] = (this.pitchers[1] + 1) % 5;
        },
        clearLog: function() {this.log = []},
        flipTeams: function() {
            this.game = [this.game[1], this.game[0]];
            this.pitchers = [this.pitchers[1], this.pitchers[0]];
        },
        editTeams: function() {
            this.state = 1;
        }
    },
    computer: {},
    filters: {}
});

function playGame(teams, pitchers) {
    //let scores = [1 + rollDice(), 1 + rollDice()];
    let inn = 9;
    let rolls = [];
    for (let i = 0; i < 2; i++) {
        let dice = [rollDice(), rollDice(), rollDice()];
        let key = 10*dice[0] + dice[1];
        let playerMap = findPlayer(key, teams[i], teams[1-i], pitchers[1-i]);
        rolls[i] = {
            dice: dice,
            label: playerMap.label,
            player: playerMap.player,
            score: Math.max(0, dice[2] + playerMap.player.mod)
        };
    }
    let scores = [rolls[0].score, rolls[1].score];
    if (scores[0] === scores[1]) {
        let extraInningRoll = rollDice();
        inn = 10 + extraInningRoll % 2;
        if (extraInningRoll > 3) scores[1]++; else scores[0]++;
    }
    return {
        teams: [teams[0], teams[1]],
        scores: scores,
        inn: inn,
        rolls: rolls
    }
}

function findPlayer(key, oTeam, dTeam, rotSlot) {
    let starter = dTeam.pitchers[rotSlot];
    let sta = starter.sta;
    let res;
    if (key <= 12) res = {label: "Lineup 1", player: oTeam.hitters[0]};
    else if (key <= 14) res = {label: "Lineup 2", player: oTeam.hitters[1]};
    else if (key <= 16) res = {label: "Lineup 3", player: oTeam.hitters[2]};
    else if (key <= 22) res = {label: "Lineup 4", player: oTeam.hitters[3]};
    else if (key <= 24) res = {label: "Lineup 5", player: oTeam.hitters[4]};
    else if (key <= 26) res = {label: "Lineup 6", player: oTeam.hitters[5]};
    else if (key <= 32) res = {label: "Lineup 7", player: oTeam.hitters[6]};
    else if (key <= 34) res = {label: "Lineup 8", player: oTeam.hitters[7]};
    else if (key <= 35) res = {label: "Lineup 9", player: oTeam.hitters[8]};
    else if (key <= 36) res = {label: "Lin 9/Bench", player: oTeam.hitters[9]};
    else if (key <= 54) res = {label: "Starter", player: starter};
    else if (key === 55) res = {label: "6th inn", player: (sta < 6) ? dTeam.pitchers[11] : starter};
    else if (key === 56) res = {label: "6th inn", player: (sta < 6) ? dTeam.pitchers[10] : starter};
    else if (key === 61) res = {label: "7th inn", player: (sta < 7) ? dTeam.pitchers[9] : starter};
    else if (key === 62) res = {label: "7th inn", player: (sta < 7) ? dTeam.pitchers[8] : starter};
    else if (key === 63) res = {label: "8th inn", player: (sta < 8) ? dTeam.pitchers[7] : starter};
    else if (key === 64) res = {label: "8th inn", player: (sta < 8) ? dTeam.pitchers[6] : starter};
    else res = {label: "Closer", player: (sta < 9) ? dTeam.pitchers[5] : starter};
    return res;
}

function rollDice(num) {
    return Math.floor(Math.random()*(num || 6)) + 1
}
