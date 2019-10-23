// import React from 'react';


// https://media0.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.gif?cid=790b76114cd04b7fcee8aa670b9898e264631b3f99e18484&rid=giphy.gif

// export default SomeComponent() => {
//   componentWillMount() {
//     this.doAThing = this.doAThing.bind(this);
//     this.state = {
//       loading: false
//     };
//   };

//   doAThing() {
//     this.setState({ loading: true });
//     someService.doTheThing().then(() => {
//       this.loading = false;
//     };
//   }

//   return (
//     <button onClick={this.doAThing()}>Do A Thing</button>
//     { this.state.loading && <img src="path/to/animated/loading.gif" /> }
//   );
// };