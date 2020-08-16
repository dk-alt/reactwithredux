const initialState = {
  age: 20,
  loading: true,
  todolist:["first"]
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      newState.age += action.value;
      newState.loading = false;
      break;

    case "AGE_DOWN":
      newState.age -= action.value;
      break;
    case "LOADING":
      newState.loading = true;
      break;
      case "ADD_List":
      newState.todolist= newState.todolist.concat(action.value.target.value);
      action.value.target.value = '';
      
    
  }
  return newState;
};

export default reducer;
