/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { PrismaClient } from "@prisma/client";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
});


const prisma = new PrismaClient()


const readlinesync=require("readline-sync");

let QuantdadeDeAlunos=readlinesync.question("quantos alunos são?\n");

for(let index = 1; index <=QuantdadeDeAlunos;index++){

	let nome=readlinesync.question(`nome do ${index} aluno?\n`);

	let idade=readlinesync.question(`idade do ${index} aluno?\n`);

	let nota=readlinesync.question(`nota do ${index} aluno?\n`);

	async function main(): Promise<void>{

		const Aluno = await prisma.aluno.create({
			data: {
			nome,
			idade,
			nota,
			}
		  })
	}
}