import React, { Component } from 'react'
import Myplan from './Myplan';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


 class App extends Component {
  state={
    items:[],
    text:" "
  }
  handleChange =(e)=>{
    this.setState({text: e.target.value})
  }
  handleAdd=(e)=>
  {
    if(this.state.text !== ""){
      const items=[...this.state.items,this.state.text]
      this.setState({items: items, text:" "})
    }
  }
  handleDeleted = id =>{
    console.log("Deleted",id)
    const OldItems=[...this.state.items];
    console.log("oldItems",OldItems);
    const items =OldItems.filter((Element,i)=>{
      return i !== id
    })
    console.log("newItems")
    this.setState({items:items})

  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
      <h1 className='text-center'>Today's Plan</h1>
      <div className="row">
        <div className="col-9">
          <input type="text" className='form-control' 
          placeholder='Write your plan Here' value={this.state.text} onChange={this.handleChange}/>
        </div>
        <div className="col-2">
          <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>Add</button>
        </div> 
        <div className="container-fluid">
          <ul className='list-unstyled row m-5'>
            {
              this.state.items.map((value,i)=>{
                return<Myplan key={i} id={i} value={value} sendData={this.handleDeleted}/>

              })
            }
         
            

            </ul>
        </div>
      </div>
      </div>
        </div> 
      </div>
    )
  }
}
export default App;

