const abstractFactoryHandler = require('../patterns/abstract-factory');
const decoratorHandler = require('../patterns/decorator');
const factoryHandler = require('../patterns/factory');
const observerHandler = require('../patterns/observer');
const strategyHandler = require('../patterns/strategy');

module.exports = [
  { name: 'Strategy Pattern', handler: strategyHandler },
  { name: 'Observer Pattern', handler: observerHandler },
  { name: 'Decorator Pattern', handler: decoratorHandler },
  { name: 'Factory Method Pattern', handler: factoryHandler },
  { name: 'Abstract Factory Pattern', handler: abstractFactoryHandler },
  { name: 'Singleton Pattern', handler: '' },
  { name: 'Command Pattern', handler: '' },
  { name: 'Adapter Pattern', handler: '' },
  { name: 'Facade Pattern', handler: '' },
  { name: 'Proxy Pattern', handler: '' },
  { name: 'Bridge Pattern', handler: '' },
  { name: 'Structural Patterns', handler: '' },
  { name: 'Template Method Pattern', handler: '' },
  { name: 'Composite Pattern', handler: '' },
  { name: 'Iterator Pattern', handler: '' },
  { name: 'State Pattern', handler: '' },
  { name: 'Null Object Pattern', handler: '' },
];
