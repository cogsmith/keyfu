console.log('0');

let macro = new KeyfuMacro('NAME');
macro.Name = 'NAME';
macro.Keys = [KC_CONTROL, KC_ENTER];
macro.Bind = function () {
    LOG.DEBUG('MACROFX');
};

console.log('Z');