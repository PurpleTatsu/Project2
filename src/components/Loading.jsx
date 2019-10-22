// import React from 'react';


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