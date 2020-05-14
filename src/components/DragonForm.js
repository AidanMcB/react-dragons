import React, { Component } from 'react'

class DragonForm extends Component{

    // How can you copy these values from the inputs as the user types?
    state = {
      name: '',
      description: '',
      image: ''
    }

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
        <div style={{ padding: 20 }}>
            <h1>Create Dragon</h1>
            <div>
              <label>Name:</label>
              <input type="text" />
            </div>
            <div>
              <label>Description:</label>
              <input type="text" />
            </div>
            <div>
              <label>Image:</label>
              <input type="text" />
            </div>
            <button onClick={null} >Submit</button>
        </div>
        )
    }

}

export default DragonForm
