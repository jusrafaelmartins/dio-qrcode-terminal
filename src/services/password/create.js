import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
	try {
		const password = await handle();
		console.log(chalk.green("Senha gerada:\n"));
		console.log(chalk.bold.italic(password));
	} catch (err) {
		console.log(chalk.red("Não foi possível gerar a senha:"), err.message);
	}
}

export default createPassword;
