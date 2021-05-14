const { readdirSync }= require("fs");

const ascii = require("ascii-table");

let table = new ascii("Events");
table.setHeading("Event", "Loading");
module.exports = (ultima) => {
    readdirSync(__dirname + "/events/").forEach(dir => {
        const events = readdirSync(__dirname + `/events/`).filter(file => file.endsWith(".js"));

        for (let file of events) {
            let pull = require(`./events/${file}`);

            if (pull.name) {
                ultima.events.set(pull.name, pull);
            }
        }
    });
}
