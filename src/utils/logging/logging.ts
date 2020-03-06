export class Logger {
    private environment: NodeEnv;

    constructor() {
        this.environment = process.env.NODE_ENV as NodeEnv;
    }

    log(level: LogLevel, message: string, data?: any) {
        if (this.environment != 'production') {
            console[level](message, data || '');
        }
    }
}
export type NodeEnv = 'production' | 'development' | null;
export type LogLevel = 'info' | 'error' | 'log';