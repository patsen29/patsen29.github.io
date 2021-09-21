const DEBUG_DAT = ``;
const POS_LABELS = ["--", "P", "C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH"];

Vue.filter('dec3', num => num && num.toFixed(3).replace("0.", "."));

let app = new Vue({
    el: "#app",
    data: function () {
        return {
            dat: DEBUG_DAT,
            lgAvg: {
                year: 0,
                lg: 'Any',
                raw: {inn: 31182, ab: 119293, h: 31239, db: 5551, tr: 884, hr: 2906, bb: 11469, so: 19090, tmG: 162},
                scaled: {}
            },
            tableType: "cards",
            cardsBat: [],
            cardsPit: []
        };
    },
    template: `<div>
        <div class="no-print">
            <div><label for="datIn">Paste dat file in here:</label></div>
            <div><textarea id="datIn" cols="120" rows="10" v-model="dat" placeholder="Paste dat here"></textarea></div>
            <div>Lg info: {{lgAvg.year}}{{lgAvg.lg}} 
                <span class="warning">WARN: League info not available, using generic defaults</span> 
            </div>
            <div>
                <button @click="makeCards()">Run</button>
                <button @click="clear">Clear</button>
            </div>
            <div>
                <label for="tableType">Table type:</label>
                <select v-model="tableType" id="tableType" >
                    <option value="raw">Raw ratings</option>
                    <option value="capped">Scaled ratings</option>
                    <option value="cards">As cards</option>
                </select>
            </div>
        </div>
        <card-list 
            v-bind:cardsBat="cardsBat" 
            v-bind:cardsPit="cardsPit" 
            v-bind:tableType="tableType">
        </card-list>
    </div>`,
    methods: {
        // 0         1         2         3         4         5         6         7         8         9         0
        // 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0 2 4 6 8 0
        // 00    00 Name              _AB Hit  2B  3B  HR  BB  SO RBI B ERR SB CS Gam Gam-P Gam-P Gam-P Gam-P
        // 00    00 Name              Inn Hit          HR  BB  SO ERA T   W  L Sv Gam  St  *  AB
        makeCards: function () {
            let datLines = this.dat.split('\n');
            let year = datLines[0].substring(10, 14);
            let lg = datLines[0].substring(1, 2);
            let team = datLines[0].substring(15, 27).trim();
            let isDef = datLines[0].substring(61, 64).toUpperCase() === "DEF";
            let meta = datLines.find(line => line.startsWith("*") && line.indexOf("=") > 0) || "";
            let lgBF = this.lgAvg.raw.ab + this.lgAvg.raw.bb;
            let scaled = {
                bb: this.lgAvg.raw.bb / lgBF,
                h: this.lgAvg.raw.h / lgBF,
                db: this.lgAvg.raw.db / lgBF,
                tr: this.lgAvg.raw.tr / lgBF,
                hr: this.lgAvg.raw.hr / lgBF,
                so: this.lgAvg.raw.so / lgBF,
                ipConst: (this.lgAvg.raw.ab - this.lgAvg.raw.h) / this.lgAvg.raw.inn
            };
            scaled.wOBA = .7 * scaled.bb + .9 * scaled.h + .35 * scaled.db + .7 * scaled.tr + 1.1 * scaled.hr;
            this.lgAvg.scaled = scaled;
            let cardsBat = datLines.filter(line => +line.substring(6, 8) > 1)
                .map(line => {
                    let stats = {
                        ab: +line.substring(27, 30),
                        h: +line.substring(31, 34),
                        db: +line.substring(35, 38),
                        tr: +line.substring(39, 42),
                        hr: +line.substring(43, 46),
                        bb: +line.substring(47, 50),
                        so: +line.substring(51, 54),
                        rbi: +line.substring(55, 58),
                        b: line[59],
                        e: +line.substring(61, 64),
                        sb: +line.substring(64, 67),
                        cs: +line.substring(68, 70),
                        g: +line.substring(71, 74)
                    };
                    let pa = stats.ab + stats.bb;
                    let dur = pa / 16200 * this.lgAvg.raw.tmG;
                    let spd = getSpeed(stats);
                    let wOBA = (.7 * stats.bb + .9 * stats.h + .35 * stats.db + .7 * stats.tr + 1.1 * stats.hr) / pa;
                    let power = Math.max(1, Math.min(6, Math.round(Math.max(6, 12*stats.hr) / pa / scaled.hr)));
                    let rawChart = {
                        hr: 2 * stats.hr / pa - scaled.hr, // TODO: Weak power rule
                        tr: 2 * stats.tr / pa - scaled.tr,
                        db: 2 * stats.db / pa - scaled.db,
                        h: 2 * stats.h / pa - scaled.h,
                        bb: 2 * stats.bb / pa - scaled.bb,
                        so: 2 * stats.so / pa - scaled.so,
                    };
                    rawChart.si = (rawChart.h - rawChart.hr - rawChart.tr - rawChart.db); // TODO: Use slop
                    let capped = capAndScale(rawChart, 216);
                    let posList = [];
                    let inn = 0;
                    let defChance = 0;
                    for (let i = 0; i < 4; i++) {
                        let start = 75 + i * 6;
                        let g = +line.substring(start, start + 3);
                        let pos = +line.substring(start + 4, start + 5) || 10;
                        if (pos < 10) inn += 9 * g;
                        if (g > stats.g / 8) {
                            posList.push(POS_LABELS[pos]);
                        } else if (g > 1) {
                            posList.push(POS_LABELS[pos].toLowerCase());
                        }
                        defChance += g * [0, 1, 1, 2.2, 5.7, 2.9, 4.8, 1.85, 2.45, 1.85, 0][pos];
                    }
                    inn = Math.min(inn, stats.g * 9);
                    let e = isDef ? (1 - stats.e/1000) * defChance : stats.e;
                    let err = getErrorRate(e, inn);
                    let name = splitName(line.substring(9, 27));
                    return {
                        first: name[0],
                        last: name[1],
                        year: year,
                        lg: lg,
                        team: team,
                        type: "B",
                        dur: Math.round(dur),
                        pos: posList.slice(0, 4).join("/"),
                        spd: Math.max(1, Math.min(9, Math.round(spd))),
                        def: err,
                        power: power,
                        raw: {
                            si: rawChart.si,
                            db: rawChart.db,
                            tr: rawChart.tr,
                            hr: rawChart.hr,
                            bb: rawChart.bb,
                            so: rawChart.so,
                            wOBA: wOBA
                        },
                        capped: capped,
                        stats: stats,
                        chart: convertChart(capped, false)
                    };
                });
            let cardsPit = datLines.filter(line => line.substring(6, 8) === "01" && +line.substring(27, 30) > 0)
                .map(line => {
                    let stats = {
                        ip: +line.substring(27, 30),
                        h: +line.substring(31, 34),
                        hr: +line.substring(43, 46),
                        bb: +line.substring(47, 50),
                        so: +line.substring(51, 54),
                        era: +line.substring(55, 58) / 100,
                        t: line[59],
                        w: +line.substring(61, 64),
                        l: +line.substring(64, 67),
                        sv: +line.substring(68, 70),
                        g: +line.substring(71, 74),
                        gs: +line.substring(75, 78),
                    };
                    let bfp = stats.ip * scaled.ipConst + stats.h + stats.bb;
                    let wOBA = (.7 * stats.bb + stats.h + stats.hr) / bfp;
                    let rawChart = {
                        h: 2 * stats.h / bfp - scaled.h,
                        hr: 2 * stats.hr / bfp - scaled.hr,
                        bb: 2 * stats.bb / bfp - scaled.bb,
                        so: 2 * stats.so / bfp - scaled.so
                    };
                    rawChart.db = (rawChart.h - rawChart.hr) / (scaled.h - scaled.hr) * scaled.db;
                    rawChart.tr = (rawChart.h - rawChart.hr) / (scaled.h - scaled.hr) * scaled.tr;
                    rawChart.si = rawChart.h - rawChart.db - rawChart.tr - rawChart.hr;
                    let capped = capAndScale(rawChart, 216);

                    let dur = (.056 * stats.g + .024 * stats.ip) / 162 * this.lgAvg.raw.tmG;
                    let pos = getPitcherRole(stats.g, stats.gs, stats.sv);
                    let name = splitName(line.substring(9, 27));
                    let end = Math.round(stats.ip / stats.g) + 1;
                    let hit = line[80] || (end > 3 ? "C" : "D"); // TODO: Parse hitting stats later?
                    return {
                        first: name[0],
                        last: name[1],
                        year: year,
                        lg: lg,
                        team: team,
                        type: "P",
                        pos: pos,
                        dur: Math.round(dur),
                        end: end,
                        hit: hit,
                        raw: {
                            si: rawChart.si,
                            db: rawChart.db,
                            tr: rawChart.tr,
                            hr: rawChart.hr,
                            bb: rawChart.bb,
                            so: rawChart.so,
                            wOBA: wOBA
                        },
                        capped: capped,
                        stats: stats,
                        chart: convertChart(capped, true)
                    };
                });
            cardsBat.forEach(b => {
                let index = this.cardsBat.findIndex(e =>
                    e.team === b.team && e.last === b.last && e.first === b.first && e.year === b.year
                );
                if (index === -1) {
                    this.cardsBat.push(b)
                } else {
                    this.cardsBat[index] = b;
                }
            });
            cardsPit.forEach(p => {
                let index = this.cardsBat.findIndex(e =>
                    e.team === p.team && e.last === p.last && e.first === p.first && e.year === p.year
                );
                if (index === -1) {
                    this.cardsPit.push(p);
                } else {
                    this.cardsPit[index] = p;
                }
            });
        },
        clear: function () {
            this.cardsBat = [];
            this.cardsPit = [];
        }
    },
    computed: {},
    filters: {
        split: function (num) {
            if (num < 0) return "—";
            let x = Math.round(num / 6);
            return Math.floor(num / 6) + "." + (num % 6);
        },
    }
});

