System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, CCFloat, Vec3, Animation, tween, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, bird;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCFloat = _cc.CCFloat;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61903a9ETdJrrL/mrkmDLzs", "Bird", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Node', 'CCFloat', 'Vec3', 'Animation', 'tween', 'easing']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("bird", bird = (_dec = ccclass('Bird'), _dec2 = property({
        type: CCFloat,
        tooltip: 'height of bird'
      }), _dec3 = property({
        type: CCFloat,
        tooltip: 'How long can they jump'
      }), _dec(_class = (_class2 = class bird extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "jumpHeight", _descriptor, this);

          _initializerDefineProperty(this, "jumpDuration", _descriptor2, this);

          this.birdAnimation = void 0;
          this.birdLocation = void 0;
          this.hitSomething = void 0;
        }

        onLoad() {
          this.resetBird();
          this.birdAnimation = this.getComponent(Animation);
        }

        resetBird() {
          this.birdLocation = new Vec3(0, 0, 0);
          this.node.setPosition(this.birdLocation);
          this.node.setRotationFromEuler(0, 0, 0);
          this.hitSomething = false;
        }

        fly() {
          this.birdAnimation.stop();
          tween(this.node.position).to(this.jumpDuration, new Vec3(this.node.position.x, this.node.position.y + this.jumpHeight, 0), {
            easing: 'smooth',
            onUpdate: (target, ratio) => {
              this.node.position = target;
            }
          }).start();
          this.birdAnimation.play();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "jumpHeight", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jumpDuration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return .3;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec06aec16a60f2c193bfb0c2ae2543528f74808d.js.map