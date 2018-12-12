import * as https from 'https';
import * as vpa from '../../..';
import { testRequest, ca } from './utils';

describe('Direct client', function () {
	it('should work without agent', function () {
		return testRequest(https, {
			hostname: 'test-https-server',
			path: '/test-path',
			ca,
		});
	});
	it('should support SNI when not proxied', function () {
		return testRequest(https, {
			hostname: 'test-https-server',
			path: '/test-path',
			agent: new (<any>vpa).ProxyAgent({
				resolveProxy: (url: string, cb: (res: string) => void) => cb('DIRECT')
			}),
			ca,
		});
	});
});