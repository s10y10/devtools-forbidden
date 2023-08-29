import type { Options } from './types';
export default class Forbidden {
  private _message: string;
  private _debugTime: number;
  constructor(options: Options = {}) {
    this._debugTime = options.debugTime || 2e3;
    this._message =
      options.message ||
      '<h1>该网站禁止使用控制台! 请关掉控制台后刷新页面！</h1>';
    this.write = this.write.bind(this);
    this.fire(this.write);
    this.debug();
  }

  count(e: Function): Function {
    var t = 0;
    return function () {
      if (2 === ++t) {
        e();
      }
    };
  }

  fire(e: Function) {
    var r = this.count(e);
    var o = new Error();
    Object.defineProperty(o, 'message', {
      get: function () {
        r();
      },
    });
    console.log(o);
  }

  write() {
    document.body.innerHTML = this._message;
  }

  debug() {
    var e = new Function('debugger');
    e();
    setInterval(e, this._debugTime);
  }
}
