'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var defaultState = function (defaultValue) {
    return {
        loading: defaultValue === undefined || defaultValue === null,
        value: defaultValue,
    };
};
var reducer = function () { return function (state, action) {
    switch (action.type) {
        case 'error':
            return __assign({}, state, { error: action.error, loading: false, value: undefined });
        case 'reset':
            return defaultState(action.defaultValue);
        case 'value':
            return __assign({}, state, { error: undefined, loading: false, value: action.value });
        default:
            return state;
    }
}; };
var useLoadingValue = (function (getDefaultValue) {
    var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
    var _a = react.useReducer(reducer(), defaultState(defaultValue)), state = _a[0], dispatch = _a[1];
    var reset = function () {
        var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
        dispatch({ type: 'reset', defaultValue: defaultValue });
    };
    var setError = function (error) {
        dispatch({ type: 'error', error: error });
    };
    var setValue = function (value) {
        dispatch({ type: 'value', value: value });
    };
    return react.useMemo(function () { return ({
        error: state.error,
        loading: state.loading,
        reset: reset,
        setError: setError,
        setValue: setValue,
        value: state.value,
    }); }, [
        state.error,
        state.loading,
        reset,
        setError,
        setValue,
        state.value,
    ]);
});

var useComparatorRef = function (value, isEqual, onChange) {
    var ref = react.useRef(value);
    react.useEffect(function () {
        if (!isEqual(value, ref.current)) {
            ref.current = value;
            if (onChange) {
                onChange();
            }
        }
    });
    return ref;
};

var useDownloadURL = (function (storageRef) {
    var _a = useLoadingValue(), error = _a.error, loading = _a.loading, reset = _a.reset, setError = _a.setError, setValue = _a.setValue, value = _a.value;
    var ref = useComparatorRef(storageRef, isEqual$1, reset);
    react.useEffect(function () {
        if (!ref.current) {
            setValue(undefined);
            return;
        }
        ref.current.getDownloadURL().then(setValue).catch(setError);
    }, [ref.current]);
    return [value, loading, error];
});
var isEqual$1 = function (v1, v2) {
    var bothNull = !v1 && !v2;
    var equal = !!v1 && !!v2 && v1.fullPath === v2.fullPath;
    return bothNull || equal;
};

exports.useDownloadURL = useDownloadURL;
