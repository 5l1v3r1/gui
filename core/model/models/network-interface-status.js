var Montage = require("montage/core/core").Montage;
var NetworkInterfaceCapabilities = require("core/model/models/network-interface-capabilities").NetworkInterfaceCapabilities;

exports.NetworkInterfaceStatus = Montage.specialize({
    _aliases: {
        value: null
    },
    aliases: {
        set: function (value) {
            if (this._aliases !== value) {
                this._aliases = value;
            }
        },
        get: function () {
            return this._aliases;
        }
    },
    _capabilities: {
        value: null
    },
    capabilities: {
        set: function (value) {
            if (this._capabilities !== value) {
                this._capabilities = value;
            }
        },
        get: function () {
            return this._capabilities || (this._capabilities = new NetworkInterfaceCapabilities());
        }
    },
    _cloned: {
        value: null
    },
    cloned: {
        set: function (value) {
            if (this._cloned !== value) {
                this._cloned = value;
            }
        },
        get: function () {
            return this._cloned;
        }
    },
    _dhcp: {
        value: null
    },
    dhcp: {
        set: function (value) {
            if (this._dhcp !== value) {
                this._dhcp = value;
            }
        },
        get: function () {
            return this._dhcp;
        }
    },
    _flags: {
        value: null
    },
    flags: {
        set: function (value) {
            if (this._flags !== value) {
                this._flags = value;
            }
        },
        get: function () {
            return this._flags;
        }
    },
    _link_address: {
        value: null
    },
    link_address: {
        set: function (value) {
            if (this._link_address !== value) {
                this._link_address = value;
            }
        },
        get: function () {
            return this._link_address;
        }
    },
    _link_state: {
        value: null
    },
    link_state: {
        set: function (value) {
            if (this._link_state !== value) {
                this._link_state = value;
            }
        },
        get: function () {
            return this._link_state;
        }
    },
    _media_options: {
        value: null
    },
    media_options: {
        set: function (value) {
            if (this._media_options !== value) {
                this._media_options = value;
            }
        },
        get: function () {
            return this._media_options;
        }
    },
    _media_subtype: {
        value: null
    },
    media_subtype: {
        set: function (value) {
            if (this._media_subtype !== value) {
                this._media_subtype = value;
            }
        },
        get: function () {
            return this._media_subtype;
        }
    },
    _media_type: {
        value: null
    },
    media_type: {
        set: function (value) {
            if (this._media_type !== value) {
                this._media_type = value;
            }
        },
        get: function () {
            return this._media_type;
        }
    },
    _members: {
        value: null
    },
    members: {
        set: function (value) {
            if (this._members !== value) {
                this._members = value;
            }
        },
        get: function () {
            return this._members;
        }
    },
    _mtu: {
        value: null
    },
    mtu: {
        set: function (value) {
            if (this._mtu !== value) {
                this._mtu = value;
            }
        },
        get: function () {
            return this._mtu;
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
    _nd6_flags: {
        value: null
    },
    nd6_flags: {
        set: function (value) {
            if (this._nd6_flags !== value) {
                this._nd6_flags = value;
            }
        },
        get: function () {
            return this._nd6_flags;
        }
    },
    _parent: {
        value: null
    },
    parent: {
        set: function (value) {
            if (this._parent !== value) {
                this._parent = value;
            }
        },
        get: function () {
            return this._parent;
        }
    },
    _ports: {
        value: null
    },
    ports: {
        set: function (value) {
            if (this._ports !== value) {
                this._ports = value;
            }
        },
        get: function () {
            return this._ports;
        }
    },
    _tag: {
        value: null
    },
    tag: {
        set: function (value) {
            if (this._tag !== value) {
                this._tag = value;
            }
        },
        get: function () {
            return this._tag;
        }
    }
});
