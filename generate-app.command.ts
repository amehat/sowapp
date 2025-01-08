import { Command, CommandRunner } from 'nest-commander';

@Command({
    name: 'sowapp',
    description: 'A parameter parse'
})
export class GenerateAppCommand extends CommandRunner {
    constructor() {
        super();
    }

    async run(
        passedParams: string[],
        options?: Record<string, any>,
    ): Promise<void> {
        console.log('CLI Params', passedParams);
        console.log('CLI Options', options);
        return Promise.resolve(undefined);
    }
}