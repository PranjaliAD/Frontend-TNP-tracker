// src/redux/actions/formActions.js
export const setTitle = (title) => {
    return {
      type: 'SET_TITLE',
      payload: title,
    };
  };
  
  export const setContent = (content) => {
    return {
      type: 'SET_CONTENT',
      payload: content,
    };
  };
  