/**
 * @module ui/scrub-args.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ReplicationArgs
 * @extends Component
 */
exports.ReplicationArgs = Component.specialize(/** @lends ReplicationArgs# */ {
    compress: {
        value: null
    },

    encrypt: {
        value: null
    },

    throttle: {
        value: null
    },

    templateDidLoad: {
        value: function() {
            var self = this;
            this.application.peeringService.list().then(function(peers) {
                self.peers = peers;
            });
            this._dataService = this.application.dataService;
        }
    },

    enterDocument: {
        value: function() {
            var self = this;
            var argsInitializationPromise;
            if (!this.args || this.args.length != 4) {
                argsInitializationPromise = this._dataService.getNewInstanceForType(Model.ReplicationOptions).then(function(replicationOptions) {
                    replicationOptions.peer = self.peers[0].id;
                    self.args = [null, replicationOptions, [], false];
                });
            } else {
                argsInitializationPromise = Promise.resolve();
            }
            argsInitializationPromise.then(function() {
                if (self.datasetTreeController) {
                    self.datasetTreeController.open(self.args[0]);
                }
                self._extractTransportOptions();
                self.addPathChangeListener("compress", self, "_buildTransportOptions");
                self.addPathChangeListener("encrypt", self, "_buildTransportOptions");
                self.addPathChangeListener("throttle", self, "_buildTransportOptions");
            });
        }
    },

    _extractTransportOptions: {
        value: function() {
            var transportOptions = this.args[2],
                option,
                length = transportOptions ? transportOptions.length || Object.keys(transportOptions).length : 0;
            for (var i = 0; i < length; i++) {
                option = transportOptions[i];
                if (option.name === "compress") {
                    this.compress = option.level;
                } else if (option.name === "encrypt") {
                    this.encrypt = option.type;
                } else if (option.name === "throttle") {
                    this.throttle = option.buffer_size;
                }
            }
        }
    },

    _buildTransportOptions: {
        value: function() {
            var transportOptions = [];
            if (this.encrypt) {
                transportOptions.push({
                    name: 'encrypt',
                    type: this.encrypt
                });
            }
            if (this.compress) {
                transportOptions.push({
                    name: 'compress',
                    level: this.compress
                });
            }
            if (this.throttle) {
                transportOptions.push({
                    name: 'throttle',
                    buffer_size: this.throttle
                });
            }
            this.args[2] = transportOptions;
        }
    }
});
