import chalk from "chalk";

const promptSchemaQRCode = [
	{
		name: "link",
		description: chalk.yellow("Digite o link para gerar o QR CODE"),
		message: chalk.red.italic("O link é obrigatório"),
		required: true,
	},
	{
		name: "type",
		description: chalk.yellow(
			"Escolha o tipo de QRcode (1- Terminal grande, 2- Terminal compacto, 3- PNG, 4- Ambos)",
		),
		pattern: /^[1-4]$/,
		message: chalk.red.italic("Escolha apenas entre 1 e 4"),
		required: true,
	},
];

export default promptSchemaQRCode;
