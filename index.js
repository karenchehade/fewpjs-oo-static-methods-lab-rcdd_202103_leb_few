class Formatter {
<<<<<<< HEAD
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(sant){
    return sant.replace(/[^a-z0-9+ /'-]+/gi, '')
  }
  static titleize(){

  }
=======
static capitalize(str){
str[0].toUpperCase();
}
static sanitize(in){
in.replace(/[^\w\s]/gi, '')
}
static titleize(){

}
>>>>>>> f058c1aad46547d9ab71d143a78bbe2539f9bf58
}
