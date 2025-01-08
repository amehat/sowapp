import * as chalk from 'chalk';
import { EMOJIS } from './emojis';

export const MESSAGES = {
    CHANGE_DIR_COMMAND: (name: string) => `$ cd ${name}`,
    DRY_RUN_MODE: 'Command has been executed in dry run mode, nothing changed!',
    GET_STARTED_INFORMATION: `${EMOJIS.POINT_RIGHT}  Get started with the following commands:`,
    GIT_INITIALIZATION_ERROR: 'Git repository has not been initialized',
    LIBRARY_INSTALLATION_FAILED_BAD_PACKAGE: (name: string) =>
        `Unable to install library ${name} because package did not install. Please check package name.`,
    LIBRARY_PROJECT_SELECTION_QUESTION:
        'Which project would you like to add the library to?',
    LIBRARY_INSTALLATION_STARTS: 'Starting library setup...',
    NEST_INFORMATION_PACKAGE_MANAGER_FAILED: `${EMOJIS.SMIRK}  cannot read your project package.json file, are you inside your project directory?`,
    NEST_INFORMATION_PACKAGE_WARNING_FAILED: (nestDependencies: string[]) =>
        `${
            EMOJIS.SMIRK
        }  failed to compare dependencies versions, please check that following packages are in the same minor version : \n ${nestDependencies.join(
            '\n',
        )}`,
    PROJECT_INFORMATION_START: `${EMOJIS.ZAP}  We will scaffold your app in a few seconds..`,
    PROJECT_SELECTION_QUESTION: 'Which project would you like to generate to?',
    PACKAGE_MANAGER_INSTALLATION_FAILED: (commandToRunManually: string) =>
        `${EMOJIS.SCREAM}  Packages installation failed!\nIn case you don't see any errors above, consider manually running the failed command ${commandToRunManually} to see more details on why it errored out.`,
    PACKAGE_MANAGER_QUESTION: `Which package manager would you ${EMOJIS.HEART}  to use?`,
    PACKAGE_MANAGER_INSTALLATION_IN_PROGRESS: `Installation in progress... ${EMOJIS.COFFEE}`,
    PACKAGE_MANAGER_UPDATE_IN_PROGRESS: `Installation in progress... ${EMOJIS.COFFEE}`,
    PACKAGE_MANAGER_UPGRADE_IN_PROGRESS: `Installation in progress... ${EMOJIS.COFFEE}`,
    PACKAGE_MANAGER_PRODUCTION_INSTALLATION_IN_PROGRESS: `Package installation in progress... ${EMOJIS.COFFEE}`,
    PACKAGE_MANAGER_INSTALLATION_SUCCEED: (name: string) =>
        name !== '.'
            ? `${EMOJIS.ROCKET}  Successfully created project ${chalk.green(name)}`
            : `${EMOJIS.ROCKET}  Successfully created a new project`,
    RUNNER_EXECUTION_ERROR: (command: string) =>
        `\nFailed to execute command: ${command}`,
    START_COMMAND: (name: string) => `$ ${name} run start`,
};
