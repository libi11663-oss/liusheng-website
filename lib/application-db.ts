import {env} from 'cloudflare:workers';
export function applicationDb(){if(!env.DB)throw new Error('DB binding unavailable');return env.DB;}
