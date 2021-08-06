/*
Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD.
*/


class media {
  constructor(title, isCheckedOut = false, ratings = []){
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = [];
    if(typeof(ratings)==='string')
      this._ratings.push(ratings);
    else if (typeof(ratings)==='object')
      this._ratings = this._ratings.concat(ratings);
    else 
      this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  set isCheckedOut(value){
    if(value) this._isCheckedOut = true;
    else false;
  }
  get ratings(){
    return this._ratings;
  }
  getAverageRating(){
    return this._ratings;
  }
  toggleCheckOutStatus(){
    if(this._isCheckedOut===true)
      this._isCheckedOut = false;
    else this._isCheckedOut=true;
  }
  addRating(newRatings){
    if(typeof(newRatings === 'object')){
      this._ratings = this._ratings.concat(newRatings);
    }
    else if( typeof(newRatings)==='string'){
    this._ratings.push(newRatings);
    }
    else console.log('Please add a valid rating(s). ');
  }
}

/*
const myMedia = new media ('HelloWorld');
console.log(myMedia);
myMedia.toggleCheckOutStatus();
myMedia.addRating('Very Good');
myMedia.addRating(['Boring', 'One time watch'] );
console.log(myMedia);
*/
class book extends media {
  constructor(title, isCheckedOut = false, ratings = [], author, pages){
    super(title, isCheckedOut = false, ratings);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
};
/*
const firstBook = new book ('Book1',false,['Very Good'], 'Kunal', 251);
console.log(firstBook);
*/
class movie extends media {
  constructor(title, isCheckedOut = false, ratings = [], director, runTime){
    super(title, isCheckedOut = false, ratings);
    this._director = director;
    this._runTime = runTime;
  }
};

class CD extends media {
  constructor(title, isCheckedOut = false, ratings = [], artist,songs){
    super(title, isCheckedOut = false, ratings);
    this._artist = artist;
    this._songs = [];
    if(typeof(songs)==='string'){
      this._songs.push(songs);
    }else if(typeof(songs)==='object'){
      this._songs = this._songs.concat(songs);
    }
  }//End of constructor method
}//End of CD Class


const historyOfEverything = new book ('A Short History Of Nearly Everything', false, [], 'Bill Bryson', 544);

console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(['Very Good Book', 'Interesting', 'One Time Read']);

console.log(historyOfEverything);


const speed = new movie ('Speed', false, [], 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(['Very Good Book', 'Interesting', 'One Time Read']);

/*
If you would like to continue working on this project, we have listed some avenues to build on your existing progress.

    Add more properties to each class (movieCast, songTitles, etc.)
    Create a CD class that extends Media.
    In .addRating(), make sure input is between 1 and 5.
    Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
    Create class called Catalog that holds all of the Media items in our library.

*/
