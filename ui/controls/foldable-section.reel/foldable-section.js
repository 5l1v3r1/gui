/**
 * @module ui/controls/foldable-section.reel
 */
var Component = require("montage/ui/component").Component,
    AbstractComponentActionDelegate = require("core/ui/abstract-component-action-delegate").AbstractComponentActionDelegate,
    KeyComposer = require("montage/composer/key-composer").KeyComposer;

/**
 * @class FoldableSection
 * @extends Component
 */
exports.FoldableSection = Component.specialize(/** @lends FoldableSection# */ {

    _isExpanded: {
        value: null
    },

    isExpanded: {
        get: function () {
            return this._isExpanded;
        },
        set: function (value) {
            value = !!value;

            if (this._isExpanded !== value) {
                this._isExpanded = value;
                this.needsDraw = true;
            }
        }
    },

    _toggleSection: {
        value: function(event) {
            this.isExpanded = !this.isExpanded;
            event.stopPropagation();
        }
    },

    enterDocument: {
        value: function (isFirstTime) {
            AbstractComponentActionDelegate.prototype.enterDocument.call(this, isFirstTime);

            if (isFirstTime) {
                this._mutationObserver = new MutationObserver(this.handleMutations.bind(this));
                this.element.addEventListener("transitionend", this, false);
            }

            this._mutationObserver.observe(this.element, {
                subtree: true,
                childList: true,
                attributes: true
            });
        }
    },

    handleTransitionend: {
        value: function (event) {
            if (event.target == this.sectionContent) {
                if (!this.isExpanded) {
                    this.sectionContent.style.display = "none";
                }
            }
        }
    },

    prepareForActivationEvents: {
        value: function() {
                KeyComposer.createKey(this, "enter", "enter").addEventListener("keyPress", this);
        }
    },

    handleEnterKeyPress: {
        value: function(event) {
            if(document.activeElement == this.element) {
                this._toggleSection(event);
            }
        }
    },

    exitDocument: {
        value: function () {
            AbstractComponentActionDelegate.prototype.exitDocument.call(this);
            this._mutationObserver.disconnect();
        }
    },

    handleMutations: {
        value: function (event) {
            if (event.type === "attributes" && event.attributeName !== "style") {
                return void 0;
            }

            this.needsDraw = true;
        }
    },

    handleExpandButtonAction: {
        value: function(event) {
            this.sectionContent.style.display = "block";
            this._toggleSection(event);
        }
    },

    willDraw: {
        value: function () {
            this._contentContainerHeight = this.contentContainer.offsetHeight;
        }
    },

    draw: {
        value: function () {
            this.sectionContent.style.height = this.isExpanded ? this._contentContainerHeight + "px" : 0;
        }
    }

});
