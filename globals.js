'use strict'
module.exports= class globals { 
  constructor() { 
    this.port = process.env.PORT | 5000;
  }
}
