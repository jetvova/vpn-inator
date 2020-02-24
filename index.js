const cloud = require("@pulumi/cloud");

let service = new cloud.Service("vpn", {
    containers: {
        vpn: {
            build: "./app",
            memory: 128,
            ports: [{ port: 1984 }],
        },
    },
    replicas: 1,
});

// export just the hostname property of the container frontend
exports.hostname = service.defaultEndpoint.apply(e => `${e.hostname}`);

