import { Module } from '@nestjs/common';

import {GenerateAppCommand} from "./generate-app.command";

@Module({
    providers: [GenerateAppCommand],
})
export default class AppModule {}
