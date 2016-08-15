webpackHotUpdate(0,{

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(82);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactGoogleMaps = __webpack_require__(374);\n\nvar _InfoBox = __webpack_require__(419);\n\nvar _InfoBox2 = _interopRequireDefault(_InfoBox);\n\nvar _reactModal = __webpack_require__(423);\n\nvar _reactModal2 = _interopRequireDefault(_reactModal);\n\nvar _redux = __webpack_require__(187);\n\nvar _reactRedux = __webpack_require__(201);\n\nvar _base_component = __webpack_require__(441);\n\nvar _base_component2 = _interopRequireDefault(_base_component);\n\nvar _google_maps_modal_component = __webpack_require__(442);\n\nvar _google_maps_modal_component2 = _interopRequireDefault(_google_maps_modal_component);\n\nvar _google_map_styles = __webpack_require__(444);\n\nvar _google_map_styles2 = _interopRequireDefault(_google_map_styles);\n\nvar _index = __webpack_require__(284);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// Code for potential inclusion at later date:\nvar geolocation = function () {\n  // canUseDOM && navigator.geolocation || {\n  //   getCurrentPosition: (success, failure) => {\n  //     failure(`Your browser doesn't support geolocation.`);\n  //   },\n  // }\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      var pos = {\n        lat: position.coords.latitude,\n        lng: position.coords.longitude\n      };\n      // console.log(`Location found: ${pos.lat} ${pos.lng}`);\n      // console.log(`Google Maps LatLng: ${new google.maps.LatLng(pos.lat, pos.lng)}`);\n      return new google.maps.LatLng(pos.lat, pos.lng);\n    });\n    // console.log(`Your browser doesn't support geolocation.`);\n    return new google.maps.LatLng(37.745951, -122.439421);\n  }\n}();\n\nvar GMap = function (_BaseComponent) {\n  _inherits(GMap, _BaseComponent);\n\n  function GMap(props) {\n    _classCallCheck(this, GMap);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GMap).call(this, props));\n\n    _this.state = {\n      defaultCenter: new google.maps.LatLng(37.745951, -122.439421),\n      geoPos: null,\n      zoomLevel: 10\n    };\n\n    _this.modalNo = _this.modalNo.bind(_this);\n    _this.addTimeDelayedMarker = _this.addTimeDelayedMarker.bind(_this);\n    _this.markerCallbackHandler = _this.markerCallbackHandler.bind(_this);\n    return _this;\n  }\n\n  _createClass(GMap, [{\n    key: 'centerMap',\n    value: function centerMap() {\n      // console.log(`First map marker coordinates: ${this.props.markers[0].coords}`);\n      return this.props.markers.length ? this.props.markers[0].coords : this.state.defaultCenter;\n    }\n  }, {\n    key: 'centerZoomOverUSA',\n    value: function centerZoomOverUSA() {\n      this.setState({ zoomLevel: 5 });\n    }\n\n    // Toggle to 'true' to show InfoWindow and re-renders component\n\n  }, {\n    key: 'handleMarkerClick',\n    value: function handleMarkerClick(targetMarker) {\n      this.closeAllMarkers();\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return marker === targetMarker ? Object.assign(marker, { showInfo: true }) : marker;\n        })\n      });\n    }\n  }, {\n    key: 'handleMarkerClose',\n    value: function handleMarkerClose(targetMarker) {\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return marker === targetMarker ? { marker: marker, showInfo: false } : marker;\n        })\n      });\n    }\n  }, {\n    key: 'closeAllMarkers',\n    value: function closeAllMarkers() {\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return Object.assign(marker, { showInfo: false });\n        })\n      });\n    }\n  }, {\n    key: 'renderInfoWindow',\n    value: function renderInfoWindow(ref, marker) {\n      var onCloseclick = this.handleMarkerClose.bind(this, marker);\n      console.log('Marker Keys: ' + Object.getOwnPropertyNames(marker));\n      console.log('Job Name: ' + marker.jobTitle);\n\n      return _react2.default.createElement(\n        _reactGoogleMaps.InfoWindow,\n        {\n          key: ref + '_info_window',\n          onCloseclick: onCloseclick },\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            { className: 'infoWindow_Header' },\n            this.parseAndFormatJobTitle(marker.jobTitle)\n          ),\n          _react2.default.createElement(\n            'h5',\n            { className: 'infoWindow_Header' },\n            marker.company\n          ),\n          _react2.default.createElement('hr', null),\n          _react2.default.createElement(\n            'p',\n            null,\n            marker.formattedLocation\n          )\n        )\n      );\n    }\n\n    // Class methods for control of the Google Maps Modal visibility:\n\n  }, {\n    key: 'modalYes',\n    value: function modalYes() {\n      return this.props.toggleModal();\n    }\n  }, {\n    key: 'modalNo',\n    value: function modalNo() {\n      return this.props.toggleModalOff();\n    }\n  }, {\n    key: 'addTimeDelayedMarker',\n    value: function addTimeDelayedMarker(marker, index) {\n      var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',\n          MAX_ZINDEX = 1000;\n\n      return _react2.default.createElement(\n        _reactGoogleMaps.Marker,\n        {\n          key: index,\n          ref: 'marker_' + index,\n          'data-jobTitle': marker.jobTitle,\n          'data-formattedLocation': marker.formattedLocation,\n          position: new google.maps.LatLng(marker.coords),\n          animation: google.maps.Animation.DROP,\n          title: marker.company,\n          opacity: 0.90,\n          zIndex: MAX_ZINDEX,\n          label: { \"text\": '' + ALPHABET[index++], \"fontFamily\": \"Raleway\", \"fontWeight\": \"bold\" },\n          onClick: this.renderInfoWindow(index, marker) },\n\n        // Show InfoWindow only if `showInfo` key of the marker is `true`. That is, when the \n        // Marker pin has been clicked and 'handleMarkerClick' has been successfully fired.\n        marker.showInfo ? this.renderInfoWindow(index, marker) : null\n      );\n    }\n  }, {\n    key: 'markerCallbackHandler',\n    value: function markerCallbackHandler() {\n      var _this2 = this;\n\n      return this.props.markers.map(function (marker, index) {\n        return _this2.addTimeDelayedMarker(marker, index);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(_reactGoogleMaps.GoogleMapLoader, {\n        containerElement: _react2.default.createElement('div', {\n          id: 'mapsContainer',\n          onDoubleClick: function onDoubleClick() {\n            return _this3.modalYes();\n          } }),\n        googleMapElement: _react2.default.createElement(\n          _reactGoogleMaps.GoogleMap\n          // defaultCenter={this.state.defaultCenter}\n          ,\n          { center: this.centerMap(),\n            defaultCenter: this.state.defaultCenter,\n            defaultZoom: this.state.zoomLevel,\n            maxZoom: 19,\n            defaultOptions: { styles: _google_map_styles2.default },\n            scrollwheel: false,\n            ref: 'map' },\n          this.markerCallbackHandler(),\n          _react2.default.createElement(_google_maps_modal_component2.default, { center: this.centerMap(), modalEnable: this.modalYes, modalDisable: this.modalNo })\n        )\n      });\n    }\n  }]);\n\n  return GMap;\n}(_base_component2.default);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    markers: state.jobs.map(function (job) {\n      var _ref;\n\n      return _ref = {\n        coords: new google.maps.LatLng(job.latitude, job.longitude)\n      }, _defineProperty(_ref, 'coords', { \"lat\": job.latitude, \"lng\": job.longitude }), _defineProperty(_ref, 'jobTitle', job.jobtitle), _defineProperty(_ref, 'company', job.company), _defineProperty(_ref, 'formattedLocation', job.formattedLocation), _defineProperty(_ref, 'showInfo', false), _ref;\n    }),\n    toggleModal: state.toggleModal\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({\n    toggleModal: _index.toggleModal,\n    toggleModalOff: _index.toggleModalOff\n  }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GMap);\n\n// {\n//   // Show InfoWindow only if `showInfo` key of the marker is `true`. That is, when the \n//   // Marker pin has been clicked and 'handleMarkerClick' has been successfully fired.\n//   marker.showInfo ? this.renderInfoWindow(index, marker) : null \n// }\n\n\n// function pinDropper() {\n//                 let markers = [];\n\n\n// const pinDropDelay = 1000,\n//                     delayPinDrop = (fn) => setTImeOut(fn, pinDropDelay); \n// delayPinDrop(() => newMarker, pinDropDelay);\n\n// const dropPins = () => setTimeout(function() { return newMarker; }, 1000);\n// dropPins();\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(307); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"google_map_component.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZ29vZ2xlX21hcF9jb21wb25lbnQuanM/Mjg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSRUFDVCBIT1QgTE9BREVSICovIGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBSZWFjdEhvdEFQSSA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWFwaS9tb2R1bGVzL2luZGV4LmpzXCIpLCBSb290SW5zdGFuY2VQcm92aWRlciA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9Sb290SW5zdGFuY2VQcm92aWRlci5qc1wiKSwgUmVhY3RNb3VudCA9IHJlcXVpcmUoXCJyZWFjdC9saWIvUmVhY3RNb3VudFwiKSwgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7IG1vZHVsZS5tYWtlSG90ID0gbW9kdWxlLmhvdC5kYXRhID8gbW9kdWxlLmhvdC5kYXRhLm1ha2VIb3QgOiBSZWFjdEhvdEFQSShmdW5jdGlvbiAoKSB7IHJldHVybiBSb290SW5zdGFuY2VQcm92aWRlci5nZXRSb290SW5zdGFuY2VzKFJlYWN0TW91bnQpOyB9LCBSZWFjdCk7IH0pKCk7IH0gdHJ5IHsgKGZ1bmN0aW9uICgpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RHb29nbGVNYXBzID0gcmVxdWlyZSgncmVhY3QtZ29vZ2xlLW1hcHMnKTtcblxudmFyIF9JbmZvQm94ID0gcmVxdWlyZSgncmVhY3QtZ29vZ2xlLW1hcHMvbGliL2FkZG9ucy9JbmZvQm94Jyk7XG5cbnZhciBfSW5mb0JveDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbmZvQm94KTtcblxudmFyIF9yZWFjdE1vZGFsID0gcmVxdWlyZSgncmVhY3QtbW9kYWwnKTtcblxudmFyIF9yZWFjdE1vZGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0TW9kYWwpO1xuXG52YXIgX3JlZHV4ID0gcmVxdWlyZSgncmVkdXgnKTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxudmFyIF9iYXNlX2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYmFzZV9jb21wb25lbnQnKTtcblxudmFyIF9iYXNlX2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlX2NvbXBvbmVudCk7XG5cbnZhciBfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQnKTtcblxudmFyIF9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50KTtcblxudmFyIF9nb29nbGVfbWFwX3N0eWxlcyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9nb29nbGVfbWFwX3N0eWxlcy5qc29uJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9zdHlsZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcF9zdHlsZXMpO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9pbmRleCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIENvZGUgZm9yIHBvdGVudGlhbCBpbmNsdXNpb24gYXQgbGF0ZXIgZGF0ZTpcbnZhciBnZW9sb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gY2FuVXNlRE9NICYmIG5hdmlnYXRvci5nZW9sb2NhdGlvbiB8fCB7XG4gIC8vICAgZ2V0Q3VycmVudFBvc2l0aW9uOiAoc3VjY2VzcywgZmFpbHVyZSkgPT4ge1xuICAvLyAgICAgZmFpbHVyZShgWW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi5gKTtcbiAgLy8gICB9LFxuICAvLyB9XG4gIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxuICAgICAgfTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBMb2NhdGlvbiBmb3VuZDogJHtwb3MubGF0fSAke3Bvcy5sbmd9YCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgR29vZ2xlIE1hcHMgTGF0TG5nOiAke25ldyBnb29nbGUubWFwcy5MYXRMbmcocG9zLmxhdCwgcG9zLmxuZyl9YCk7XG4gICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MubGF0LCBwb3MubG5nKTtcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhgWW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi5gKTtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygzNy43NDU5NTEsIC0xMjIuNDM5NDIxKTtcbiAgfVxufSgpO1xuXG52YXIgR01hcCA9IGZ1bmN0aW9uIChfQmFzZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR01hcCwgX0Jhc2VDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdNYXAocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR01hcCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR01hcCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkZWZhdWx0Q2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3Ljc0NTk1MSwgLTEyMi40Mzk0MjEpLFxuICAgICAgZ2VvUG9zOiBudWxsLFxuICAgICAgem9vbUxldmVsOiAxMFxuICAgIH07XG5cbiAgICBfdGhpcy5tb2RhbE5vID0gX3RoaXMubW9kYWxOby5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5hZGRUaW1lRGVsYXllZE1hcmtlciA9IF90aGlzLmFkZFRpbWVEZWxheWVkTWFya2VyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm1hcmtlckNhbGxiYWNrSGFuZGxlciA9IF90aGlzLm1hcmtlckNhbGxiYWNrSGFuZGxlci5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR01hcCwgW3tcbiAgICBrZXk6ICdjZW50ZXJNYXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjZW50ZXJNYXAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgRmlyc3QgbWFwIG1hcmtlciBjb29yZGluYXRlczogJHt0aGlzLnByb3BzLm1hcmtlcnNbMF0uY29vcmRzfWApO1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMubWFya2Vycy5sZW5ndGggPyB0aGlzLnByb3BzLm1hcmtlcnNbMF0uY29vcmRzIDogdGhpcy5zdGF0ZS5kZWZhdWx0Q2VudGVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NlbnRlclpvb21PdmVyVVNBJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2VudGVyWm9vbU92ZXJVU0EoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgem9vbUxldmVsOiA1IH0pO1xuICAgIH1cblxuICAgIC8vIFRvZ2dsZSB0byAndHJ1ZScgdG8gc2hvdyBJbmZvV2luZG93IGFuZCByZS1yZW5kZXJzIGNvbXBvbmVudFxuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNYXJrZXJDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1hcmtlckNsaWNrKHRhcmdldE1hcmtlcikge1xuICAgICAgdGhpcy5jbG9zZUFsbE1hcmtlcnMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtYXJrZXJzOiB0aGlzLnByb3BzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbWFya2VyID09PSB0YXJnZXRNYXJrZXIgPyBPYmplY3QuYXNzaWduKG1hcmtlciwgeyBzaG93SW5mbzogdHJ1ZSB9KSA6IG1hcmtlcjtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZU1hcmtlckNsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTWFya2VyQ2xvc2UodGFyZ2V0TWFya2VyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFya2VyczogdGhpcy5wcm9wcy5tYXJrZXJzLm1hcChmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcmtlciA9PT0gdGFyZ2V0TWFya2VyID8geyBtYXJrZXI6IG1hcmtlciwgc2hvd0luZm86IGZhbHNlIH0gOiBtYXJrZXI7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9zZUFsbE1hcmtlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZUFsbE1hcmtlcnMoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFya2VyczogdGhpcy5wcm9wcy5tYXJrZXJzLm1hcChmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obWFya2VyLCB7IHNob3dJbmZvOiBmYWxzZSB9KTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckluZm9XaW5kb3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbmZvV2luZG93KHJlZiwgbWFya2VyKSB7XG4gICAgICB2YXIgb25DbG9zZWNsaWNrID0gdGhpcy5oYW5kbGVNYXJrZXJDbG9zZS5iaW5kKHRoaXMsIG1hcmtlcik7XG4gICAgICBjb25zb2xlLmxvZygnTWFya2VyIEtleXM6ICcgKyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtYXJrZXIpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdKb2IgTmFtZTogJyArIG1hcmtlci5qb2JUaXRsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0R29vZ2xlTWFwcy5JbmZvV2luZG93LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiByZWYgKyAnX2luZm9fd2luZG93JyxcbiAgICAgICAgICBvbkNsb3NlY2xpY2s6IG9uQ2xvc2VjbGljayB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2g0JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaW5mb1dpbmRvd19IZWFkZXInIH0sXG4gICAgICAgICAgICB0aGlzLnBhcnNlQW5kRm9ybWF0Sm9iVGl0bGUobWFya2VyLmpvYlRpdGxlKVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDUnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdpbmZvV2luZG93X0hlYWRlcicgfSxcbiAgICAgICAgICAgIG1hcmtlci5jb21wYW55XG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCBudWxsKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBtYXJrZXIuZm9ybWF0dGVkTG9jYXRpb25cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgbWV0aG9kcyBmb3IgY29udHJvbCBvZiB0aGUgR29vZ2xlIE1hcHMgTW9kYWwgdmlzaWJpbGl0eTpcblxuICB9LCB7XG4gICAga2V5OiAnbW9kYWxZZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb2RhbFllcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvZ2dsZU1vZGFsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbW9kYWxObycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vZGFsTm8oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50b2dnbGVNb2RhbE9mZigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZFRpbWVEZWxheWVkTWFya2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGltZURlbGF5ZWRNYXJrZXIobWFya2VyLCBpbmRleCkge1xuICAgICAgdmFyIEFMUEhBQkVUID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJyxcbiAgICAgICAgICBNQVhfWklOREVYID0gMTAwMDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RHb29nbGVNYXBzLk1hcmtlcixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgcmVmOiAnbWFya2VyXycgKyBpbmRleCxcbiAgICAgICAgICAnZGF0YS1qb2JUaXRsZSc6IG1hcmtlci5qb2JUaXRsZSxcbiAgICAgICAgICAnZGF0YS1mb3JtYXR0ZWRMb2NhdGlvbic6IG1hcmtlci5mb3JtYXR0ZWRMb2NhdGlvbixcbiAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhtYXJrZXIuY29vcmRzKSxcbiAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICAgIHRpdGxlOiBtYXJrZXIuY29tcGFueSxcbiAgICAgICAgICBvcGFjaXR5OiAwLjkwLFxuICAgICAgICAgIHpJbmRleDogTUFYX1pJTkRFWCxcbiAgICAgICAgICBsYWJlbDogeyBcInRleHRcIjogJycgKyBBTFBIQUJFVFtpbmRleCsrXSwgXCJmb250RmFtaWx5XCI6IFwiUmFsZXdheVwiLCBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIgfSxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLnJlbmRlckluZm9XaW5kb3coaW5kZXgsIG1hcmtlcikgfSxcblxuICAgICAgICAvLyBTaG93IEluZm9XaW5kb3cgb25seSBpZiBgc2hvd0luZm9gIGtleSBvZiB0aGUgbWFya2VyIGlzIGB0cnVlYC4gVGhhdCBpcywgd2hlbiB0aGUgXG4gICAgICAgIC8vIE1hcmtlciBwaW4gaGFzIGJlZW4gY2xpY2tlZCBhbmQgJ2hhbmRsZU1hcmtlckNsaWNrJyBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgZmlyZWQuXG4gICAgICAgIG1hcmtlci5zaG93SW5mbyA/IHRoaXMucmVuZGVySW5mb1dpbmRvdyhpbmRleCwgbWFya2VyKSA6IG51bGxcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWFya2VyQ2FsbGJhY2tIYW5kbGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFya2VyQ2FsbGJhY2tIYW5kbGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrZXIsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuYWRkVGltZURlbGF5ZWRNYXJrZXIobWFya2VyLCBpbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEdvb2dsZU1hcHMuR29vZ2xlTWFwTG9hZGVyLCB7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgaWQ6ICdtYXBzQ29udGFpbmVyJyxcbiAgICAgICAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5tb2RhbFllcygpO1xuICAgICAgICAgIH0gfSksXG4gICAgICAgIGdvb2dsZU1hcEVsZW1lbnQ6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9yZWFjdEdvb2dsZU1hcHMuR29vZ2xlTWFwXG4gICAgICAgICAgLy8gZGVmYXVsdENlbnRlcj17dGhpcy5zdGF0ZS5kZWZhdWx0Q2VudGVyfVxuICAgICAgICAgICxcbiAgICAgICAgICB7IGNlbnRlcjogdGhpcy5jZW50ZXJNYXAoKSxcbiAgICAgICAgICAgIGRlZmF1bHRDZW50ZXI6IHRoaXMuc3RhdGUuZGVmYXVsdENlbnRlcixcbiAgICAgICAgICAgIGRlZmF1bHRab29tOiB0aGlzLnN0YXRlLnpvb21MZXZlbCxcbiAgICAgICAgICAgIG1heFpvb206IDE5LFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHsgc3R5bGVzOiBfZ29vZ2xlX21hcF9zdHlsZXMyLmRlZmF1bHQgfSxcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgIHJlZjogJ21hcCcgfSxcbiAgICAgICAgICB0aGlzLm1hcmtlckNhbGxiYWNrSGFuZGxlcigpLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQyLmRlZmF1bHQsIHsgY2VudGVyOiB0aGlzLmNlbnRlck1hcCgpLCBtb2RhbEVuYWJsZTogdGhpcy5tb2RhbFllcywgbW9kYWxEaXNhYmxlOiB0aGlzLm1vZGFsTm8gfSlcbiAgICAgICAgKVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdNYXA7XG59KF9iYXNlX2NvbXBvbmVudDIuZGVmYXVsdCk7XG5cbnZhciBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBtYXJrZXJzOiBzdGF0ZS5qb2JzLm1hcChmdW5jdGlvbiAoam9iKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAgIGNvb3JkczogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhqb2IubGF0aXR1ZGUsIGpvYi5sb25naXR1ZGUpXG4gICAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgJ2Nvb3JkcycsIHsgXCJsYXRcIjogam9iLmxhdGl0dWRlLCBcImxuZ1wiOiBqb2IubG9uZ2l0dWRlIH0pLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgJ2pvYlRpdGxlJywgam9iLmpvYnRpdGxlKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdjb21wYW55Jywgam9iLmNvbXBhbnkpLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgJ2Zvcm1hdHRlZExvY2F0aW9uJywgam9iLmZvcm1hdHRlZExvY2F0aW9uKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdzaG93SW5mbycsIGZhbHNlKSwgX3JlZjtcbiAgICB9KSxcbiAgICB0b2dnbGVNb2RhbDogc3RhdGUudG9nZ2xlTW9kYWxcbiAgfTtcbn07XG5cbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKSh7XG4gICAgdG9nZ2xlTW9kYWw6IF9pbmRleC50b2dnbGVNb2RhbCxcbiAgICB0b2dnbGVNb2RhbE9mZjogX2luZGV4LnRvZ2dsZU1vZGFsT2ZmXG4gIH0sIGRpc3BhdGNoKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfcmVhY3RSZWR1eC5jb25uZWN0KShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR01hcCk7XG5cbi8vIHtcbi8vICAgLy8gU2hvdyBJbmZvV2luZG93IG9ubHkgaWYgYHNob3dJbmZvYCBrZXkgb2YgdGhlIG1hcmtlciBpcyBgdHJ1ZWAuIFRoYXQgaXMsIHdoZW4gdGhlIFxuLy8gICAvLyBNYXJrZXIgcGluIGhhcyBiZWVuIGNsaWNrZWQgYW5kICdoYW5kbGVNYXJrZXJDbGljaycgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGZpcmVkLlxuLy8gICBtYXJrZXIuc2hvd0luZm8gPyB0aGlzLnJlbmRlckluZm9XaW5kb3coaW5kZXgsIG1hcmtlcikgOiBudWxsIFxuLy8gfVxuXG5cbi8vIGZ1bmN0aW9uIHBpbkRyb3BwZXIoKSB7XG4vLyAgICAgICAgICAgICAgICAgbGV0IG1hcmtlcnMgPSBbXTtcblxuXG4vLyBjb25zdCBwaW5Ecm9wRGVsYXkgPSAxMDAwLFxuLy8gICAgICAgICAgICAgICAgICAgICBkZWxheVBpbkRyb3AgPSAoZm4pID0+IHNldFRJbWVPdXQoZm4sIHBpbkRyb3BEZWxheSk7IFxuLy8gZGVsYXlQaW5Ecm9wKCgpID0+IG5ld01hcmtlciwgcGluRHJvcERlbGF5KTtcblxuLy8gY29uc3QgZHJvcFBpbnMgPSAoKSA9PiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3TWFya2VyOyB9LCAxMDAwKTtcbi8vIGRyb3BQaW5zKCk7XG5cbi8qIFJFQUNUIEhPVCBMT0FERVIgKi8gfSkuY2FsbCh0aGlzKTsgfSBmaW5hbGx5IHsgaWYgKG1vZHVsZS5ob3QpIHsgKGZ1bmN0aW9uICgpIHsgdmFyIGZvdW5kUmVhY3RDbGFzc2VzID0gbW9kdWxlLmhvdC5kYXRhICYmIG1vZHVsZS5ob3QuZGF0YS5mb3VuZFJlYWN0Q2xhc3NlcyB8fCBmYWxzZTsgaWYgKG1vZHVsZS5leHBvcnRzICYmIG1vZHVsZS5tYWtlSG90KSB7IHZhciBtYWtlRXhwb3J0c0hvdCA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9tYWtlRXhwb3J0c0hvdC5qc1wiKTsgaWYgKG1ha2VFeHBvcnRzSG90KG1vZHVsZSwgcmVxdWlyZShcInJlYWN0XCIpKSkgeyBmb3VuZFJlYWN0Q2xhc3NlcyA9IHRydWU7IH0gdmFyIHNob3VsZEFjY2VwdE1vZHVsZSA9IHRydWUgJiYgZm91bmRSZWFjdENsYXNzZXM7IGlmIChzaG91bGRBY2NlcHRNb2R1bGUpIHsgbW9kdWxlLmhvdC5hY2NlcHQoZnVuY3Rpb24gKGVycikgeyBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoXCJDYW5ub3Qgbm90IGFwcGx5IGhvdCB1cGRhdGUgdG8gXCIgKyBcImdvb2dsZV9tYXBfY29tcG9uZW50LmpzXCIgKyBcIjogXCIgKyBlcnIubWVzc2FnZSk7IH0gfSk7IH0gfSBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHsgZGF0YS5tYWtlSG90ID0gbW9kdWxlLm1ha2VIb3Q7IGRhdGEuZm91bmRSZWFjdENsYXNzZXMgPSBmb3VuZFJlYWN0Q2xhc3NlczsgfSk7IH0pKCk7IH0gfVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9nb29nbGVfbWFwX2NvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDM3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})