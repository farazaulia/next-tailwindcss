const { Preset } = require("use-preset");
const fs = require("fs-extra");

// prettier-ignore
module.exports = Preset.make('Tailwind CSS')
	.prompts()
		.if(({ targetDirectory }) => fs.readdirSync(targetDirectory).length === 0)
		.confirm('Directory is empty. Do you want to scaffold the Next app?', 'scaffoldNext')
		.title('Ask to scaffold the application if required')
		.chain()
	.command()
		.run('npx', ['create-next-app'])
		.if(({ prompts }) => Boolean(prompts.scaffoldNext))
		.title('Scaffold a Next application')
		.chain()
	.copyTemplates()
	.editJson('package.json')
		.title('Add Tailwind CSS as a dependency')
		.merge({
			devDependencies: {
				'tailwindcss': '^1',
				"autoprefixer": "^9.8.6",
			}
		})
		.chain()
	.installDependencies();
