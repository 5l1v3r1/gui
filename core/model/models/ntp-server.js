var Montage = require("montage/core/core").Montage;

exports.NtpServer = Montage.specialize({
    _address: {
        value: null
    },
    address: {
        set: function (value) {
            if (this._address !== value) {
                this._address = value;
            }
        },
        get: function () {
            return this._address;
        }
    },
    _burst: {
        value: null
    },
    burst: {
        set: function (value) {
            if (this._burst !== value) {
                this._burst = value;
            }
        },
        get: function () {
            return this._burst;
        }
    },
    _iburst: {
        value: null
    },
    iburst: {
        set: function (value) {
            if (this._iburst !== value) {
                this._iburst = value;
            }
        },
        get: function () {
            return this._iburst;
        }
    },
    _id: {
        value: null
    },
    id: {
        set: function (value) {
            if (this._id !== value) {
                this._id = value;
            }
        },
        get: function () {
            return this._id;
        }
    },
    _maxpoll: {
        value: null
    },
    maxpoll: {
        set: function (value) {
            if (this._maxpoll !== value) {
                this._maxpoll = value;
            }
        },
        get: function () {
            return this._maxpoll;
        }
    },
    _minpoll: {
        value: null
    },
    minpoll: {
        set: function (value) {
            if (this._minpoll !== value) {
                this._minpoll = value;
            }
        },
        get: function () {
            return this._minpoll;
        }
    },
    _prefer: {
        value: null
    },
    prefer: {
        set: function (value) {
            if (this._prefer !== value) {
                this._prefer = value;
            }
        },
        get: function () {
            return this._prefer;
        }
    }
});
