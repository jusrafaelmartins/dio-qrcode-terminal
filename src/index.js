import chalk from "chalk";
import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createPassword from "./services/password/create.js";
import createQRCode from "./services/qr-code/create.js";

async function main() {
	prompt.start();

	prompt.get(promptSchemaMain, async (err, choose) => {
		if (err) {
			console.log(chalk.red("Operação cancelada ou erro: "), err);
			return;
		}

		const choice = parseInt(choose.select, 10);

		if (Number.isNaN(choice)) {
			console.log(chalk.red("Opção inválida. Selecione 1 ou 2."));
			return;
		}

		switch (choice) {
			case 1:
				await createQRCode();
				break;
			case 2:
				await createPassword();
				break;
			default:
				console.log(chalk.red("Opção inválida. Selecione 1 ou 2."));
		}
	});
}

main();
