export default class Forbidden {
  private _write: string;
  private _debugTime: number;
  constructor() {
    this._debugTime = 3e3;
    this._write = '<h1>该网站禁止使用控制台! 请关掉控制台重新刷新!</h1>';
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
    document.body.innerHTML = this._write;
  }

  debug() {
    var e = new Function('debugger');
    setInterval(e, this._debugTime);
  }
}
