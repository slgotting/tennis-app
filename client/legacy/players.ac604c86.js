import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, r as _createClass, S as SvelteComponentDev, w as validate_each_argument, v as validate_slots, g as element, B as space, A as text, h as claim_element, j as children, D as claim_space, C as claim_text, k as detach_dev, l as attr_dev, m as add_location, n as insert_dev, E as append_dev, F as listen_dev, o as _slicedToArray, y as noop, z as destroy_each, Z as run_all, G as set_data_dev, P as create_component, X as query_selector_all, Q as claim_component, t as toggle_class, W as set_style, R as mount_component, p as transition_in, q as transition_out, T as destroy_component, N as binding_callbacks, O as bind, U as add_flush_callback } from './client.4ffce32a.js';
import { p as players } from './stores.810a4c83.js';

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/tennis/NewPlayerForm.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
} // (20:4) {#each [1, 2, 3, 4, 5] as line_}


function create_each_block$1(ctx) {
  var label;
  var input;
  var t0;
  var t1;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      label = element("label");
      input = element("input");
      t0 = space();
      t1 = text(
      /*line_*/
      ctx[6]);
      this.h();
    },
    l: function claim(nodes) {
      label = claim_element(nodes, "LABEL", {
        class: true
      });
      var label_nodes = children(label);
      input = claim_element(label_nodes, "INPUT", {
        type: true,
        value: true
      });
      t0 = claim_space(label_nodes);
      t1 = claim_text(label_nodes,
      /*line_*/
      ctx[6]);
      label_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "type", "radio");
      input.__value = /*line_*/
      ctx[6];
      input.value = input.__value;
      /*$$binding_groups*/

      ctx[3][0].push(input);
      add_location(input, file$1, 21, 8, 444);
      attr_dev(label, "class", "mr-4");
      add_location(label, file$1, 20, 6, 415);
    },
    m: function mount(target, anchor) {
      insert_dev(target, label, anchor);
      append_dev(label, input);
      input.checked = input.__value ===
      /*line*/
      ctx[1];
      append_dev(label, t0);
      append_dev(label, t1);

      if (!mounted) {
        dispose = listen_dev(input, "change",
        /*input_change_handler*/
        ctx[2]);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*line*/
      2) {
        input.checked = input.__value ===
        /*line*/
        ctx[1];
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(label);
      /*$$binding_groups*/

      ctx[3][0].splice(
      /*$$binding_groups*/
      ctx[3][0].indexOf(input), 1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$1.name,
    type: "each",
    source: "(20:4) {#each [1, 2, 3, 4, 5] as line_}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var div1;
  var form;
  var input;
  var t0;
  var h4;
  var t1;
  var t2;
  var t3;
  var div0;
  var t4;
  var t5;
  var div2;
  var mounted;
  var dispose;
  var each_value = [1, 2, 3, 4, 5];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < 5; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      div1 = element("div");
      form = element("form");
      input = element("input");
      t0 = space();
      h4 = element("h4");
      t1 = text("Line");
      t2 = space();

      for (var _i = 0; _i < 5; _i += 1) {
        each_blocks[_i].c();
      }

      t3 = space();
      div0 = element("div");
      t4 = text("Add Player");
      t5 = space();
      div2 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      form = claim_element(div1_nodes, "FORM", {});
      var form_nodes = children(form);
      input = claim_element(form_nodes, "INPUT", {
        type: true,
        placeholder: true
      });
      t0 = claim_space(form_nodes);
      h4 = claim_element(form_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);
      t1 = claim_text(h4_nodes, "Line");
      h4_nodes.forEach(detach_dev);
      t2 = claim_space(form_nodes);

      for (var _i2 = 0; _i2 < 5; _i2 += 1) {
        each_blocks[_i2].l(form_nodes);
      }

      t3 = claim_space(form_nodes);
      div0 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t4 = claim_text(div0_nodes, "Add Player");
      div0_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      children(div2).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "type", "text");
      attr_dev(input, "placeholder", "Name");
      add_location(input, file$1, 16, 4, 296);
      attr_dev(h4, "class", "text-lg");
      add_location(h4, file$1, 18, 4, 342);
      attr_dev(div0, "class", "text-green border-t");
      add_location(div0, file$1, 26, 4, 547);
      add_location(form, file$1, 15, 2, 285);
      attr_dev(div1, "class", "absolute p-4 z-50 bg-white rounded-md shadow-xl");
      add_location(div1, file$1, 14, 0, 221);
      attr_dev(div2, "class", "absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-25 z-40");
      add_location(div2, file$1, 31, 0, 655);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, form);
      append_dev(form, input);
      append_dev(form, t0);
      append_dev(form, h4);
      append_dev(h4, t1);
      append_dev(form, t2);

      for (var _i3 = 0; _i3 < 5; _i3 += 1) {
        each_blocks[_i3].m(form, null);
      }

      append_dev(form, t3);
      append_dev(form, div0);
      append_dev(div0, t4);
      insert_dev(target, t5, anchor);
      insert_dev(target, div2, anchor);

      if (!mounted) {
        dispose = [listen_dev(div0, "click", submitForm, false, false, false), listen_dev(div2, "click",
        /*click_handler*/
        ctx[4], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*line*/
      2) {
        each_value = [1, 2, 3, 4, 5];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < 5; _i4 += 1) {
          var child_ctx = get_each_context$1(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block$1(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(form, t3);
          }
        }

        for (; _i4 < 5; _i4 += 1) {
          each_blocks[_i4].d(1);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(t5);
      if (detaching) detach_dev(div2);
      mounted = false;
      run_all(dispose);
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

function submitForm() {}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("NewPlayerForm", slots, []);
  var _$$props$open = $$props.open,
      open = _$$props$open === void 0 ? false : _$$props$open;

  function addPlayer(playerObj) {
    players.update(function (n) {
      return n.push(playerObj);
    });
  }

  var line = 1;
  var writable_props = ["open"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<NewPlayerForm> was created with unknown prop '".concat(key, "'"));
  });
  var $$binding_groups = [[]];

  function input_change_handler() {
    line = this.__value;
    $$invalidate(1, line);
  }

  var click_handler = function click_handler() {
    return $$invalidate(0, open = false);
  };

  $$self.$$set = function ($$props) {
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
  };

  $$self.$capture_state = function () {
    return {
      players: players,
      open: open,
      addPlayer: addPlayer,
      submitForm: submitForm,
      line: line
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
    if ("line" in $$props) $$invalidate(1, line = $$props.line);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [open, line, input_change_handler, $$binding_groups, click_handler];
}

var NewPlayerForm = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(NewPlayerForm, _SvelteComponentDev);

  var _super = _createSuper$1(NewPlayerForm);

  function NewPlayerForm(options) {
    var _this;

    _classCallCheck(this, NewPlayerForm);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      open: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "NewPlayerForm",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(NewPlayerForm, [{
    key: "open",
    get: function get() {
      throw new Error("<NewPlayerForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<NewPlayerForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return NewPlayerForm;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/players.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
} // (24:2) {#each currentPlayers as player}


function create_each_block(ctx) {
  var li;
  var t0_value =
  /*player*/
  ctx[5].name + "";
  var t0;
  var t1;
  var t2_value =
  /*player*/
  ctx[5].line + "";
  var t2;
  var t3;
  var block = {
    c: function create() {
      li = element("li");
      t0 = text(t0_value);
      t1 = text(" - Line ");
      t2 = text(t2_value);
      t3 = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      t0 = claim_text(li_nodes, t0_value);
      t1 = claim_text(li_nodes, " - Line ");
      t2 = claim_text(li_nodes, t2_value);
      t3 = claim_space(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(li, "class", "py-2 px-2 shadow-md rounded-md");
      add_location(li, file, 24, 4, 582);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, t0);
      append_dev(li, t1);
      append_dev(li, t2);
      append_dev(li, t3);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*currentPlayers*/
      1 && t0_value !== (t0_value =
      /*player*/
      ctx[5].name + "")) set_data_dev(t0, t0_value);
      if (dirty &
      /*currentPlayers*/
      1 && t2_value !== (t2_value =
      /*player*/
      ctx[5].line + "")) set_data_dev(t2, t2_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(24:2) {#each currentPlayers as player}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var div;
  var newplayerform;
  var updating_open;
  var t1;
  var h10;
  var t2;
  var t3;
  var ul;
  var t4;
  var h11;
  var t5;
  var current;
  var mounted;
  var dispose;

  function newplayerform_open_binding(value) {
    /*newplayerform_open_binding*/
    ctx[2](value);
  }

  var newplayerform_props = {};

  if (
  /*addingNewPlayer*/
  ctx[1] !== void 0) {
    newplayerform_props.open =
    /*addingNewPlayer*/
    ctx[1];
  }

  newplayerform = new NewPlayerForm({
    props: newplayerform_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(newplayerform, "open", newplayerform_open_binding);
  });
  var each_value =
  /*currentPlayers*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      t0 = space();
      div = element("div");
      create_component(newplayerform.$$.fragment);
      t1 = space();
      h10 = element("h1");
      t2 = text("Players");
      t3 = space();
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t4 = space();
      h11 = element("h1");
      t5 = text("+ Add Player");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-htboqr\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      claim_component(newplayerform.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      h10 = claim_element(nodes, "H1", {
        class: true
      });
      var h10_nodes = children(h10);
      t2 = claim_text(h10_nodes, "Players");
      h10_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {
        class: true,
        style: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      h11 = claim_element(nodes, "H1", {
        class: true
      });
      var h11_nodes = children(h11);
      t5 = claim_text(h11_nodes, "+ Add Player");
      h11_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Players List";
      toggle_class(div, "hidden", !
      /*addingNewPlayer*/
      ctx[1]);
      add_location(div, file, 17, 0, 336);
      attr_dev(h10, "class", "text-center mb-2 pb-2 border-b");
      add_location(h10, file, 21, 0, 430);
      attr_dev(ul, "class", "overflow-y-scroll");
      set_style(ul, "max-height", "300px");
      add_location(ul, file, 22, 0, 486);
      attr_dev(h11, "class", "text-center text-lg mt-2 border rounded-md p-4 text-green-600");
      add_location(h11, file, 30, 0, 694);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      mount_component(newplayerform, div, null);
      insert_dev(target, t1, anchor);
      insert_dev(target, h10, anchor);
      append_dev(h10, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }

      insert_dev(target, t4, anchor);
      insert_dev(target, h11, anchor);
      append_dev(h11, t5);
      current = true;

      if (!mounted) {
        dispose = listen_dev(h11, "click",
        /*click_handler*/
        ctx[3], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var newplayerform_changes = {};

      if (!updating_open && dirty &
      /*addingNewPlayer*/
      2) {
        updating_open = true;
        newplayerform_changes.open =
        /*addingNewPlayer*/
        ctx[1];
        add_flush_callback(function () {
          return updating_open = false;
        });
      }

      newplayerform.$set(newplayerform_changes);

      if (dirty &
      /*addingNewPlayer*/
      2) {
        toggle_class(div, "hidden", !
        /*addingNewPlayer*/
        ctx[1]);
      }

      if (dirty &
      /*currentPlayers*/
      1) {
        each_value =
        /*currentPlayers*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(newplayerform.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(newplayerform.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      destroy_component(newplayerform);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(h10);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(ul);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(h11);
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
  validate_slots("Players", slots, []);
  var currentPlayers;
  var unsubscribe = players.subscribe(function (value) {
    $$invalidate(0, currentPlayers = value);
  });
  var addingNewPlayer = false;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Players> was created with unknown prop '".concat(key, "'"));
  });

  function newplayerform_open_binding(value) {
    addingNewPlayer = value;
    $$invalidate(1, addingNewPlayer);
  }

  var click_handler = function click_handler() {
    return $$invalidate(1, addingNewPlayer = !addingNewPlayer);
  };

  $$self.$capture_state = function () {
    return {
      NewPlayerForm: NewPlayerForm,
      players: players,
      currentPlayers: currentPlayers,
      unsubscribe: unsubscribe,
      addingNewPlayer: addingNewPlayer
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("currentPlayers" in $$props) $$invalidate(0, currentPlayers = $$props.currentPlayers);
    if ("addingNewPlayer" in $$props) $$invalidate(1, addingNewPlayer = $$props.addingNewPlayer);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [currentPlayers, addingNewPlayer, newplayerform_open_binding, click_handler];
}

var Players = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Players, _SvelteComponentDev);

  var _super = _createSuper(Players);

  function Players(options) {
    var _this;

    _classCallCheck(this, Players);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Players",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Players;
}(SvelteComponentDev);

export default Players;
