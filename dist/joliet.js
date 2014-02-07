(function(root, factory) {
    if (typeof define === 'function' && define.amd) define(factory);
    else if (typeof exports === 'object') module.exports = factory();
    else root.joliet = factory();
}(this, function() {
    'use strict';

    /**
     * Constructor function
     *
     * @param  {mixed}  _playerIdentifier the DOM Node that contains the audio element or its id-string
     * @param  {object} _options           the configuration object
     */
    function joliet(_playerIdentifier, _options) {


        init(this);
    }
    return joliet;
}));
