import { resolve } from "node:path";
import chalk from "chalk";
import qr from "qrcode-terminal";
import QRCode from "qrcode";

function pngFileName() {
	const ts = new Date()
		.toISOString()
		.replace(/[:T]/g, "-")
		.replace(/\..+$/, "");
	return `qrcode-${ts}.png`;
}

async function toTerminal(link, isSmall) {
	if (!link) throw new Error("link inválido");
	return new Promise((res) => {
		qr.generate(link, { small: isSmall }, (qrcode) => {
			console.log(chalk.green("QR Code gerado no terminal:\n"));
			console.log(qrcode);
			res();
		});
	});
}

async function toPNG(link) {
	const filePath = resolve(pngFileName());
	await QRCode.toFile(filePath, link, { width: 480, margin: 2 });
	console.log(chalk.green(`QR Code salvo como PNG: ${filePath}`));
}

async function handle(err, result) {
	if (err) {
		console.log(chalk.red("Operação cancelada ou erro:"), err);
		return;
	}

	const { link } = result;
	const type = parseInt(result.type, 10);

	try {
		if (type === 1) {
			await toTerminal(link, false);
		} else if (type === 2) {
			await toTerminal(link, true);
		} else if (type === 3) {
			await toPNG(link);
		} else {
			await toPNG(link);
			await toTerminal(link, false);
		}
	} catch (genErr) {
		console.log(chalk.red("Falha ao gerar QR Code:"), genErr.message);
	}
}

export default handle;
