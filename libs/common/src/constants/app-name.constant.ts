import { readFileSync } from 'fs';
import { join } from 'path';

export const APP_NAME = () => {
    try {
        const appName = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf8'))['name'];
        return appName;
    } catch (error) {
        console.error(error);
        return 'AppName';
    }
};
