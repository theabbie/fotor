var axios = require("axios");
var fd = require("form-data");
var fs = require("fs");
module.exports = class Fotor {
  constructor() {}

  async upload(path) {
    var data = new fd();
    data.append("imgFile",fs.createReadStream(path));
    var pic = await axios({
      url: 'https://cnn.fotor.com/effect/uploadpic',
      method: 'POST',
      data: data,
      headers: data.getHeaders()
    });
    this.pic = pic.data.data.picid;
    return pic.data;
  }
}
