var Montage = require("montage/core/core").Montage;

exports.Error = Montage.specialize({
    _code: {
        value: null
    },
    code: {
        set: function (value) {
            if (this._code !== value) {
                this._code = value;
            }
        },
        get: function () {
            return this._code;
        }
    },
    _extra: {
        value: null
    },
    extra: {
        set: function (value) {
            if (this._extra !== value) {
                this._extra = value;
            }
        },
        get: function () {
            return this._extra;
        }
    },
    _message: {
        value: null
    },
    message: {
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
            }
        },
        get: function () {
            return this._message;
        }
    },
    _stacktrace: {
        value: null
    },
    stacktrace: {
        set: function (value) {
            if (this._stacktrace !== value) {
                this._stacktrace = value;
            }
        },
        get: function () {
            return this._stacktrace;
        }
    },
    _type: {
        value: null
    },
    type: {
        set: function (value) {
            if (this._type !== value) {
                this._type = value;
            }
        },
        get: function () {
            return this._type;
        }
    }
});
