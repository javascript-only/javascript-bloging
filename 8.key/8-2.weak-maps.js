const privates = new WeakMap();

function WeakPublic() {
    const prdata = {
          // Private data goes here
    };
    privates.set(this, me);
}

WeakPublic.prototype.method = function() {
    const prdata = privates.get(this);
    // Do stuff with private data in 'me'

    
}