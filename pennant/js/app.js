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
    }
];

let app = new Vue({
    el: "#app",
    data: function () {
        return {
            state: 1,
            allTeams: TEAMS,
            dropdownTeam: null,
            game: {
                away: TEAMS[2],
                home: TEAMS[1]
            },
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
                <button @click="setTeam('away')">Away</button> 
                <button @click="setTeam('home')">Home</button>
            </p>
            <p><button @click="selectTeams()">Select teams</button></p>
        </div>
        
        <div>
            <table>
                <tr>
                    <td><team-card v-bind:team="game.away"></team-card></td>
                    <td><team-card v-bind:team="game.home"></team-card></td>
                </tr>
            </table>        
        </div>
        
        <div v-if="state === 2">
            <p>Game view</p>
            <p>Team cards here</p>
            <p>{{result}}</p>
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
                        {{g.away}} {{g.scores[0]}}</span>, 
                    <span v-bind:class="{win: g.scores[1] > g.scores[0]}">
                        {{g.home}} {{g.scores[1]}}
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
            console.log(typeof this.dropdownTeam);
            console.log(TEAMS[this.dropdownTeam]);
            this.game[slot] = TEAMS[+this.dropdownTeam];
        },
        selectTeams: function() {
            this.state = 2;
        },
        playGame: function() {
            this.result = playGame(this.game.away, this.game.home);
        },
        nextGame: function() {
            if (this.result) { this.log.push(this.result); }
            this.result = null;
        },
        clearLog: function() {this.log = []},
        flipTeams: function() {
            let tmp = this.game.away;
            this.game.away = this.game.home;
            this.game.home = tmp;
        },
        editTeams: function() {
            this.state = 1;
        }
    },
    computer: {},
    filters: {}
});

function playGame(away, home) {
    let scores = [1 + rolld6(), 1 + rolld6()];
    let inn = 9;
    if (scores[0] === scores[1]) {
        let extraInningRoll = rolld6();
        inn = 10 + extraInningRoll % 2;
        if (extraInningRoll > 3) scores[1]++; else scores[0]++;
    }
    let game = {
        away: away.id,
        home: home.id,
        scores: scores,
        inn: inn
    };
    game.summary = `${away.id} ${scores[0]}, ${home.id} ${scores[1]}`;
    return game
}

function rolld6() {
    return Math.floor(Math.random()*6) + 1
}
