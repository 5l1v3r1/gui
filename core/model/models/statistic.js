var Montage = require("montage/core/core").Montage;
var StatisticAlert = require("core/model/models/statistic-alert").StatisticAlert;

exports.Statistic = Montage.specialize({
    _alerts: {
        value: null
    },
    alerts: {
        set: function (value) {
            if (this._alerts !== value) {
                this._alerts = value;
            }
        },
        get: function () {
            return this._alerts || (this._alerts = new StatisticAlert());
        }
    },
    _last_value: {
        value: null
    },
    last_value: {
        set: function (value) {
            if (this._last_value !== value) {
                this._last_value = value;
            }
        },
        get: function () {
            return this._last_value;
        }
    },
    _name: {
        value: null
    },
    name: {
        set: function (value) {
            if (this._name !== value) {
                this._name = value;
            }
        },
        get: function () {
            return this._name;
        }
    },
    _short_name: {
        value: null
    },
    short_name: {
        set: function (value) {
            if (this._short_name !== value) {
                this._short_name = value;
            }
        },
        get: function () {
            return this._short_name;
        }
    },
    _unit: {
        value: null
    },
    unit: {
        set: function (value) {
            if (this._unit !== value) {
                this._unit = value;
            }
        },
        get: function () {
            return this._unit;
        }
    }
});
