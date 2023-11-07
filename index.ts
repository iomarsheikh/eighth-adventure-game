import inquirer from "inquirer";
import chalk from "chalk";

// Player 1 Class and Methods
class player1 {
    name: string;
    fuel: number = 100;
    constructor(name: string) { this.name = name }
    increaseFuel() { this.fuel = 100 }
    decreaseFuel() { this.fuel = this.fuel - 25 }
}

// Player 2 Class and Methods
class player2 {
    name: string;
    fuel: number = 100;
    constructor(name: string) { this.name = name }
    increaseFuel() { this.fuel = 100 }
    decreaseFuel() { this.fuel = this.fuel - 25 }
}

// main function start of program execution
async function mainMenu() {

    // players data gathring
    let players = await inquirer.prompt([{
        name: "yourCharacter",
        type: "list",
        choices: ["Skeleton", "Assasin", "Zoombie"],
        message: "Select your character:"
    },
    {
        name: "opponent",
        type: "list",
        choices: ["Skeleton", "Assasin", "Zoombie"],
        message: "Select opponent character"
    }
    ]);

    // players object declaration with constructor parametor
    let p1 = new player1(players.yourCharacter);
    let p2 = new player2(players.opponent);
    
        // Play with Skeleton
        do { 
        if (players.opponent === "Skeleton") {
            console.log(`${players.yourCharacter} VS ${players.opponent}`);

            let actions = await inquirer.prompt([{
                name: "action",
                type: "list",
                choices: ["Attack", "Bonus Life", "Quit Game"],
                message: "Select to Play:"
            }]);

            if (actions.action == "Attack") {
                let score = Math.floor(Math.random() * 2);
                if (score > 0) {
                    p1.decreaseFuel();
                    console.log(`${p1.name} Life ${p1.fuel}%`);
                    console.log(`${p2.name} Life ${p2.fuel}%`);

                    if (p1.fuel <= 0) {
                        console.log(chalk.bold.blackBright(`${p2.name} You Win!`));
                        process.exit();
                    }
                }
                if (score <= 0) {
                    p2.decreaseFuel();
                    console.log(`${p2.name} Life ${p2.fuel}%`);
                    console.log(`${p1.name} Life ${p1.fuel}%`);
                    if (p2.fuel <= 0) {
                        console.log(chalk.bold.blueBright(`${p1.name} You Win!`));
                        process.exit();
                    }

                }
            }
            if (actions.action == "Bonus Life") {
                p1.increaseFuel();
                p2.increaseFuel();
            }
            if (actions.action == "Quit Game") {
                console.clear();
                console.log(chalk.bold.redBright(`You loss Game..! Try Again.`));
                process.exit();

            }
        }

        // Play with Assasin
        
        if (players.opponent === "Assasin") {
            console.log(`${players.yourCharacter} VS ${players.opponent}`);


            let actions = await inquirer.prompt([{
                name: "action",
                type: "list",
                choices: ["Attack", "Bonus Life", "Quit Game"],
                message: "Select to Play:"
            }]);

            if (actions.action == "Attack") {
                let score = Math.floor(Math.random() * 2);
                if (score > 0) {
                    p1.decreaseFuel();
                    console.log(`${p1.name} Life ${p1.fuel}%`);
                    console.log(`${p2.name} Life ${p2.fuel}%`);

                    if (p1.fuel <= 0) {
                        console.log(chalk.bold.blueBright(`${p2.name} You Win!`));
                        process.exit();
                    }
                }
                if (score <= 0) {
                    p2.decreaseFuel();
                    console.log(`${p2.name} Life ${p2.fuel}%`);
                    console.log(`${p1.name} Life ${p1.fuel}%`);
                    if (p2.fuel <= 0) {
                        console.log(chalk.bold.blueBright(`${p1.name} You Win!`));
                        process.exit();
                    }

                }

            }
            if (actions.action == "Bonus Life") {
                p1.increaseFuel();
                p2.increaseFuel();
            }
            if (actions.action == "Quit Game") {
                console.clear();
                console.log(chalk.bold.redBright(`You loss Game..! Try Again.`));
                process.exit();

            }
        }

        // Play with Zoombie
        if (players.opponent === "Zoombie") {
            console.log(`${players.yourCharacter} VS ${players.opponent}`);


            let actions = await inquirer.prompt([{
                name: "action",
                type: "list",
                choices: ["Attack", "Bonus Life", "Quit Game"],
                message: "Select to Play:"
            }]);

            if (actions.action == "Attack") {
                let score = Math.floor(Math.random() * 2);
                if (score > 0) {
                    p1.decreaseFuel();
                    console.log(`${p1.name} Life ${p1.fuel}%`);
                    console.log(`${p2.name} Life ${p2.fuel}%`);

                    if (p1.fuel <= 0) {
                        console.log(chalk.bold.blueBright(`${p2.name} You Win!`));
                        process.exit();
                    }
                }
                if (score <= 0) {
                    p2.decreaseFuel();
                    console.log(`${p2.name} Life ${p2.fuel}%`);
                    console.log(`${p1.name} Life ${p1.fuel}%`);
                    if (p2.fuel <= 0) {
                        console.log(chalk.bold.blueBright(`${p1.name} You Win!`));
                        process.exit();
                    }
                }

            }
            if (actions.action == "Bonus Life") {
                p1.increaseFuel();
                p2.increaseFuel();
            }
            if (actions.action == "Quit Game") {
                console.clear();
                console.log(chalk.bold.redBright(`You loss Game..! Try Again.`));
                process.exit();
            }
        }
    } while (true);
}

await mainMenu();