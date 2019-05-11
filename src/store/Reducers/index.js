const initialState = {
  data: [
    {
      id: 0,
      name: "Room 1",
      checkbox: "",
      active: true,
      adult: 1,      
      children: 1
    },
    {
      id: 1,
      name: "Room 2",
      checkbox: "present",
      active: false,
      adult: 2,
      children: 2
    },
    {
      id: 2,
      name: "Room 3",
      checkbox: "present",
      active: false,
      adult: 1,
      children: 0
    },
    {
      id: 3,
      name: "Room 4",
      checkbox: "present",
      active: false,
      adult: 2,
      children: 1
    }
  ]
};




const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_data":
      return {
        ...state.data
      };

    case "TOGGLESELECT":
      var newState ={"data":[]};
      newState["data"]=[...state.data];
     if(action.payload.active == true){
          newState.data.map((olddata)=>{
                if(olddata.id <= action.payload.data.id){
                  olddata.active=true;
                }
                return olddata;
          })
     }

     if(action.payload.active == false){
      newState.data.map((olddata,index)=>{
            if(olddata.id >= action.payload.data.id){
              olddata.active=false;
              console.log(initialState.data[index].adult, initialState.data[index].children)
              olddata.adult=initialState.data[index].adult;
              olddata.children=initialState.data[index].children;              
            }
            return olddata;
      })
 }

      return {
        ...newState
      };

    default: {
      return state;
    }
  }
};
export default reducer;
