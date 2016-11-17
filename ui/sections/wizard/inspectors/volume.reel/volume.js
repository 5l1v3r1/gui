/**
 * @module ui/volume.reel
 */
var Component = require("montage/ui/component").Component,
    StorageSectionService = require("core/service/section/storage-section-service").StorageSectionService;

/**
 * @class Volume
 * @extends Component
 */
exports.Volume = Component.specialize(/** @lends Volume# */ {

    templateDidLoad: {
        value: function () {
            this.volumeCreator.__sectionService = this.context.sectionService;
        }
    },

    enterDocument:{
        value: function (isFirstTime) {
            if (isFirstTime) {
                this.defineBinding("volumeCreator.context", {
                    "<-": "context"
                });

                this.defineBinding("volumeCreator.object", {
                    "<-": "object"
                });
            }
        }
    }

});
