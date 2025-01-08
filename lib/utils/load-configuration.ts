import { Configuration } from "../configuration/configuration"
import { ConfigurationLoader } from '../configuration/configuration.loader';
import { NestConfigurationLoader } from '../configuration/nest-configuration.loader';
import { FileSystemReader } from '../readers/file-system.reader';

export async function loadConfiguration(): Promise<Required<Configuration>> {
    const loader: ConfigurationLoader = new NestConfigurationLoader(
        new FileSystemReader(process.cwd()),
    );
    return loader.load();
}