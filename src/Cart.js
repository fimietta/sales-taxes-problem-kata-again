module.exports = class Cart{
  constructor(){
    this._products= []
  }

  get products(){
    return this._products
  }

}