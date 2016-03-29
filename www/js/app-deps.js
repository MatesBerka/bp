// This file was autogenerated by depswriter.py.
// Please do not edit.
goog.addDependency('../../../../www/js/app.js', ['app.start', 'app.utils'], ['app.MenuController', 'app.SceneController', 'app.locales', 'goog.events', 'goog.labs.userAgent.device'], false);
goog.addDependency('../../../../www/js/controller/ComponentController.js', ['app.ComponentController'], ['goog.dom'], false);
goog.addDependency('../../../../www/js/controller/HolographicPlateController.js', ['app.HolographicPlateController'], ['app.ComponentController'], false);
goog.addDependency('../../../../www/js/controller/LensController.js', ['app.LensController'], ['app.ComponentController'], false);
goog.addDependency('../../../../www/js/controller/LightController.js', ['app.LightController'], ['app.ComponentController', 'goog.ui.Select'], false);
goog.addDependency('../../../../www/js/controller/MenuController.js', ['app.MenuController'], ['app.SceneController', 'goog.json', 'goog.labs.userAgent.device', 'goog.ui.Dialog', 'goog.ui.KeyboardShortcutHandler', 'goog.ui.Popup'], false);
goog.addDependency('../../../../www/js/controller/MirrorController.js', ['app.MirrorController'], ['app.ComponentController'], false);
goog.addDependency('../../../../www/js/controller/SceneController.js', ['app.SceneController'], ['app.ViewController', 'app.model.Table', 'app.model.View', 'goog.dom', 'goog.json'], false);
goog.addDependency('../../../../www/js/controller/SplitterController.js', ['app.SplitterController'], ['app.ComponentController'], false);
goog.addDependency('../../../../www/js/controller/ViewController.js', ['app.ViewController'], ['app.HolographicPlateController', 'app.LensController', 'app.LightController', 'app.MirrorController', 'app.SplitterController', 'app.WallController', 'app.model.HolographicPlate', 'app.model.Lens', 'app.model.Light', 'app.model.Mirror', 'app.model.Splitter', 'app.model.Wall'], false);
goog.addDependency('../../../../www/js/controller/WallController.js', ['app.WallController'], ['app.ComponentController'], false);
goog.addDependency('../../../../www/js/locales.js', ['app.locales'], [], false);
goog.addDependency('../../../../www/js/model/Table.js', ['app.model.Table'], [], false);
goog.addDependency('../../../../www/js/model/View.js', ['app.model.View'], [], false);
goog.addDependency('../../../../www/js/model/elements/Component.js', ['app.model.Component'], [], false);
goog.addDependency('../../../../www/js/model/elements/HolographicPlate.js', ['app.model.HolographicPlate'], ['app.model.LineShapeComponent'], false);
goog.addDependency('../../../../www/js/model/elements/Lens.js', ['app.model.Lens'], ['app.model.LineShapeComponent'], false);
goog.addDependency('../../../../www/js/model/elements/Light.js', ['app.model.Light'], ['app.model.Component'], false);
goog.addDependency('../../../../www/js/model/elements/LineShapeComponent.js', ['app.model.LineShapeComponent'], ['app.model.Component'], false);
goog.addDependency('../../../../www/js/model/elements/Mirror.js', ['app.model.Mirror'], ['app.model.LineShapeComponent'], false);
goog.addDependency('../../../../www/js/model/elements/RactangleShapeComponent.js', ['app.model.RectangleShapeComponent'], ['app.model.Component'], false);
goog.addDependency('../../../../www/js/model/elements/Splitter.js', ['app.model.Splitter'], ['app.model.LineShapeComponent'], false);
goog.addDependency('../../../../www/js/model/elements/Wall.js', ['app.model.Wall'], ['app.model.RectangleShapeComponent'], false);
