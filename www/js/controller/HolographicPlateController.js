goog.provide('app.HolographicPlateController');

goog.require('app.ComponentController');

/**
 * @constructor
 * @extends {app.ComponentController}
 */
app.HolographicPlateController = function() {
    app.HolographicPlateController.base(this, 'constructor');

    this._selectedComponentType = 'HOLO-PLATE';
};

goog.inherits(app.HolographicPlateController, app.ComponentController);

app.HolographicPlateController.prototype.showComponentControlPanel = function(sceneController) {
    app.HolographicPlateController.base(this, 'showComponentControlPanel', sceneController);

    this._componentConfigurationPanel.innerHTML += '<label id="com-position">' + app.translation["com-position"] + '</label>' +
        '<div class="input-field">X: <input type="text" name="com-height" class="input-min" id="com-height" value="' + this._model.getPosX() + '"> cm</div>' +
        '<div class="input-field">Y: <input type="text" name="com-height" class="input-min" id="com-height"  value="' + this._model.getPosY() + '"> cm</div>' +
        '<div id="component-buttons"><button id="com-record-btn">Record</button></div>';

    this._addPanelListeners(sceneController);
};

app.HolographicPlateController.prototype._addPanelListeners = function(sceneController) {
    app.HolographicPlateController.base(this, '_addPanelListeners', sceneController);

    goog.events.listen(goog.dom.getElement('com-record-btn'), goog.events.EventType.CLICK, function (e) {
        // TODO first pick refrence light
        this._model.makeRecord(1); // light id
        sceneController.redrawAll();
        this._model.showRecord();
        sceneController.redrawAll();
    }, true, this);
};