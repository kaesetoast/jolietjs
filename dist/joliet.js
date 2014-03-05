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

        var playerElement,
            joliet = this;

        function init() {
            playerElement = fetchAudioElement(_playerIdentifier);
        }

        joliet.play = function() {
            playerElement.play();
        };

        joliet.pause = function() {
            playerElement.pause();
        };

        joliet.stop = function() {
            joliet.pause();
            playerElement.currentTime = 0;
        };

        joliet.setVolume = function(_volumeLevel) {
            playerElement.volume = _volumeLevel;
        };

        /**
         * This function fetches the audio element by id-string or through
         * the correspponding DOM Node
         *
         * @param  {[type]} _playerIdentifier [description]
         * @return {[type]}                    [description]
         */
        function fetchAudioElement(_playerIdentifier) {
            if (typeof _playerIdentifier === 'string') {
                return document.getElementById(_playerIdentifier);
            } else if (typeof _playerIdentifier === 'object') {
                return _playerIdentifier;
            } else {
                throw 'Could not find the audio element. Please provide either an id-string, or the object itself';
            }
        }
        init(this);
    }
    return joliet;
}));
