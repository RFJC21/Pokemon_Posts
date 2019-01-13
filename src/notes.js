//*Pokemon App* - Lists + Router + Redux + axios + materialize css

//Router Link Muito Bom: https://reacttraining.com/react-router/web/api/Link

//Router☝
//1) add a style sheet from materialize css
//2) create 3 pages, create home page, about and contact (equal components)
//3) create the navebar
//4) install react-router (npm install --save react-router react-router-dom)
//5) and import browwser router and wrap the all app with it
//6) import Route in App.js. we have to use exact in the home route!

//☝with these anchor tags, when we press about or contact the page always reload, sending a request to the server! we dont want that!☝

//7) to chenge this, use link or navlink (adds some extra styling)!
//r//eplace the anchor tags with "Link to="""
//8) lets add an HOC(for example ro re direct the user to other url), the withRouter, in the navbar
//withRouter -> access to the history object’s properties and the closest <Route>s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
//9) create a custom hoc, Rainbow (to randomize the etxt color in the wraped component). a function that receives the "WrappedComponent", that we wraped with the "withRouter"
//9.1) wrap the export default about with it
//10) use axios (from a 3 party, an api, jsonplaceholder)- https://jsonplaceholder.typicode.com/
//we used this: https://jsonplaceholder.typicode.com/todos/1
//the best place to use axios is in the componentDidMount lifecycle hook

//Axios☝
//10.1) convert the homepage to a class component
//10.2)import axios, and put componentDidMount. this request takes some time (async), so we can use the ".then()" method. Restful api
//We want to display the posts. So we added local state, and we want to add the posts to the posts array. because we had 100 posts, we use the .slice() method, to just display the first 10
//we also destructured posts. render the list☝

//11) add route parameters: when clicking on the post, it goes to /post.id
//create the class component "Post.js"
//11.1) we can log and see the id of the post.
//1//1.2) use componentDIdMount
//11.3) ☝we want to add a link in each post, to go to the url "/post.id" show the content of it
//import Link into the home.js☝
//11.4) to display the content of the post, we need to send a request and get the content. So add axios also in Post.js
//11.5) we have a problem, because the contact url matches "/:post_id", beucase this is everything!
//so use "Switch"! Wrap all the routes with it. It runs through the tree of routes, and when it finds a match, it doesnt look for another one
//12) use an image in each post. Import image in Home.js.
//1//2.1) change the style in index.css

//Redux☝
//13) install it
//create the store*
//14) create the store inside index.js (the main one). inport createStore and Provider
//15) create reducers. because we are going to have just one, call it rootReducer
//16) pass the rootReducer to the createStore function
//mapstatetoprops*
//17) delete the state and componentDidMount in home.js. add the {connect} function to connect the component to the store
//18) connect Post.js to our store. Use "onwProps" as argument in mapStateToProps. This refers to the props of this compoennts, before we attach the additional props fro the redux store. The ownProps are going to contain the routes and the id's. use the find() method. Change "this.state" to "this.props"
//19)  mapDispatchToProps
//20) add a button to delete the post, adding a click event in the button. SO create a function, that is going to call the method
//21) now we want to delete the post when pressing the button. go to the root reducer, add an if statement, use the filter method because it creates a new array, and doesnt change the old one
//22) when deleting the post, send the user to the homepage
//23) create an action creator. this is a functions, that returns an action. it turns the code more reusable. So create the "postActions.js"
//24) call the function in the mapdispatchtoprops
