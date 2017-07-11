/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(["assert", "wilton/thread", "wilton/shared"], function(assert, thread, shared) {
    "use strict";

    shared.put("threadTest", {
        val: 0
    });

    thread.run({
        callbackScript: {
            "module": "wilton/test/core/helpers/threadHelper",
            "func": "increment1"
        }
    });

    shared.waitChange({
        timeoutMillis: 15000,
        key: "threadTest",
        currentValue: {
            val: 0
        }
    });
    
    var loaded = shared.get("threadTest");
    assert(1 === loaded.val);

    shared.remove("threadTest");
    
    thread.sleepMillis(100);
});