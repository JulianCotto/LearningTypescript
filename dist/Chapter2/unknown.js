"use strict";
// we don't know in detail what the value looks like
// any type is not a good solution
// use this instead of Union with all possible values
function process(val) {
    // cannot safely call log without performing checks first
    // val.log();
    // now it works
    if (typeof val === 'object' && !!val && 'log' in val && typeof val.log === 'function') {
        val.log();
    }
}
