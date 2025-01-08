import { existsSync } from 'node:fs';
import { join, posix } from 'node:path';
import { CommandLoader } from '../../commands/command.loader';

const localBinPathSegments = [process.cwd(), 'node_modules', '@nestjs', 'cli'];

export function localBinExists() {
    return existsSync(join(...localBinPathSegments));
}

export function loadLocalBinCommandLoader(): typeof CommandLoader {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const commandsFile = require(posix.join(...localBinPathSegments, 'commands'));
    return commandsFile.CommandLoader;
}