const abstractFactoryHandler = require('../patterns/abstract-factory');
const decoratorHandler = require('../patterns/decorator');
const factoryHandler = require('../patterns/factory');
const observerHandler = require('../patterns/observer');
const commandHandler = require('../patterns/command');
const singletonHandler = require('../patterns/singleton');
const strategyHandler = require('../patterns/strategy');
const adapterHandler = require('../patterns/adapter');
const facadeHandler = require('../patterns/facade');
const proxyHandler = require('../patterns/proxy');
const bridgeHandler = require('../patterns/bridge');
const templateHandler = require('../patterns/template');
const compositeHandler = require('../patterns/composite');

module.exports = [
  { name: 'Strategy Pattern', handler: strategyHandler },
  { name: 'Observer Pattern', handler: observerHandler },
  { name: 'Decorator Pattern', handler: decoratorHandler },
  { name: 'Factory Method Pattern', handler: factoryHandler },
  { name: 'Abstract Factory Pattern', handler: abstractFactoryHandler },
  { name: 'Singleton Pattern', handler: singletonHandler },
  { name: 'Command Pattern', handler: commandHandler },
  { name: 'Adapter Pattern', handler: adapterHandler },
  { name: 'Facade Pattern', handler: facadeHandler },
  { name: 'Proxy Pattern', handler: proxyHandler },
  { name: 'Bridge Pattern', handler: bridgeHandler },
  { name: 'Template Method Pattern', handler: templateHandler },
  { name: 'Composite Pattern', handler: compositeHandler },
  { name: 'Iterator Pattern', handler: '' },
  { name: 'State Pattern', handler: '' },
  { name: 'Null Object Pattern', handler: '' },
];