function getErrorRate(err, inn) {
    // TODO: Should probably not be above average if adjusting 0 errors
    let errRate = Math.max(0.5, err) / inn * 2592 / 4.3;
    if (errRate >= 14) return 1;
    if (errRate >= 12.5) return 2;
    if (errRate >= 11) return 3;
    if (errRate >= 9) return 4;
    if (errRate >= 7.5) return 5;
    if (errRate >= 6) return 6;
    if (errRate >= 4.5) return 7;
    if (errRate >= 3) return 8;
    if (errRate >= 1.5) return 9;
    return 10;
}

function getPitcherRole(g, gs, sv) {
    let rpRole = (sv * 8 > g) ? "CL" : "RP";
    let startPct = gs / g;
    if (startPct > .8) return "SP";
    if (startPct > .5) return `SP/${rpRole}`;
    if (startPct > .2) return `${rpRole}/SP`;
    return rpRole
}

function getSpeed(stats) {
    let timesOnBase = Math.max(1, stats.h + stats.bb - stats.db - stats.tr - stats.hr);
    let spd1 = ((stats.sb + 3) / (stats.sb + stats.cs + 7) - .4) * 20;
    let spd2 = Math.sqrt((stats.sb + stats.cs) / timesOnBase) / 0.07;
    let spd3 = stats.tr / (stats.ab - stats.hr - stats.so) / .02 * 10;
    return (10 * spd1 + 10 * spd2 + 6 * Math.min(11, spd3)) / 26;

}

