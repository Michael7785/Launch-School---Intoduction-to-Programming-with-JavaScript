let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let combinedcode = passcode.reduce((accum, el) => accum + "-" + el);
return combinedcode;
