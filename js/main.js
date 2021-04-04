const worker = new Worker("js/worker.js");
worker.postMessage("1");
worker.postMessage("2");
