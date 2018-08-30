import React from 'react';


const ExampleRadio = () =>{
  return(
    <fieldset>
      <label>
        <input type="checkbox" class="Colors" value="Red" />
        Click me
      </label>
      <label>
        <input type="checkbox" class="Colors" value="Blue"/>
        Click me
      </label>
      <label>
        <input type="checkbox" class="Colors" value="Green"/>
        Click me
      </label>
  </fieldset>
  );
}

export default ExampleRadio;
