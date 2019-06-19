'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Codigo = function () {
    function Codigo(codigo) {
        _classCallCheck(this, Codigo);

        this._codigo = codigo;
        if (!this._valida()) {
            throw new Error('O texto ' + codigo + ' n\xE3o \xE9 um c\xF3digo v\xE1lido.');
        }
    }

    _createClass(Codigo, [{
        key: '_valida',
        value: function _valida() {
            if (/\D{3}-\D{2}-\d{2}/.test(this._codigo)) return 'Código válido';
        }
    }, {
        key: 'codigo',
        get: function get() {
            return codigo;
        }
    }]);

    return Codigo;
}();
//# sourceMappingURL=Codigo.js.map