function capAndScale(raw, scale) {
    let target = .7 * raw.bb + .9 * raw.si + 1.25 * raw.db + 1.6 * raw.tr + 2 * raw.hr;
    if (target <= 0) return {si: 0, db: 0, tr: 0, hr: 0, bb: 0, so: Math.round(scale * raw.so)};
    let capped = {
        si: Math.max(0, raw.si),
        db: Math.max(0, raw.db),
        tr: Math.max(0, raw.tr),
        hr: Math.max(0, raw.hr),
        bb: Math.max(0, raw.bb),
        so: Math.max(0, raw.so)
    };
    let cappedwOBA = .7 * capped.bb + .9 * capped.si + 1.25 * capped.db + 1.6 * capped.tr + 2 * capped.hr;
    // cappedwOBA will be smaller than targetwOBA
    let mult = cappedwOBA / target;
    let adj = {
        si: capped.si * mult,
        db: capped.db * mult,
        tr: capped.tr * mult,
        hr: capped.hr * mult,
        bb: capped.bb * mult,
        so: capped.so,
    };
    let scaled = {
        hr: Math.round(adj.hr * scale),
        tr: Math.round(adj.tr * scale),
        db: Math.round(adj.db * scale),
        bb: Math.round(adj.bb * scale),
        so: Math.round(adj.so * scale),
        si: 0
    };
    if (adj.si > 0) {
        scaled.si = Math.round((target * scale - 2*scaled.hr - 1.6*scaled.tr - 1.25*scaled.db - .7*scaled.bb) / .9)
    }
    scaled.wOBA = (.7*scaled.bb + .9*scaled.si + 1.25*scaled.db + 1.6*scaled.tr + 2*scaled.hr) / scale;
    return scaled;
}

function splitName(name) {
    let tokens = name.split(",");
    return [tokens[1].trim(), tokens[0].trim()];
}

function convertChart(chart, addErrors) {
    let counts = [chart.si, chart.db, chart.tr, chart.hr, chart.bb, chart.so];
    let renderedChart = [];
    let fbPool = ["F1", "F2", "F3", "F?"];
    let gbPool = ["G1", "G2"];
    let outPool = ["PO", "LO", "F?", "F3", "F2", "F1", "G?", "G3", "G2", "G1"];
    let allPool = [
        ["s1", "s2", "s?"],
        ["d2", "d3", "d?"],
        ["tr"],
        ["hr"],
        ["bb"],
        ["KO"]
    ];
    for (let i = 0; i < counts.length; i++) {
        let count = counts[i];
        let resultPool = allPool[i];

        let full = Math.floor(count / 6);
        let split = count % 6;
        for (let j = 0; j < full; j++) {
            renderedChart.push(resultPool[j % resultPool.length])
        }
        if (split > 0) {
            let first = resultPool[full % resultPool.length];
            let splitPool = (i === 0 || i === 4) ? gbPool : fbPool;
            let second = splitPool.shift();
            let splitOn = split + 1;
            renderedChart.push(`${first}${second}(${splitOn})`)
        }
    }
    // Add outs
    let outCount = (addErrors ? 27 : 36) - renderedChart.length;
    for (let i = 0; i < outCount; i++) {
        renderedChart.push(outPool[i % 10])
    }
    // Add errors
    let errorCount = 36 - renderedChart.length;
    for (let i = 1; i <= errorCount; i++) {
        renderedChart.push((errorCount < 9) ? "E?" : `E${i}`)
    }
    return renderedChart;
}
