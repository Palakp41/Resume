import React from 'react';
import malarkey from 'malarkey';
var elem = document.querySelector('.malarkey');
    var opts = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 2000,
      loop: true,
      postfix: ''
    };
    malarkey(elem, opts).type('Say hello')   .pause().delete()
                        .type('Wave goodbye').pause().delete();