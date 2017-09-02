
const rules = ["io", "tu", "lui/lei/Lei", "noi", "voi", "loro/Loro"]

class Utils{
    getRandomPersonIndex () {
        let min = Math.ceil(0);
        let max = Math.floor(rules.length);

        return Math.floor(Math.random() * (max - min +1)) 
    }

    
}

export default Utils