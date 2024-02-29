
export const addItem = (item) => ({
    type: "ajouter",
    payload: item
  });
  
  export const modifyItem = (item) => ({
    type: "update",
    payload: item
  });
  
  export const deleteItem = (itemId) => ({
    type: "delete",
    payload: itemId
  });