import type {Proxy} from './util/model';

export let PORT = 377; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
export let PROXIES: Proxy[] = [
  {
	domain:"mygee.vercel.app",
	url:"https://www.google.com",
        enable: true
    }
}
];
