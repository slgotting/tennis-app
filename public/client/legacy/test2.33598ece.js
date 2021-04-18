import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_slots, y as noop, r as _createClass, f as create_slot, g as element, B as space, P as create_component, h as claim_element, j as children, k as detach_dev, D as claim_space, Q as claim_component, l as attr_dev, m as add_location, n as insert_dev, R as mount_component, u as update_slot, p as transition_in, q as transition_out, T as destroy_component, x as empty, o as _slicedToArray, L as group_outros, M as check_outros, $ as onMount, a0 as onDestroy, E as append_dev, a1 as _asyncToGenerator, a2 as regenerator, N as binding_callbacks, F as listen_dev, A as text, X as query_selector_all, C as claim_text, O as bind, U as add_flush_callback } from './client.4ffce32a.js';

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$4(ctx) {
  var block = {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$4($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("BodyBackdrop", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<BodyBackdrop> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var BodyBackdrop = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(BodyBackdrop, _SvelteComponentDev);

  var _super = _createSuper$4(BodyBackdrop);

  function BodyBackdrop(options) {
    var _this;

    _classCallCheck(this, BodyBackdrop);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "BodyBackdrop",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  return BodyBackdrop;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "src/components/slg/modals/Modal.svelte"; // (22:0) {#if open}

function create_if_block(ctx) {
  var div;
  var t;
  var bodybackdrop;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[4].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[3], null);
  bodybackdrop = new BodyBackdrop({
    $$inline: true
  });
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      t = space();
      create_component(bodybackdrop.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      claim_component(bodybackdrop.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "absolute p-4 z-50 bg-white rounded-md shadow-xl");
      add_location(div, file$3, 22, 2, 392);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      insert_dev(target, t, anchor);
      mount_component(bodybackdrop, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        8) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      transition_in(bodybackdrop.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      transition_out(bodybackdrop.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      if (detaching) detach_dev(t);
      destroy_component(bodybackdrop, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(22:0) {#if open}",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var if_block_anchor;
  var current;
  var if_block =
  /*open*/
  ctx[0] && create_if_block(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*open*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*open*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function showOrHideBackdrop(open) {}

function instance$3($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Modal", slots, ['default']);
  var _$$props$open = $$props.open,
      open = _$$props$open === void 0 ? false : _$$props$open;
  var _$$props$position = $$props.position,
      position = _$$props$position === void 0 ? "center" : _$$props$position;
  var _$$props$modalPositio = $$props.modalPosition,
      modalPosition = _$$props$modalPositio === void 0 ? "body" : _$$props$modalPositio;
  var writable_props = ["open", "position", "modalPosition"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Modal> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
    if ("position" in $$props) $$invalidate(1, position = $$props.position);
    if ("modalPosition" in $$props) $$invalidate(2, modalPosition = $$props.modalPosition);
    if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      BodyBackdrop: BodyBackdrop,
      open: open,
      position: position,
      modalPosition: modalPosition,
      showOrHideBackdrop: showOrHideBackdrop
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
    if ("position" in $$props) $$invalidate(1, position = $$props.position);
    if ("modalPosition" in $$props) $$invalidate(2, modalPosition = $$props.modalPosition);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*open*/
    1) ;
  };

  return [open, position, modalPosition, $$scope, slots];
}

var Modal = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Modal, _SvelteComponentDev);

  var _super = _createSuper$3(Modal);

  function Modal(options) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      open: 0,
      position: 1,
      modalPosition: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Modal",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(Modal, [{
    key: "open",
    get: function get() {
      throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "position",
    get: function get() {
      throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "modalPosition",
    get: function get() {
      throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Modal;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src/components/slg/Portal.svelte";

function create_fragment$2(ctx) {
  var div1;
  var div0;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (default_slot) default_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div0, file$2, 24, 2, 449);
      attr_dev(div1, "class", "portal-clone svelte-kxlmsa");
      add_location(div1, file$2, 23, 0, 420);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      if (default_slot) {
        default_slot.m(div0, null);
      }
      /*div0_binding*/


      ctx[3](div0);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[1], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      if (default_slot) default_slot.d(detaching);
      /*div0_binding*/

      ctx[3](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Portal", slots, ['default']);
  var ref;
  var portal;
  onMount( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            portal = document.createElement("div");
            portal.className = "portal";
            document.body.appendChild(portal);
            portal.appendChild(ref);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  onDestroy(function () {
    document.body.removeChild(portal);
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Portal> was created with unknown prop '".concat(key, "'"));
  });

  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }

  $$self.$$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      onDestroy: onDestroy,
      ref: ref,
      portal: portal
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("ref" in $$props) $$invalidate(0, ref = $$props.ref);
    if ("portal" in $$props) portal = $$props.portal;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [ref, $$scope, slots, div0_binding];
}

var Portal = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Portal, _SvelteComponentDev);

  var _super = _createSuper$2(Portal);

  function Portal(options) {
    var _this;

    _classCallCheck(this, Portal);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Portal",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Portal;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/slg/backdrops/DocumentBackdrop.svelte"; // (10:0) <Portal>

function create_default_slot(ctx) {
  var div;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-25 z-40");
      add_location(div, file$1, 10, 2, 141);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (!mounted) {
        dispose = listen_dev(div, "click",
        /*click_handler*/
        ctx[1], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(10:0) <Portal>",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var portal;
  var current;
  portal = new Portal({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(portal.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(portal.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(portal, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var portal_changes = {};

      if (dirty &
      /*$$scope, visible*/
      9) {
        portal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      portal.$set(portal_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(portal.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(portal.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(portal, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("DocumentBackdrop", slots, []);
  var _$$props$visible = $$props.visible,
      visible = _$$props$visible === void 0 ? false : _$$props$visible;
  var zIndex = "40";
  var writable_props = ["visible"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<DocumentBackdrop> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return $$invalidate(0, visible = false);
  };

  $$self.$$set = function ($$props) {
    if ("visible" in $$props) $$invalidate(0, visible = $$props.visible);
  };

  $$self.$capture_state = function () {
    return {
      Portal: Portal,
      visible: visible,
      zIndex: zIndex
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("visible" in $$props) $$invalidate(0, visible = $$props.visible);
    if ("zIndex" in $$props) zIndex = $$props.zIndex;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [visible, click_handler];
}

var DocumentBackdrop = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(DocumentBackdrop, _SvelteComponentDev);

  var _super = _createSuper$1(DocumentBackdrop);

  function DocumentBackdrop(options) {
    var _this;

    _classCallCheck(this, DocumentBackdrop);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      visible: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "DocumentBackdrop",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(DocumentBackdrop, [{
    key: "visible",
    get: function get() {
      throw new Error("<DocumentBackdrop>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<DocumentBackdrop>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return DocumentBackdrop;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/test2.svelte";

function create_fragment(ctx) {
  var t0;
  var button;
  var t1;
  var t2;
  var modal;
  var updating_open;
  var t3;
  var documentbackdrop;
  var current;
  var mounted;
  var dispose;

  function modal_open_binding(value) {
    /*modal_open_binding*/
    ctx[2](value);
  }

  var modal_props = {};

  if (
  /*modalOpen*/
  ctx[0] !== void 0) {
    modal_props.open =
    /*modalOpen*/
    ctx[0];
  }

  modal = new Modal({
    props: modal_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(modal, "open", modal_open_binding);
  });
  documentbackdrop = new DocumentBackdrop({
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      button = element("button");
      t1 = text("click");
      t2 = space();
      create_component(modal.$$.fragment);
      t3 = space();
      create_component(documentbackdrop.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-6fwafq\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t1 = claim_text(button_nodes, "click");
      button_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      claim_component(modal.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(documentbackdrop.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "Component Testing";
      attr_dev(button, "class", "dark:text-white");
      add_location(button, file, 14, 0, 276);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, button, anchor);
      append_dev(button, t1);
      insert_dev(target, t2, anchor);
      mount_component(modal, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(documentbackdrop, target, anchor);
      current = true;

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*click_handler*/
        ctx[1], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var modal_changes = {};

      if (!updating_open && dirty &
      /*modalOpen*/
      1) {
        updating_open = true;
        modal_changes.open =
        /*modalOpen*/
        ctx[0];
        add_flush_callback(function () {
          return updating_open = false;
        });
      }

      modal.$set(modal_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(modal.$$.fragment, local);
      transition_in(documentbackdrop.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(modal.$$.fragment, local);
      transition_out(documentbackdrop.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(button);
      if (detaching) detach_dev(t2);
      destroy_component(modal, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(documentbackdrop, detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Test2", slots, []);
  var modalOpen = false;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Test2> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return $$invalidate(0, modalOpen = true);
  };

  function modal_open_binding(value) {
    modalOpen = value;
    $$invalidate(0, modalOpen);
  }

  $$self.$capture_state = function () {
    return {
      Modal: Modal,
      DocumentBackdrop: DocumentBackdrop,
      modalOpen: modalOpen
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("modalOpen" in $$props) $$invalidate(0, modalOpen = $$props.modalOpen);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [modalOpen, click_handler, modal_open_binding];
}

var Test2 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Test2, _SvelteComponentDev);

  var _super = _createSuper(Test2);

  function Test2(options) {
    var _this;

    _classCallCheck(this, Test2);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Test2",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Test2;
}(SvelteComponentDev);

export default Test2;
