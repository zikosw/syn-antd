goog.provide("shadow.js");
/** @dict */ shadow.js.files = {};
/** @dict */ shadow.js.nativeRequires = {};
/** @nocollapse */ shadow.js.process = {};
/** @define {string} */ goog.define("shadow.js.NODE_ENV", "development");
/** @define {boolean} */ goog.define("shadow.js.process.browser", false);
/** @dict */ shadow.js.shims = {};
shadow.js.process["title"] = "browser";
shadow.js.process["argv"] = [];
shadow.js.process["cwd"] = function() {
  return "/";
};
shadow.js.process["version"] = "";
shadow.js.process["versions"] = {};
shadow.js.process["env"] = {NODE_ENV:shadow.js.NODE_ENV};
shadow.js.process_noop = function() {
};
shadow.js.process["on"] = shadow.js.process_noop;
shadow.js.process["addListener"] = shadow.js.process_noop;
shadow.js.process["once"] = shadow.js.process_noop;
shadow.js.process["off"] = shadow.js.process_noop;
shadow.js.process["removeListener"] = shadow.js.process_noop;
shadow.js.process["removeAllListeners"] = shadow.js.process_noop;
shadow.js.process["emit"] = shadow.js.process_noop;
shadow.js.process["prependListener"] = shadow.js.process_noop;
shadow.js.process["prependOnceListener"] = shadow.js.process_noop;
shadow.js.process["listeners"] = function(name) {
  return [];
};
shadow.js.process["binding"] = function(name) {
  throw new Error("process.binding is not supported");
};
shadow.js.process["cwd"] = function() {
  return "/";
};
shadow.js.process["chdir"] = function(dir) {
  throw new Error("process.chdir is not supported");
};
shadow.js.process["umask"] = function() {
  return 0;
};
shadow.js.requireStack = [];
shadow.js.add_native_require = function(name, obj) {
  shadow.js.nativeRequires[name] = obj;
};
/**
 @return {ShadowJS}
 */
shadow.js.jsRequire = function(name, opts) {
  var nativeObj = shadow.js.nativeRequires[name];
  if (nativeObj !== undefined) {
    return nativeObj;
  }
  try {
    if (goog.DEBUG) {
      if (name instanceof String && name.indexOf("/") != -1) {
        console.warn("Tried to dynamically require '" + name + "' from '" + shadow.js.requireStack[shadow.js.requireStack.length - 1] + "'. This is not supported and may cause issues.");
      }
    }
    shadow.js.requireStack.push(name);
    var module = shadow.js.files[name];
    if (module === undefined) {
      module = {};
      module["exports"] = {};
      shadow.js.files[name] = module;
    }
    var moduleFn = shadow$provide[name];
    if (moduleFn) {
      delete shadow$provide[name];
      var process = goog.global.process || shadow.js.process;
      try {
        moduleFn.call(module, goog.global, process, shadow.js.jsRequire, module, module["exports"], shadow.js.shims);
      } catch (e) {
        console.warn("shadow-cljs - failed to load", name);
        throw e;
      }
      if (opts) {
        var globals = opts["globals"];
        if (globals) {
          for (var i = 0; i < globals.length; i++) {
            window[globals[i]] = module["exports"];
          }
        }
      }
    }
  } finally {
    shadow.js.requireStack.pop();
  }
  return module["exports"];
};
/** @dict */ shadow.js.modules = {};
shadow.js.require = function(name, opts) {
  return shadow.js.jsRequire(name, opts);
};

//# sourceMappingURL=shadow.js.js.map
