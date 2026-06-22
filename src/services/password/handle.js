import { randomInt } from "node:crypto";
import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
	const characters = await permittedCharacters();

	if (characters.length === 0) {
		throw new Error(
			"Nenhum conjunto de caracteres habilitado. Verifique as variáveis no .env.",
		);
	}

	const passwordLength =
		Number(process.env.PASSWORD_LENGTH) || 10;

	let password = "";
	for (let i = 0; i < passwordLength; i++) {
		const index = randomInt(0, characters.length);
		password += characters[index];
	}

	return password;
}

export default handle;
