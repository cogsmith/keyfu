const fs = require('fs');

const XT = require('@cogsmith/xt').Init();
const App = XT.App; const LOG = XT.LOG;

App.Main = function () {
    let KCLIST = 'ALT CONTROL SHIFT SPACE ENTER';
    KCLIST.split(' ').forEach(x => { global['KC_' + x] = 'KC_' + x; });

    let KeyfuMacro = XT.NOP;
    let code = fs.readFileSync('app_macro.js') + ';macro;';
    console.log(code);
    console.log({ EVAL: eval(code) });
    LOG.INFO('XTNODE');
};

App.Run();

/*

GUI
ALT
CONTROL
SHIFT

ENTER
SPACE
ESCAPE
TAB

NUMLOCK
CAPLOCK

F1-F12

TILDE-GRAVE

!@#$%^&*()_+-=
+-/*.

0 - 9
A - Z

PRINT
SCROLL
PAUSE

,./
[]\
;'

INS
DEL

HOME
END

PAGE-UP
PAGE-DOWN

//

https://beta.docs.qmk.fm/using-qmk/simple-keycodes/keycodes_basic

KC_F1 KC_F24

KC_ENTER
KC_ESCAPE
KC_BSPACE
KC_TAB
KC_SPACE

//

KC_A KC_Z
KC_0 KC_9

KC_MINUS
KC_EQUAL

KC_LBRACKET
KC_RBRACKET

KC_SLASH
KC_BSLASH

*/