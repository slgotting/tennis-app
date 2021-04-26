import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, B as space, P as create_component, X as query_selector_all, k as detach_dev, D as claim_space, Q as claim_component, n as insert_dev, R as mount_component, y as noop, p as transition_in, q as transition_out, T as destroy_component, v as validate_slots } from './client.4ffce32a.js';
import { L as LineCard, T as TimeRange } from './index.1323e1fc.js';
import './stores.810a4c83.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var t;
  var linecard;
  var current;
  linecard = new LineCard({
    props: {
      displayOption: "card"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t = space();
      create_component(linecard.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-6fwafq\"]", document.head);
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      claim_component(linecard.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "Component Testing";
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      mount_component(linecard, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(linecard.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(linecard.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      destroy_component(linecard, detaching);
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
  validate_slots("Test1", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Test1> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      LineCard: LineCard,
      TimeRange: TimeRange
    };
  };

  return [];
}

var Test1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Test1, _SvelteComponentDev);

  var _super = _createSuper(Test1);

  function Test1(options) {
    var _this;

    _classCallCheck(this, Test1);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Test1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Test1;
}(SvelteComponentDev);

export default Test1;
