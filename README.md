# microbs - microservices observability

microbs is an open source, vendor-inclusive framework to demo, test, or learn about microservices observability. With little configuration and one command, you can automatically deploy a tech stack with your choice of any combination of the following...

- **Sample applications** (e.g. ecommerce, or make your own)
- **Simulated issues** (e.g. bugs, traffic spikes, or make your own)
- **Synthetics** (e.g. real-time synthetic user interactions)
- **Kubernetes platforms** (e.g. minikube, GKE)
- **Observability solutions** (e.g. Elastic Cloud, Grafana Cloud)


## Why microbs

microbs creates immersive experiences that are ideal for several use cases:

- **Demo** - Create interactive stories with your tech stacks.
- **Test** - Test your application observability under realistic circumstances.
- **Learn** - Hone your familiarity of microservices and observability.


## Quick start

> ⚠️ **Experimental** - microbs is a new project with an ambitious scope. Configuration and interfaces may change until its GA release. Currently there is little documentation and no automated tests. The CLI has been developed and tested only on macOS. Good luck, and [keep in touch](https://github.com/microbs-io/microbs/issues) to bring the project to maturity faster!

Read the [**getting started guide**](https://microbs.io/docs/overview/getting-started/) for more details.

1. Install dependencies: [node](https://nodejs.org/en/download/), [nvm](https://github.com/nvm-sh/nvm), [kubectl](https://kubernetes.io/docs/tasks/tools/), [skaffold](https://skaffold.dev/docs/install/)
2. Clone this repo: `git clone https://github.com/microbs-io/microbs.git && cd microbs`
3. Install microbs: `nvm install && npm install && cp ./config.reference.yaml ./config.yaml`
4. Add microbs to path: `export PATH="$(pwd):$PATH"`
5. Validate installation: `microbs validate`

[Plugins](https://microbs.io/docs/plugins/) may require additional dependencies and configuration. Read the docs for more details.
