var Montage = require("montage/core/core").Montage;
var UnixPermissions = require("core/model/models/unix-permissions").UnixPermissions;

exports.ServiceSmb = Montage.specialize({
    _auxiliary: {
        value: null
    },
    auxiliary: {
        set: function (value) {
            if (this._auxiliary !== value) {
                this._auxiliary = value;
            }
        },
        get: function () {
            return this._auxiliary;
        }
    },
    _bind_addresses: {
        value: null
    },
    bind_addresses: {
        set: function (value) {
            if (this._bind_addresses !== value) {
                this._bind_addresses = value;
            }
        },
        get: function () {
            return this._bind_addresses;
        }
    },
    _description: {
        value: null
    },
    description: {
        set: function (value) {
            if (this._description !== value) {
                this._description = value;
            }
        },
        get: function () {
            return this._description;
        }
    },
    _dirmask: {
        value: null
    },
    dirmask: {
        set: function (value) {
            if (this._dirmask !== value) {
                this._dirmask = value;
            }
        },
        get: function () {
            return this._dirmask || (this._dirmask = new UnixPermissions());
        }
    },
    _domain_logons: {
        value: null
    },
    domain_logons: {
        set: function (value) {
            if (this._domain_logons !== value) {
                this._domain_logons = value;
            }
        },
        get: function () {
            return this._domain_logons;
        }
    },
    _dos_charset: {
        value: null
    },
    dos_charset: {
        set: function (value) {
            if (this._dos_charset !== value) {
                this._dos_charset = value;
            }
        },
        get: function () {
            return this._dos_charset;
        }
    },
    _empty_password: {
        value: null
    },
    empty_password: {
        set: function (value) {
            if (this._empty_password !== value) {
                this._empty_password = value;
            }
        },
        get: function () {
            return this._empty_password;
        }
    },
    _enable: {
        value: null
    },
    enable: {
        set: function (value) {
            if (this._enable !== value) {
                this._enable = value;
            }
        },
        get: function () {
            return this._enable;
        }
    },
    _execute_always: {
        value: null
    },
    execute_always: {
        set: function (value) {
            if (this._execute_always !== value) {
                this._execute_always = value;
            }
        },
        get: function () {
            return this._execute_always;
        }
    },
    _filemask: {
        value: null
    },
    filemask: {
        set: function (value) {
            if (this._filemask !== value) {
                this._filemask = value;
            }
        },
        get: function () {
            return this._filemask || (this._filemask = new UnixPermissions());
        }
    },
    _guest_user: {
        value: null
    },
    guest_user: {
        set: function (value) {
            if (this._guest_user !== value) {
                this._guest_user = value;
            }
        },
        get: function () {
            return this._guest_user;
        }
    },
    _hostlookup: {
        value: null
    },
    hostlookup: {
        set: function (value) {
            if (this._hostlookup !== value) {
                this._hostlookup = value;
            }
        },
        get: function () {
            return this._hostlookup;
        }
    },
    _local_master: {
        value: null
    },
    local_master: {
        set: function (value) {
            if (this._local_master !== value) {
                this._local_master = value;
            }
        },
        get: function () {
            return this._local_master;
        }
    },
    _log_level: {
        value: null
    },
    log_level: {
        set: function (value) {
            if (this._log_level !== value) {
                this._log_level = value;
            }
        },
        get: function () {
            return this._log_level;
        }
    },
    _max_protocol: {
        value: null
    },
    max_protocol: {
        set: function (value) {
            if (this._max_protocol !== value) {
                this._max_protocol = value;
            }
        },
        get: function () {
            return this._max_protocol;
        }
    },
    _min_protocol: {
        value: null
    },
    min_protocol: {
        set: function (value) {
            if (this._min_protocol !== value) {
                this._min_protocol = value;
            }
        },
        get: function () {
            return this._min_protocol;
        }
    },
    _netbiosname: {
        value: null
    },
    netbiosname: {
        set: function (value) {
            if (this._netbiosname !== value) {
                this._netbiosname = value;
            }
        },
        get: function () {
            return this._netbiosname;
        }
    },
    _obey_pam_restrictions: {
        value: null
    },
    obey_pam_restrictions: {
        set: function (value) {
            if (this._obey_pam_restrictions !== value) {
                this._obey_pam_restrictions = value;
            }
        },
        get: function () {
            return this._obey_pam_restrictions;
        }
    },
    _sid: {
        value: null
    },
    sid: {
        set: function (value) {
            if (this._sid !== value) {
                this._sid = value;
            }
        },
        get: function () {
            return this._sid;
        }
    },
    _syslog: {
        value: null
    },
    syslog: {
        set: function (value) {
            if (this._syslog !== value) {
                this._syslog = value;
            }
        },
        get: function () {
            return this._syslog;
        }
    },
    _time_server: {
        value: null
    },
    time_server: {
        set: function (value) {
            if (this._time_server !== value) {
                this._time_server = value;
            }
        },
        get: function () {
            return this._time_server;
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
    },
    _unix_charset: {
        value: null
    },
    unix_charset: {
        set: function (value) {
            if (this._unix_charset !== value) {
                this._unix_charset = value;
            }
        },
        get: function () {
            return this._unix_charset;
        }
    },
    _unixext: {
        value: null
    },
    unixext: {
        set: function (value) {
            if (this._unixext !== value) {
                this._unixext = value;
            }
        },
        get: function () {
            return this._unixext;
        }
    },
    _workgroup: {
        value: null
    },
    workgroup: {
        set: function (value) {
            if (this._workgroup !== value) {
                this._workgroup = value;
            }
        },
        get: function () {
            return this._workgroup;
        }
    },
    _zeroconf: {
        value: null
    },
    zeroconf: {
        set: function (value) {
            if (this._zeroconf !== value) {
                this._zeroconf = value;
            }
        },
        get: function () {
            return this._zeroconf;
        }
    }
});
