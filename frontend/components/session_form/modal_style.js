const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.75)',
    // backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '50px',
    bottom          : '100px',
    margin          : 'auto',
    width           : '300px',
    height          : '500px',
    // border          : '1px solid #ccc',
    border          : '1px solid #000',
    padding         : '30px 50px',
    zIndex          : 11,

    backgroundColor : '#000000',

    // opacity         : '',
    // transition      : 'opacity 2s'
  }
};

export default style;
