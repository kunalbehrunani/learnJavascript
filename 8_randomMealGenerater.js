/*
As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!
*/

const menu = {
  _courses : {
    _appetizers : ['Sandwich', 'Oats', 'Pan Cakes'],
    _mains : ['Rice', 'Dal', 'Chicken', 'Salad'],
    _desserts : ['IceCream', 'Donuts', 'Jello'],
    get appetizers (){
      // console.log(`Inside Getter - appetizers`);
      return this._appetizers;
    },
    set appetizers(dish){
      this._appetizers.push(dish);
    },
    get mains () {
      // console.log(`Inside Getter - mains`);
      return this._mains;
    },
    set mains (dish) {
      this._mains.push(dish);
    },
    get desserts(){
      // console.log(`Inside Getter - desserts`);
      return this._desserts;
    },
    set desserts(dish){
      this._desserts.push(dish);
    }
  },//End of _courses Object

  get courses(){
    //Get all the properties of courses object using get methods only.
    let resultObject = {};
    for(props in this._courses){
      if(props[0] !== '_')
      resultObject[props] = this._courses[props];
    }
    return resultObject;
  },//End of getter method for _courses property

  addDishToCourses (courseName, dishName) {
    //If the couseName property doesn't exist in the "courses" Object of "menu" Object.
    if(this._courses[courseName]===undefined){
      this._courses[courseName] = [];
    }
    this._courses[courseName].push(dishName);
  },//End of addDishToCoursed Method

  getRandomDishFromCourses(courseName){
    if(this._courses[courseName]===undefined){
      console.log('Course Name entered is incorrect.');
      return;
    }
    const totalDishes = this._courses[courseName].length;
    const randomDishIndex = Math.floor(Math.random()*totalDishes);
    return this._courses[courseName][randomDishIndex];
  },//End of getRandomDishFromCourse method

  getRandomMealFromAllCourses(){
    const myRandomMeal = [];
    let tempObject = {};
    for(props in this.courses){
      tempObject = {
        'Course Name' : props,
        'Dish Name' : this.getRandomDishFromCourses(props)
      }
      myRandomMeal.push(tempObject);
    }
    return myRandomMeal;
  }//End of getRandomMealFromAllCourses

};//End of Menu Object

//Testing
console.log(menu.courses);
menu.addDishToCourses('eveningSnack','Bread Butter');
menu.addDishToCourses('desserts','Gulab Jamun');
console.log(menu.courses);
menu.getRandomDishFromCourses('desserts');
console.log(menu.getRandomMealFromAllCourses());
