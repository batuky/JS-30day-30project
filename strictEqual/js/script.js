function strictEquals(a, b){
  //Same value?
  if(Object.is(a,b)){
    // Special case #1. Is this NaN ?
    if(Object.is(a,NaN)){
      // already know a and b are the same, so it's enough to check a.
      return false;
    }else{
      // They are equal!
      return true;
    }
  }else{
    // Different value.
    // Are these 0 and -0?
    // Special case #2.
    if(
      (Object.is(a, 0) && Object.is(b, -0)) ||
      (Object.is(a, -0) && Object.is(b, 0))
    ){
      return true;
    }else{
      return false;
    }
  }
}

