var AbstractModel = require("core/model/abstract-model").AbstractModel;

exports.SystemGeneral = AbstractModel.specialize({
    _console_keymap: {
        value: null
    },
    console_keymap: {
        set: function (value) {
            if (this._console_keymap !== value) {
                this._console_keymap = value;
            }
        },
        get: function () {
            return this._console_keymap;
        }
    },
    _hostname: {
        value: null
    },
    hostname: {
        set: function (value) {
            if (this._hostname !== value) {
                this._hostname = value;
            }
        },
        get: function () {
            return this._hostname;
        }
    },
    _language: {
        value: null
    },
    language: {
        set: function (value) {
            if (this._language !== value) {
                this._language = value;
            }
        },
        get: function () {
            return this._language;
        }
    },
    _syslog_server: {
        value: null
    },
    syslog_server: {
        set: function (value) {
            if (this._syslog_server !== value) {
                this._syslog_server = value;
            }
        },
        get: function () {
            return this._syslog_server;
        }
    },
    _timezone: {
        value: null
    },
    timezone: {
        set: function (value) {
            if (this._timezone !== value) {
                this._timezone = value;
            }
        },
        get: function () {
            return this._timezone;
        }
    }
}, {
    propertyBlueprints: {
        value: [{
            mandatory: false,
            name: "console_keymap",
            valueType: "String"
        }, {
            mandatory: false,
            name: "hostname",
            valueType: "String"
        }, {
            mandatory: false,
            name: "language",
            valueType: "String"
        }, {
            mandatory: false,
            name: "syslog_server",
            valueType: "String"
        }, {
            mandatory: false,
            name: "timezone",
            valueType: "String"
        }]
    }
});
